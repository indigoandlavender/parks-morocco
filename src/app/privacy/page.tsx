import { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { getLegalContent } from "@/lib/fetchLegalContent";

export const metadata: Metadata = {
  title: "Privacy Policy - Parks Morocco",
  description: "Privacy Policy for Parks Morocco website.",
};

export default async function PrivacyPage() {
  const legalContent = await getLegalContent();

  return (
    <LegalPageLayout title="Privacy Policy">
      <div className="space-y-6">
        <p className="text-black">
          <strong>Last updated:</strong> January 2026
        </p>

        <h2 className="text-xl font-bold text-black">1. Information We Collect</h2>
        <p className="text-black">
          Parks Morocco is an informational website. We do not collect personal information unless
          you voluntarily provide it through contact forms or email communications.
        </p>

        <h2 className="text-xl font-bold text-black">2. Use of Cookies</h2>
        <p className="text-black">
          We may use cookies to enhance your browsing experience. Cookies are small files stored
          on your device that help us understand how you use our website. You can disable cookies
          in your browser settings.
        </p>

        <h2 className="text-xl font-bold text-black">3. Analytics</h2>
        <p className="text-black">
          We may use analytics services to understand website traffic and usage patterns. This
          information is collected anonymously and used to improve our website.
        </p>

        <h2 className="text-xl font-bold text-black">4. Third-Party Services</h2>
        <p className="text-black">
          Our website may use third-party services that have their own privacy policies. We
          encourage you to review their policies when using their services.
        </p>

        <h2 className="text-xl font-bold text-black">5. Data Security</h2>
        <p className="text-black">
          We implement reasonable security measures to protect any information collected. However,
          no internet transmission is completely secure.
        </p>

        <h2 className="text-xl font-bold text-black">6. Your Rights</h2>
        <p className="text-black">
          You have the right to access, correct, or delete any personal information we may have
          collected. Contact us to exercise these rights.
        </p>

        <h2 className="text-xl font-bold text-black">7. Changes to This Policy</h2>
        <p className="text-black">
          We may update this privacy policy from time to time. Changes will be posted on this page
          with an updated revision date.
        </p>

        <h2 className="text-xl font-bold text-black">8. Contact</h2>
        <p className="text-black">
          If you have questions about this privacy policy, please contact us through the information
          provided on our About page.
        </p>

        {legalContent.privacyPolicy && legalContent.privacyPolicy !== "Privacy Policy" && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold text-black mb-4">Additional Privacy Information</h2>
            <div className="whitespace-pre-wrap text-black">{legalContent.privacyPolicy}</div>
          </div>
        )}
      </div>
    </LegalPageLayout>
  );
}
