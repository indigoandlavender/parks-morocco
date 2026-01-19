import { google } from "googleapis";
import credentials from "./google-credentials.json";

const DOCUMENT_ID = "1OIw-cgup17vdimqveVNOmSBSrRbykuTVM39Umm-PJtQ";

export interface LegalContent {
  termsOfService: string;
  privacyPolicy: string;
  disclaimer: string;
}

export async function fetchLegalContent(): Promise<LegalContent> {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/documents.readonly"],
    });

    const docs = google.docs({ version: "v1", auth });
    const response = await docs.documents.get({ documentId: DOCUMENT_ID });

    const content = response.data.body?.content || [];
    let fullText = "";

    // Extract text from document
    for (const element of content) {
      if (element.paragraph?.elements) {
        for (const textElement of element.paragraph.elements) {
          if (textElement.textRun?.content) {
            fullText += textElement.textRun.content;
          }
        }
      }
    }

    // Parse sections (assuming document has headers for each section)
    const sections = parseSections(fullText);

    return {
      termsOfService: sections.termsOfService || "Terms of Service",
      privacyPolicy: sections.privacyPolicy || "Privacy Policy",
      disclaimer: sections.disclaimer || "Disclaimer",
    };
  } catch (error) {
    console.error("Error fetching legal content:", error);
    // Return defaults if fetch fails
    return {
      termsOfService: "Terms of Service",
      privacyPolicy: "Privacy Policy",
      disclaimer: "Disclaimer",
    };
  }
}

function parseSections(text: string): Partial<LegalContent> {
  const result: Partial<LegalContent> = {};

  // Try to find and extract sections based on common headers
  const termsMatch = text.match(/Terms of Service[\s\S]*?(?=Privacy Policy|Disclaimer|$)/i);
  const privacyMatch = text.match(/Privacy Policy[\s\S]*?(?=Terms of Service|Disclaimer|$)/i);
  const disclaimerMatch = text.match(/Disclaimer[\s\S]*?(?=Terms of Service|Privacy Policy|$)/i);

  if (termsMatch) result.termsOfService = termsMatch[0].trim();
  if (privacyMatch) result.privacyPolicy = privacyMatch[0].trim();
  if (disclaimerMatch) result.disclaimer = disclaimerMatch[0].trim();

  return result;
}

// Cache the content for static generation
let cachedContent: LegalContent | null = null;

export async function getLegalContent(): Promise<LegalContent> {
  if (cachedContent) return cachedContent;
  cachedContent = await fetchLegalContent();
  return cachedContent;
}
