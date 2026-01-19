"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { parks, regions } from "@/data/parks";
import ParkCard from "@/components/ParkCard";

function ParksContent() {
  const searchParams = useSearchParams();
  const initialRegion = searchParams.get("region") || "";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState(initialRegion);

  const filteredParks = useMemo(() => {
    return parks.filter((park) => {
      const matchesSearch =
        searchQuery === "" ||
        park.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        park.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        park.nearestCity.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesRegion =
        selectedRegion === "" || park.region === selectedRegion;

      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  return (
    <>
      {/* Filters */}
      <section className="bg-gray-50 py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <label htmlFor="search" className="sr-only">
                Search parks
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search by name, description, or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-green-600 text-black bg-white"
              />
            </div>

            {/* Region Filter */}
            <div className="md:w-64">
              <label htmlFor="region" className="sr-only">
                Filter by region
              </label>
              <select
                id="region"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-green-600 text-black bg-white"
              >
                <option value="">All Regions</option>
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <p className="text-black mb-8">
            Showing {filteredParks.length} of {parks.length} parks
            {selectedRegion && ` in ${selectedRegion}`}
          </p>

          {filteredParks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredParks.map((park) => (
                <ParkCard key={park.id} park={park} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-black mb-4">No parks found</p>
              <p className="text-black">
                Try adjusting your search or filter criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedRegion("");
                }}
                className="mt-4 text-green-700 font-medium hover:text-green-800"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Region Quick Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-black mb-6">
            Browse by Region
          </h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedRegion("")}
              className={`px-4 py-2 border transition-colors ${
                selectedRegion === ""
                  ? "bg-green-800 text-white border-green-800"
                  : "bg-white text-black border-gray-300 hover:border-green-600"
              }`}
            >
              All Regions
            </button>
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 border transition-colors ${
                  selectedRegion === region
                    ? "bg-green-800 text-white border-green-800"
                    : "bg-white text-black border-gray-300 hover:border-green-600"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ParksLoading() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-black">Loading parks...</p>
      </div>
    </div>
  );
}

export default function ParksPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Explore Our Parks</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Discover Morocco&apos;s 11 national parks, each offering unique
            landscapes, wildlife, and experiences.
          </p>
        </div>
      </section>

      <Suspense fallback={<ParksLoading />}>
        <ParksContent />
      </Suspense>
    </div>
  );
}
