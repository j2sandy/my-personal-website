// src/pages/WellnessPillarPage.jsx
import { useParams, Link } from 'react-router-dom';
import { wellnessData } from '../data/wellnessData';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export default function WellnessPillarPage({ darkMode }) {
  const { pillarId } = useParams();
  const pillar = wellnessData.pillars.find((p) => p.id === pillarId);

  if (!pillar) {
    return (
      <div className="p-6">
        <p>Pillar not found.</p>
        <Link to="/wellness" className="text-blue-500 underline">
          Back to Wellness
        </Link>
      </div>
    );
  }

  return (
    <div className={`px-6 py-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Link to="/wellness" className="text-blue-500 underline mb-4 block">
        ← Back to Wellness
      </Link>

      <h1 className="text-3xl font-bold mb-4">{pillar.title}</h1>
      <p className="mb-8">{pillar.intro}</p>

      {/* My Journey Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">My Journey</h2>
        <p className="mb-4">{pillar.journey.description}</p>
        <Calendar
          localizer={localizer}
          events={pillar.journey.events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 400 }}
          className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}
        />
      </section>

      {/* Actionable Steps */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Actionable Steps</h2>
        <ul className="list-disc pl-5 space-y-2">
          {pillar.actionableSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </section>

      {/* Reading Catalog */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Reading Catalog</h2>
        {['planned', 'reading', 'finished'].map((status) => (
          <div key={status} className="mb-6">
            <h3 className="text-xl font-semibold capitalize">{status.replace('_', ' ')}</h3>
            <ul className="list-disc pl-5 space-y-1">
              {pillar.readingCatalog[status].map((book, index) => (
                <li key={index}>{book}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
