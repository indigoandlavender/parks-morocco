import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan Your Visit - Parks Morocco",
  description:
    "Everything you need to know to plan your visit to Morocco's national parks. Permits, fees, safety guidelines, accommodation, and guided tours.",
};

export default function PlanYourVisitPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Plan Your Visit</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Everything you need to know to make the most of your national park
            experience in Morocco.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-gray-50 py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap gap-4">
            <a
              href="#permits"
              className="text-black hover:text-green-700 font-medium"
            >
              Permits & Fees
            </a>
            <a
              href="#safety"
              className="text-black hover:text-green-700 font-medium"
            >
              Safety Guidelines
            </a>
            <a
              href="#accommodation"
              className="text-black hover:text-green-700 font-medium"
            >
              Accommodation
            </a>
            <a
              href="#guides"
              className="text-black hover:text-green-700 font-medium"
            >
              Guides & Tours
            </a>
            <a
              href="#getting-there"
              className="text-black hover:text-green-700 font-medium"
            >
              Getting There
            </a>
            <a
              href="#best-times"
              className="text-black hover:text-green-700 font-medium"
            >
              Best Times to Visit
            </a>
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Permits & Fees */}
          <div id="permits" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-black mb-6">
              Permits & Fees
            </h2>
            <div className="bg-gray-50 p-6 mb-6">
              <h3 className="font-bold text-black mb-4">Entry Fees</h3>
              <p className="text-black mb-4">
                Most Moroccan national parks have modest entry fees that support
                conservation efforts and local communities.
              </p>
              <ul className="space-y-2 text-black">
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Adult entry (per day)</span>
                  <span className="font-medium">20-50 MAD</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Children (under 12)</span>
                  <span className="font-medium">Free - 20 MAD</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Vehicle entry</span>
                  <span className="font-medium">20-30 MAD</span>
                </li>
                <li className="flex justify-between">
                  <span>Camping permit (per night)</span>
                  <span className="font-medium">30-50 MAD</span>
                </li>
              </ul>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-black">
                <span className="font-bold">Note:</span> Fees vary by park and
                are subject to change. It&apos;s recommended to confirm current
                fees at park entrances or visitor centers.
              </p>
            </div>
          </div>

          {/* Safety Guidelines */}
          <div id="safety" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-black mb-6">
              Safety Guidelines
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-black mb-2">Mountain Safety</h3>
                <ul className="list-disc list-inside text-black space-y-1">
                  <li>Always inform someone of your hiking plans</li>
                  <li>Carry adequate water (minimum 2L per person per day)</li>
                  <li>Be prepared for sudden weather changes</li>
                  <li>Hire a licensed guide for high-altitude treks</li>
                  <li>Start early to avoid afternoon storms</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-black mb-2">Desert Safety</h3>
                <ul className="list-disc list-inside text-black space-y-1">
                  <li>Carry extra water and fuel for vehicle trips</li>
                  <li>Travel with an experienced guide</li>
                  <li>Protect yourself from sun exposure</li>
                  <li>Avoid traveling during sandstorms</li>
                  <li>Carry a satellite phone or GPS device</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-black mb-2">Wildlife Safety</h3>
                <ul className="list-disc list-inside text-black space-y-1">
                  <li>Maintain safe distances from all wildlife</li>
                  <li>Do not feed animals</li>
                  <li>Store food securely</li>
                  <li>Be aware of venomous snakes in some areas</li>
                  <li>Respect Barbary macaques - they can bite</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Accommodation */}
          <div id="accommodation" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-black mb-6">Accommodation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-black mb-2">Mountain Refuges</h3>
                <p className="text-black">
                  Basic mountain huts available in Toubkal and other Atlas parks.
                  Dormitory-style accommodation with cooking facilities.
                  Reservations recommended during peak season.
                </p>
              </div>
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-black mb-2">Gîtes & Homestays</h3>
                <p className="text-black">
                  Traditional Berber guesthouses in villages near parks. Experience
                  local culture and hospitality. Often include home-cooked meals.
                </p>
              </div>
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-black mb-2">Camping</h3>
                <p className="text-black">
                  Designated camping areas available in most parks. Wild camping
                  permitted in some areas with proper permits. Bring all necessary
                  equipment.
                </p>
              </div>
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-black mb-2">Nearby Hotels</h3>
                <p className="text-black">
                  Towns near parks offer various hotel options. Marrakech, Agadir,
                  Fes, and Chefchaouen provide good bases for day trips.
                </p>
              </div>
            </div>
          </div>

          {/* Guides & Tours */}
          <div id="guides" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-black mb-6">Guides & Tours</h2>
            <p className="text-black mb-6">
              Hiring a local guide enhances your experience and supports local
              communities. For certain activities like climbing Jbel Toubkal,
              guides are strongly recommended.
            </p>
            <div className="bg-gray-50 p-6">
              <h3 className="font-bold text-black mb-4">Types of Guides</h3>
              <ul className="space-y-4 text-black">
                <li>
                  <span className="font-medium">Licensed Mountain Guides:</span>{" "}
                  Certified by the Moroccan government for high-altitude
                  trekking. Required for peaks above 3,500m.
                </li>
                <li>
                  <span className="font-medium">Nature Guides:</span>{" "}
                  Specialists in local flora, fauna, and bird watching.
                </li>
                <li>
                  <span className="font-medium">Cultural Guides:</span>{" "}
                  Knowledgeable about Berber traditions and local communities.
                </li>
                <li>
                  <span className="font-medium">Desert Guides:</span>{" "}
                  Essential for Saharan parks like Iriqui and Dakhla.
                </li>
              </ul>
            </div>
          </div>

          {/* Getting There */}
          <div id="getting-there" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-black mb-6">Getting There</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-black mb-2">By Air</h3>
                <p className="text-black">
                  International airports in Casablanca, Marrakech, Agadir, and Fes
                  provide access to different park regions. Dakhla has a domestic
                  airport for southern parks.
                </p>
              </div>
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-black mb-2">By Car</h3>
                <p className="text-black">
                  Rental cars are widely available and offer flexibility. 4WD is
                  recommended for mountain and desert parks. Road conditions vary;
                  check current conditions before traveling.
                </p>
              </div>
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-black mb-2">Public Transport</h3>
                <p className="text-black">
                  Buses and shared taxis (grands taxis) connect major cities to
                  towns near parks. Local transport from towns to park entrances
                  may require negotiation.
                </p>
              </div>
            </div>
          </div>

          {/* Best Times to Visit */}
          <div id="best-times" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-black mb-6">
              Best Times to Visit
            </h2>
            <div className="bg-gray-50 p-6">
              <div className="space-y-4 text-black">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-bold mb-2">Spring (March - May)</h3>
                  <p>
                    Ideal for most parks. Wildflowers bloom, temperatures are
                    pleasant. Good for Atlas trekking and bird watching in
                    coastal parks.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-bold mb-2">Summer (June - August)</h3>
                  <p>
                    Best for high Atlas peaks as snow melts. Hot in desert and
                    coastal areas. Mountain refuges busiest during this period.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-bold mb-2">Autumn (September - November)</h3>
                  <p>
                    Excellent conditions throughout Morocco. Comfortable
                    temperatures, fewer crowds. Ideal for photography.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Winter (December - February)</h3>
                  <p>
                    Best for desert parks and southern regions. Snow in Atlas
                    Mountains (skiing possible in Ifrane). Bird migration peaks
                    in wetland parks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-green-800 text-white p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Explore?</h2>
            <p className="text-white/90 mb-6">
              Browse our parks to find your perfect destination.
            </p>
            <Link
              href="/parks"
              className="inline-block bg-white text-green-800 px-8 py-3 font-bold hover:bg-gray-100 transition-colors"
            >
              Explore Parks
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
