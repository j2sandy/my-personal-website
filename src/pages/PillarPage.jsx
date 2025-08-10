import { useParams, Link } from "react-router-dom";
import { wellnessPillars } from "../data/wellnessData";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function PillarPage() {
  const { id } = useParams();
  const pillar = wellnessPillars.find(p => p.id === id);

  if (!pillar) return <p>Pillar not found.</p>;

  const eventDates = pillar.journeyEvents.map(e => new Date(e.date));

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link to="/" className="text-blue-500 underline">← Back to Wellness</Link>

      <h1 className="text-3xl font-bold mt-4">{pillar.title}</h1>
      <p className="mt-2 text-gray-700">{pillar.intro}</p>

      {/* Journey Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">My Journey</h2>
        <div className="mt-4">
          <Calendar
            tileClassName={({ date }) =>
              eventDates.some(d => d.toDateString() === date.toDateString())
                ? "bg-green-200 rounded-lg"
                : null
            }
          />
        </div>

        <VerticalTimeline className="mt-6">
          {pillar.journeyEvents.map((event, idx) => (
            <VerticalTimelineElement
              key={idx}
              date={event.date}
              iconStyle={{ background: "#4CAF50", color: "#fff" }}
            >
              <h3 className="font-bold">{event.title}</h3>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </section>

      {/* Actionable Steps */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Actionable Steps</h2>
        <ul className="list-disc ml-6 mt-2">
          {pillar.actionableSteps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ul>
      </section>

      {/* Reading Catalog */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Reading Catalog</h2>
        {["planned", "current", "finished"].map(category => (
          <div key={category} className="mt-4">
            <h3 className="text-lg font-semibold capitalize">{category}</h3>
            <ul className="list-disc ml-6">
              {pillar.readingCatalog[category].map((book, idx) => (
                <li key={idx}>{book}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
              }
