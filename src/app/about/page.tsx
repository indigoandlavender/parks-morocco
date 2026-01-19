import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Parks Morocco",
  description:
    "Learn about Morocco's national park system, conservation efforts, and the natural heritage we protect.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Parks Morocco</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Protecting Morocco&apos;s natural heritage for future generations.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-gray-50 py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap gap-4">
            <a
              href="#mission"
              className="text-black hover:text-green-700 font-medium"
            >
              Our Mission
            </a>
            <a
              href="#conservation"
              className="text-black hover:text-green-700 font-medium"
            >
              Conservation
            </a>
            <a
              href="#history"
              className="text-black hover:text-green-700 font-medium"
            >
              History
            </a>
            <a
              href="#ecosystems"
              className="text-black hover:text-green-700 font-medium"
            >
              Ecosystems
            </a>
            <a
              href="#contact"
              className="text-black hover:text-green-700 font-medium"
            >
              Contact
            </a>
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission */}
          <div id="mission" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-black mb-6">Our Mission</h2>
            <p className="text-black text-lg leading-relaxed mb-6">
              Morocco&apos;s national parks represent a commitment to
              preserving the country&apos;s extraordinary natural diversity.
              From the snow-capped peaks of the High Atlas to the golden dunes
              of the Sahara, from the cedar forests of the Middle Atlas to the
              pristine Mediterranean coast, these protected areas safeguard
              unique ecosystems found nowhere else on Earth.
            </p>
            <p className="text-black text-lg leading-relaxed">
              Our mission is to protect these irreplaceable natural treasures
              while providing opportunities for visitors to experience and
              appreciate Morocco&apos;s wild places. We work to balance
              conservation with sustainable tourism, ensuring that future
              generations can enjoy these landscapes.
            </p>
          </div>

          {/* Conservation */}
          <div id="conservation" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-black mb-6">
              Conservation Efforts
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-black mb-2">Species Protection</h3>
                <p className="text-black mb-4">
                  Morocco&apos;s parks protect numerous endangered species,
                  including:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-black">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-700 mr-3"></span>
                    Northern Bald Ibis (critically endangered)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-700 mr-3"></span>
                    Barbary Macaque (endangered)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-700 mr-3"></span>
                    Mediterranean Monk Seal (endangered)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-700 mr-3"></span>
                    Barbary Stag (vulnerable)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-700 mr-3"></span>
                    Dorcas Gazelle (vulnerable)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-700 mr-3"></span>
                    Moroccan Fir (endangered)
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-black mb-2">Breeding Programs</h3>
                <p className="text-black">
                  Souss-Massa National Park runs successful captive breeding
                  programs for the scimitar-horned oryx and dorcas gazelle, with
                  the goal of reintroducing these species to their native
                  habitats.
                </p>
              </div>

              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-black mb-2">Habitat Restoration</h3>
                <p className="text-black">
                  Ongoing efforts include reforestation of degraded areas,
                  restoration of wetlands, and protection of critical corridors
                  that allow wildlife to move between parks.
                </p>
              </div>
            </div>
          </div>

          {/* History */}
          <div id="history" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-black mb-6">History</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-green-700 pl-6">
                <p className="font-bold text-black">1942</p>
                <p className="text-black">
                  Toubkal National Park established as Morocco&apos;s first
                  national park, protecting the High Atlas Mountains and North
                  Africa&apos;s highest peak.
                </p>
              </div>
              <div className="border-l-4 border-green-700 pl-6">
                <p className="font-bold text-black">1950</p>
                <p className="text-black">
                  Tazekka National Park created to protect the cedar forests of
                  the Middle Atlas.
                </p>
              </div>
              <div className="border-l-4 border-green-700 pl-6">
                <p className="font-bold text-black">1991</p>
                <p className="text-black">
                  Souss-Massa National Park established to protect the last
                  remaining Northern Bald Ibis populations and coastal
                  ecosystems.
                </p>
              </div>
              <div className="border-l-4 border-green-700 pl-6">
                <p className="font-bold text-black">2004</p>
                <p className="text-black">
                  Major expansion of the park system with the creation of
                  Ifrane, Talassemtane, Al Hoceima, and Haut Atlas Oriental
                  national parks.
                </p>
              </div>
              <div className="border-l-4 border-green-700 pl-6">
                <p className="font-bold text-black">2006</p>
                <p className="text-black">
                  Dakhla and Khenifiss national parks established, extending
                  protection to southern Morocco&apos;s coastal and desert
                  ecosystems.
                </p>
              </div>
              <div className="border-l-4 border-green-700 pl-6">
                <p className="font-bold text-black">Today</p>
                <p className="text-black">
                  11 national parks protecting over 7,700 km² of diverse
                  ecosystems across Morocco.
                </p>
              </div>
            </div>
          </div>

          {/* Ecosystems */}
          <div id="ecosystems" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-black mb-6">
              Ecosystems Protected
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-black mb-2">
                  Mediterranean Forests
                </h3>
                <p className="text-black">
                  Ancient cedar and oak forests in the Middle Atlas, home to
                  Barbary macaques and diverse bird species.
                </p>
              </div>
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-black mb-2">Alpine Mountains</h3>
                <p className="text-black">
                  High Atlas peaks with unique alpine flora, glacial valleys,
                  and traditional Berber communities.
                </p>
              </div>
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-black mb-2">Coastal Wetlands</h3>
                <p className="text-black">
                  Vital stopover points for migratory birds along the East
                  Atlantic Flyway, including the Khenifiss lagoon.
                </p>
              </div>
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-black mb-2">Saharan Desert</h3>
                <p className="text-black">
                  Sand dunes, acacia savannas, and seasonal lakes supporting
                  desert-adapted wildlife.
                </p>
              </div>
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-black mb-2">Marine Habitats</h3>
                <p className="text-black">
                  Pristine Mediterranean and Atlantic coastal waters home to
                  dolphins, sea turtles, and monk seals.
                </p>
              </div>
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-black mb-2">Argan Forests</h3>
                <p className="text-black">
                  UNESCO Biosphere Reserve protecting the endemic argan tree,
                  found only in Morocco.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-black mb-6">Contact</h2>
            <div className="bg-gray-50 p-6">
              <p className="text-black mb-4">
                For more information about visiting Morocco&apos;s national
                parks, please contact:
              </p>
              <div className="space-y-2 text-black">
                <p>
                  <span className="font-medium">Haut Commissariat aux Eaux et Forêts</span>
                </p>
                <p>
                  <span className="font-medium">
                    High Commission for Water, Forests and Desertification Control
                  </span>
                </p>
                <p>Rabat, Morocco</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-green-800 text-white p-8">
            <h2 className="text-2xl font-bold mb-4">Explore Morocco&apos;s Parks</h2>
            <p className="text-white/90 mb-6">
              Discover the natural beauty waiting for you.
            </p>
            <Link
              href="/parks"
              className="inline-block bg-white text-green-800 px-8 py-3 font-bold hover:bg-gray-100 transition-colors"
            >
              Browse Parks
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
