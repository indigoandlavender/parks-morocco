import { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { getLegalContent } from "@/lib/fetchLegalContent";

export const metadata: Metadata = {
  title: "Disclaimer - Parks Morocco",
  description: "Disclaimer for Parks Morocco website.",
};

export default async function DisclaimerPage() {
  const legalContent = await getLegalContent();

  return (
    <LegalPageLayout title="Disclaimer">
      <div className="space-y-6">
        <p className="text-black">
          <strong>Last updated:</strong> January 2026
        </p>

        <h2 className="text-xl font-bold text-black">General Disclaimer</h2>
        <p className="text-black">
          The information provided on Parks Morocco is for general informational purposes only.
          While we strive to keep the information up to date and accurate, we make no representations
          or warranties of any kind, express or implied, about the completeness, accuracy, reliability,
          suitability, or availability of the information, products, services, or related graphics
          contained on the website.
        </p>

        <h2 className="text-xl font-bold text-black">Outdoor Activity Risks</h2>
        <p className="text-black">
          Visiting national parks and engaging in outdoor activities involves inherent risks including
          but not limited to: adverse weather conditions, wildlife encounters, difficult terrain,
          altitude sickness, and physical injury. Visitors assume all responsibility for their safety
          and should be properly prepared, equipped, and informed before undertaking any activities.
        </p>

        <h2 className="text-xl font-bold text-black">Not Official Government Source</h2>
        <p className="text-black">
          Parks Morocco is not an official government website. For official information about
          Morocco&apos;s national parks, including current regulations, permits, and fees, please
          contact the Haut Commissariat aux Eaux et Forêts (High Commission for Water, Forests and
          Desertification Control) or visit park offices directly.
        </p>

        <h2 className="text-xl font-bold text-black">Professional Advice</h2>
        <p className="text-black">
          The content on this website does not constitute professional advice. For specific guidance
          regarding travel, health, safety, or legal matters, please consult appropriate professionals.
        </p>

        <h2 className="text-xl font-bold text-black">External Links</h2>
        <p className="text-black">
          Through this website, you may be able to link to other websites which are not under our
          control. We have no control over the nature, content, and availability of those sites.
          The inclusion of any links does not necessarily imply a recommendation or endorsement of
          the views expressed within them.
        </p>

        <h2 className="text-xl font-bold text-black">Limitation of Liability</h2>
        <p className="text-black">
          In no event will Parks Morocco be liable for any loss or damage including without limitation,
          indirect or consequential loss or damage, or any loss or damage whatsoever arising from
          loss of data or profits arising out of, or in connection with, the use of this website or
          information obtained from it.
        </p>

        {legalContent.disclaimer && legalContent.disclaimer !== "Disclaimer" && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold text-black mb-4">Additional Disclaimer</h2>
            <div className="whitespace-pre-wrap text-black">{legalContent.disclaimer}</div>
          </div>
        )}
      </div>
    </LegalPageLayout>
  );
}
