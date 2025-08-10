import React, { useState } from "react";
import { wellnessData } from "../data/wellnessData";

export default function WellnessPage() {
  const [selectedPillar, setSelectedPillar] = useState(null);

  const handleOpenModal = (pillar) => setSelectedPillar(pillar);
  const handleCloseModal = () => setSelectedPillar(null);

  return (
    <div className="wellness-container">
      <h1 className="page-title">Pillars of Wellness</h1>
      <div className="pillars-grid">
        {wellnessData.map((pillar) => (
          <div
            key={pillar.id}
            className="pillar-card"
            onClick={() => handleOpenModal(pillar)}
          >
            <h2>{pillar.title}</h2>
            <p>{pillar.description}</p>
          </div>
        ))}
      </div>

      {selectedPillar && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedPillar.title}</h2>
            <ul>
              {selectedPillar.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}

      <style>{`
        .wellness-container {
          padding: 2rem;
          text-align: center;
          background: #f4f4f4;
          min-height: 100vh;
        }
        .page-title {
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }
        .pillar-card {
          background: white;
          padding: 1rem;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .pillar-card:hover {
          transform: translateY(-3px);
        }
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          max-width: 400px;
          width: 90%;
        }
        .modal h2 {
          margin-bottom: 1rem;
        }
        .modal ul {
          text-align: left;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .modal button {
          padding: 0.5rem 1rem;
          background: #007bff;
          border: none;
          border-radius: 5px;
          color: white;
          cursor: pointer;
        }
        .modal button:hover {
          background: #0056b3;
        }
      `}</style>
    </div>
  );
}
