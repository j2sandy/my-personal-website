import React from "react";
import { Link } from "react-router-dom";
import { wellnessData } from "../data/wellnessData";

export default function WellnessHome() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>My Pillars of Wellness</h1>
      <p>
        These four pillars — Sleep, Nutrition, Activity, and Meditation — are
        the foundation of my wellness journey. Click on each to explore my
        learnings and actionable insights.
      </p>

      <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
        {wellnessData.map((pillar) => (
          <Link
            key={pillar.id}
            to={`/pillar/${pillar.id}`}
            style={{
              padding: "20px",
              background: "#f0f0f0",
              borderRadius: "10px",
              textDecoration: "none",
              color: "black",
            }}
          >
            <h2>{pillar.title}</h2>
            <p>{pillar.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
