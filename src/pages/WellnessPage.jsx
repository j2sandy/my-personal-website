import { Link } from "react-router-dom";
import { wellnessData } from "../data/wellnessData";

export default function WellnessPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Pillars of Wellness</h1>
      <p className="mt-4 text-center text-gray-700">
        I selected these pillars because they form the foundation of a healthy and fulfilling life.
        Click on each to explore actionable insights, my personal journey, and curated resources.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {wellnessPillars.map(pillar => (
          <Link
            to={`/pillar/${pillar.id}`}
            key={pillar.id}
            className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <h2 className="text-xl font-semibold">{pillar.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
