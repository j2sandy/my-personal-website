import { useState } from 'react';
import { wellnessData } from '../data/wellnessData';

export default function WellnessPage({ darkMode }) {
  const [selectedPillar, setSelectedPillar] = useState(null);

  return (
    <div className={`min-h-screen px-6 py-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <h1 className="text-4xl font-bold text-center mb-12">Pillars of Wellness</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {wellnessData.map((pillar) => (
          <div
            key={pillar.id}
            onClick={() => setSelectedPillar(pillar)}
            className={`p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform ${
              darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
            }`}
          >
            <h2 className="text-2xl font-semibold mb-2">{pillar.title}</h2>
            <p className="text-sm opacity-80">{pillar.description}</p>
          </div>
        ))}
      </div>

      {selectedPillar && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className={`w-full max-w-3xl p-8 rounded-lg shadow-xl overflow-y-auto max-h-[80vh] ${
            darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
          }`}>
            <button
              className="absolute top-4 right-4 text-lg font-bold"
              onClick={() => setSelectedPillar(null)}
            >
              ✕
            </button>
            <h2 className="text-3xl font-bold mb-6">{selectedPillar.title}</h2>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">My Learnings</h3>
              <ul className="list-disc pl-6 space-y-1">
                {selectedPillar.learnings.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Reading Catalog</h3>
              <ul className="list-disc pl-6 space-y-1">
                {selectedPillar.readingCatalog.map((book, idx) => (
                  <li key={idx}>
                    <a href={book.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                      {book.title}
                    </a> — {book.author}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How to Incorporate into Daily Life</h3>
              <ul className="list-disc pl-6 space-y-1">
                {selectedPillar.dailyIncorporation.map((tip, idx) => <li key={idx}>{tip}</li>)}
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">References</h3>
              <ul className="list-disc pl-6 space-y-1">
                {selectedPillar.references.map((ref, idx) => (
                  <li key={idx}>
                    <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                      {ref.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
