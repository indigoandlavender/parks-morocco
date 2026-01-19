import { google } from "googleapis";

const SPREADSHEET_ID = "1ap2SG7XkXKnevP4oHNMt0Mpo_X8SD0-iu54rA6atzDM";

export interface LegalContent {
  termsOfService: string;
  privacyPolicy: string;
  disclaimer: string;
}

function getCredentials() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) {
    return null;
  }

  return {
    client_email: clientEmail,
    private_key: privateKey,
  };
}

export async function fetchLegalContent(): Promise<LegalContent> {
  try {
    const credentials = getCredentials();

    if (!credentials) {
      console.log("Google credentials not configured, using default content");
      return getDefaultContent();
    }

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Fetch all data from the sheet (assuming columns: Type, Title, Content)
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "A:C", // Adjust range as needed
    });

    const rows = response.data.values || [];
    const content: LegalContent = {
      termsOfService: "",
      privacyPolicy: "",
      disclaimer: "",
    };

    // Skip header row, parse content
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (!row || row.length < 2) continue;

      const type = (row[0] || "").toLowerCase().trim();
      const value = row[1] || row[2] || ""; // Use second or third column for content

      if (type.includes("terms")) {
        content.termsOfService = value;
      } else if (type.includes("privacy")) {
        content.privacyPolicy = value;
      } else if (type.includes("disclaimer")) {
        content.disclaimer = value;
      }
    }

    return {
      termsOfService: content.termsOfService || "Terms of Service",
      privacyPolicy: content.privacyPolicy || "Privacy Policy",
      disclaimer: content.disclaimer || "Disclaimer",
    };
  } catch (error) {
    console.error("Error fetching legal content:", error);
    return getDefaultContent();
  }
}

function getDefaultContent(): LegalContent {
  return {
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
    disclaimer: "Disclaimer",
  };
}

// Cache the content for static generation
let cachedContent: LegalContent | null = null;

export async function getLegalContent(): Promise<LegalContent> {
  if (cachedContent) return cachedContent;
  cachedContent = await fetchLegalContent();
  return cachedContent;
}
