import { notFound } from "next/navigation";
import Link from "next/link";
import { parks, getParkById } from "@/data/parks";
import type { Metadata } from "next";

interface PageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return parks.map((park) => ({
    id: park.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const park = getParkById(params.id);

  if (!park) {
    return {
      title: "Park Not Found - Parks Morocco",
    };
  }

  return {
    title: `${park.name} - Parks Morocco`,
    description: park.description,
  };
}

export default function ParkPage({ params }: PageProps) {
  const park = getParkById(params.id);

  if (!park) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-white/80">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/parks" className="hover:text-white">
                  Parks
                </Link>
              </li>
              <li>/</li>
              <li className="text-white">{park.name}</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="text-white/80 mb-2">{park.region}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{park.name}</h1>
            <p className="text-xl text-white/80 mb-6" dir="rtl">
              {park.arabicName}
            </p>
            <p className="text-xl text-white/90">{park.description}</p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-black font-medium uppercase mb-1">
                Established
              </p>
              <p className="text-xl font-bold text-black">{park.established}</p>
            </div>
            <div>
              <p className="text-sm text-black font-medium uppercase mb-1">
                Size
              </p>
              <p className="text-xl font-bold text-black">{park.size}</p>
            </div>
            <div>
              <p className="text-sm text-black font-medium uppercase mb-1">
                Nearest City
              </p>
              <p className="text-xl font-bold text-black">{park.nearestCity}</p>
            </div>
            <div>
              <p className="text-sm text-black font-medium uppercase mb-1">
                Best Time to Visit
              </p>
              <p className="text-xl font-bold text-black">
                {park.bestTimeToVisit}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* About */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-black mb-4">
                  About {park.name}
                </h2>
                <p className="text-black leading-relaxed">
                  {park.longDescription}
                </p>
              </div>

              {/* Highlights */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-black mb-4">
                  Highlights
                </h2>
                <ul className="space-y-3">
                  {park.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-700 mr-3 mt-1">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-black">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Wildlife */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-black mb-4">Wildlife</h2>
                <div className="flex flex-wrap gap-2">
                  {park.wildlife.map((animal) => (
                    <span
                      key={animal}
                      className="bg-green-100 text-black px-4 py-2"
                    >
                      {animal}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Activities */}
              <div className="bg-gray-50 p-6 mb-6">
                <h3 className="text-lg font-bold text-black mb-4">
                  Activities
                </h3>
                <ul className="space-y-2">
                  {park.activities.map((activity) => (
                    <li key={activity} className="flex items-center text-black">
                      <span className="w-2 h-2 bg-green-700 mr-3"></span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Location */}
              <div className="bg-gray-50 p-6 mb-6">
                <h3 className="text-lg font-bold text-black mb-4">Location</h3>
                <p className="text-black mb-2">
                  <span className="font-medium">Region:</span> {park.region}
                </p>
                <p className="text-black mb-2">
                  <span className="font-medium">Nearest City:</span>{" "}
                  {park.nearestCity}
                </p>
                <p className="text-black">
                  <span className="font-medium">Coordinates:</span>{" "}
                  {park.coordinates.lat.toFixed(4)}°N,{" "}
                  {Math.abs(park.coordinates.lng).toFixed(4)}°W
                </p>
              </div>

              {/* Plan Visit CTA */}
              <div className="bg-green-800 text-white p-6">
                <h3 className="text-lg font-bold mb-2">Plan Your Visit</h3>
                <p className="text-white/90 mb-4">
                  Get information about permits, accommodation, and guided
                  tours.
                </p>
                <Link
                  href="/plan-your-visit"
                  className="inline-block bg-white text-green-800 px-6 py-2 font-bold hover:bg-gray-100 transition-colors"
                >
                  Start Planning
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Parks */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/parks"
            className="inline-flex items-center text-green-700 font-medium hover:text-green-800"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to all parks
          </Link>
        </div>
      </section>
    </div>
  );
}
