import { useState } from 'react';
import CalendarPage from './CalendarPage';
import { wellnessData } from '../data/wellnessData';

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'calendar', label: 'Calendar' },
  { id: 'sleep', label: 'Sleep' },
  { id: 'nutrition', label: 'Nutrition' },
  { id: 'meditation', label: 'Meditation' },
  { id: 'fasting', label: 'Fasting' },
  { id: 'activity', label: 'Activity' },
];

export default function WellnessPage({ darkMode }) {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div>
            <p className="mb-6">
              I’ve selected these 5 wellness pillars because they represent the foundation of a balanced,
              healthy, and fulfilling life. Each pillar focuses on a key area that impacts my mental,
              physical, and emotional well-being. Click on a pillar tab to explore actionable insights,
              my personal journey, and curated resources.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {wellnessData.pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className={`p-6 rounded-xl shadow-md ${
                    darkMode ? 'bg-gray-800' : 'bg-gray-100'
                  }`}
                >
                  <h2 className="text-xl font-semibold mb-2">{pillar.title}</h2>
                  <p className="text-sm opacity-80">{pillar.shortDescription}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'calendar':
        return <CalendarPage darkMode={darkMode} />;

      default:
        // For pillar tabs, show detailed content from wellnessData
        const pillar = wellnessData.pillars.find((p) => p.id === activeTab);
        if (!pillar) return <p>Content not found.</p>;

        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">{pillar.title}</h2>
            <section className="mb-6">
              <h3 className="font-semibold mb-2">Introduction</h3>
              <p>{pillar.intro}</p>
            </section>
            <section className="mb-6">
              <h3 className="font-semibold mb-2">My Journey</h3>
              <p>{pillar.journey}</p>
            </section>
            <section className="mb-6">
              <h3 className="font-semibold mb-2">Actionable Steps</h3>
              <ul className="list-disc list-inside">
                {pillar.actionableSteps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3 className="font-semibold mb-2">Reading Catalog</h3>
              <ul className="list-disc list-inside">
                {pillar.readingCatalog.map((item, idx) => (
                  <li key={idx}>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                    {item.status ? ` — ${item.status}` : ''}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        );
    }
  };

  return (
    <div className={`px-6 py-8 min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <h1 className="text-3xl font-bold mb-6">Wellness</h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 rounded-t-lg focus:outline-none transition ${
              activeTab === tab.id
                ? darkMode
                  ? 'bg-gray-800 border-b-2 border-blue-500 font-semibold'
                  : 'bg-gray-100 border-b-2 border-blue-600 font-semibold'
                : darkMode
                ? 'bg-gray-700 hover:bg-gray-600'
                : 'bg-gray-50 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>{renderContent()}</div>
    </div>
  );
}
