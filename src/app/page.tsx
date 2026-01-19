import Link from "next/link";
import { parks, regions } from "@/data/parks";
import ParkCard from "@/components/ParkCard";

export default function Home() {
  const featuredParks = parks.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Discover Morocco&apos;s National Parks
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Explore 11 protected areas spanning over 7,700 km² of diverse
              ecosystems, from the snow-capped Atlas Mountains to the golden
              Sahara Desert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/parks"
                className="inline-block bg-white text-green-800 px-8 py-3 font-bold hover:bg-gray-100 transition-colors text-center"
              >
                Explore All Parks
              </Link>
              <Link
                href="/plan-your-visit"
                className="inline-block border-2 border-white text-white px-8 py-3 font-bold hover:bg-white/10 transition-colors text-center"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-green-700">11</p>
              <p className="text-black mt-1">National Parks</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-700">7,700+</p>
              <p className="text-black mt-1">km² Protected</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-700">1942</p>
              <p className="text-black mt-1">First Park Established</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-700">6</p>
              <p className="text-black mt-1">Unique Regions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search by Region */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-8">
            Explore by Region
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {regions.map((region) => (
              <Link
                key={region}
                href={`/parks?region=${encodeURIComponent(region)}`}
                className="p-6 border border-gray-200 hover:border-green-600 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-black group-hover:text-green-700">
                  {region}
                </h3>
                <p className="text-sm text-black mt-1">
                  {parks.filter((p) => p.region === region).length} parks
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Parks */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-black">Featured Parks</h2>
            <Link
              href="/parks"
              className="text-green-700 font-medium hover:text-green-800"
            >
              View all parks
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredParks.map((park) => (
              <ParkCard key={park.id} park={park} />
            ))}
          </div>
        </div>
      </section>

      {/* Plan Your Visit CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-800 text-white p-8 md:p-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Plan Your Visit</h2>
              <p className="text-lg mb-6 text-white/90">
                Get essential information about permits, safety guidelines,
                accommodation options, and guided tours to make the most of your
                national park experience.
              </p>
              <Link
                href="/plan-your-visit"
                className="inline-block bg-white text-green-800 px-8 py-3 font-bold hover:bg-gray-100 transition-colors"
              >
                Start Planning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Conservation Message */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-4">
              Protecting Morocco&apos;s Natural Heritage
            </h2>
            <p className="text-lg text-black mb-6">
              Morocco&apos;s national parks safeguard unique ecosystems and
              endangered species, from the Northern Bald Ibis to the Barbary
              macaque. Your visit supports conservation efforts and local
              communities.
            </p>
            <Link
              href="/about"
              className="text-green-700 font-medium hover:text-green-800"
            >
              Learn about conservation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
