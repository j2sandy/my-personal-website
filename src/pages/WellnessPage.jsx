// src/pages/WellnessPage.jsx
import { Link } from 'react-router-dom';
import { wellnessData } from '../data/wellnessData';

export default function WellnessPage({ darkMode }) {
  return (
    <div className={`px-6 py-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <h1 className="text-3xl font-bold mb-6">Wellness</h1>

      <p className="mb-8">
        I’ve selected these 4 wellness pillars because they represent the foundation of a balanced,
        healthy, and fulfilling life. Each pillar focuses on a key area that impacts my mental,
        physical, and emotional well-being. Click on a pillar to explore actionable insights,
        my personal journey, and curated resources.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {wellnessData.pillars.map((pillar) => (
          <Link
            key={pillar.id}
            to={`/wellness/${pillar.id}`}
            className={`p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ${
              darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">{pillar.title}</h2>
            <p className="text-sm opacity-80">{pillar.shortDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
