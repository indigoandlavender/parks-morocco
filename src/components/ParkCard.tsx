import Link from "next/link";
import { Park } from "@/data/parks";

interface ParkCardProps {
  park: Park;
}

export default function ParkCard({ park }: ParkCardProps) {
  return (
    <Link href={`/parks/${park.id}`} className="group block">
      <article className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
        <div className="aspect-video bg-green-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
            <span className="text-white text-lg font-medium">{park.name}</span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-black group-hover:text-green-700 transition-colors">
              {park.name}
            </h3>
          </div>
          <p className="text-sm text-black mb-2">
            <span className="font-medium">{park.region}</span> &bull; Near{" "}
            {park.nearestCity}
          </p>
          <p className="text-black mb-4 line-clamp-2">{park.description}</p>
          <div className="flex flex-wrap gap-2">
            {park.activities.slice(0, 3).map((activity) => (
              <span
                key={activity}
                className="text-xs bg-gray-100 text-black px-2 py-1"
              >
                {activity}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
