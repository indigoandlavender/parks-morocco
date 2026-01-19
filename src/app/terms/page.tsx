import { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { getLegalContent } from "@/lib/fetchLegalContent";

export const metadata: Metadata = {
  title: "Terms of Service - Parks Morocco",
  description: "Terms of Service for Parks Morocco website.",
};

export default async function TermsPage() {
  const legalContent = await getLegalContent();

  return (
    <LegalPageLayout title="Terms of Service">
      <div className="space-y-6">
        <p className="text-black">
          <strong>Last updated:</strong> January 2026
        </p>

        <h2 className="text-xl font-bold text-black">1. Acceptance of Terms</h2>
        <p className="text-black">
          By accessing and using the Parks Morocco website, you accept and agree to be bound by
          the terms and provisions of this agreement. If you do not agree to these terms, please
          do not use this website.
        </p>

        <h2 className="text-xl font-bold text-black">2. Use of Website</h2>
        <p className="text-black">
          This website is provided for informational purposes about Morocco&apos;s national parks.
          The content is intended to help visitors plan their trips and learn about conservation efforts.
        </p>

        <h2 className="text-xl font-bold text-black">3. Accuracy of Information</h2>
        <p className="text-black">
          While we strive to provide accurate and up-to-date information about Morocco&apos;s national
          parks, we make no warranties or representations as to the accuracy, completeness, or
          reliability of any information on this site. Park conditions, fees, and regulations may
          change. Always verify information with official sources before your visit.
        </p>

        <h2 className="text-xl font-bold text-black">4. Intellectual Property</h2>
        <p className="text-black">
          All content on this website, including text, graphics, logos, and images, is the property
          of Parks Morocco or its content suppliers and is protected by international copyright laws.
        </p>

        <h2 className="text-xl font-bold text-black">5. Limitation of Liability</h2>
        <p className="text-black">
          Parks Morocco shall not be liable for any damages arising from the use or inability to use
          this website or from any information provided on the site. Visitors to national parks assume
          all risks associated with outdoor activities.
        </p>

        <h2 className="text-xl font-bold text-black">6. External Links</h2>
        <p className="text-black">
          This website may contain links to external sites. We are not responsible for the content
          or privacy practices of these external sites.
        </p>

        <h2 className="text-xl font-bold text-black">7. Changes to Terms</h2>
        <p className="text-black">
          We reserve the right to modify these terms at any time. Continued use of the website after
          changes constitutes acceptance of the new terms.
        </p>

        {legalContent.termsOfService && legalContent.termsOfService !== "Terms of Service" && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold text-black mb-4">Additional Terms</h2>
            <div className="whitespace-pre-wrap text-black">{legalContent.termsOfService}</div>
          </div>
        )}
      </div>
    </LegalPageLayout>
  );
}
