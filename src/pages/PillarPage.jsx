import React from "react";
import { useParams, Link } from "react-router-dom";
import { wellnessData } from "../data/wellnessData";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function PillarPage() {
  const { pillarId } = useParams();
  const pillar = wellnessData.find((p) => p.id === pillarId);

  if (!pillar) {
    return <p>Pillar not found.</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← Back</Link>
      <h1>{pillar.title}</h1>
      <p>{pillar.intro}</p>

      <h2>My Journey</h2>
      <Calendar />
      <ul>
        {pillar.journey.map((j, index) => (
          <li key={index}>
            <strong>{j.date}:</strong> {j.event}
          </li>
        ))}
      </ul>

      <h2>Actionable Steps</h2>
      <ul>
        {pillar.actionableSteps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>

      <h2>Reading Catalog</h2>
      <h3>Planned</h3>
      <ul>{pillar.readingCatalog.planned.map((b, i) => <li key={i}>{b}</li>)}</ul>
      <h3>Currently Reading</h3>
      <ul>{pillar.readingCatalog.reading.map((b, i) => <li key={i}>{b}</li>)}</ul>
      <h3>Finished</h3>
      <ul>{pillar.readingCatalog.finished.map((b, i) => <li key={i}>{b}</li>)}</ul>
    </div>
  );
}
