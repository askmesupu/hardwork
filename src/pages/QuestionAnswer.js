import React, { useState } from "react";

export default function AnswerQuestion() {
  const [showYesPic, setShowYesPic] = useState(false);
  const [showNoPic, setShowNoPic] = useState(false);

  const handleYes = () => {
    setShowYesPic(true);
    setTimeout(() => setShowYesPic(false), 2000);
    alert("I love you baby");
  };

  const handleNo = () => {
    setShowNoPic(true);
    setTimeout(() => setShowNoPic(false), 2000);
  };

  return (
    <div className="subpage-content">
      <h2>Will you stay forever with me?</h2>
      <div className="answer-buttons">
        <button style={{ fontSize: "1.5rem" }} onClick={handleYes}>Yes</button>
        <button style={{ fontSize: "1.5rem" }} onClick={handleNo}>No</button>
      </div>

      {showYesPic && (
        <div style={{ position: "fixed", top: "20%", left: "50%", transform: "translateX(-50%)", zIndex: 1000 }}>
          <img src="https://i.imgur.com/nXvrTyh.jpeg" alt="Yes" style={{ width: "200px" }} />
        </div>
      )}

      {showNoPic && (
        <div style={{ position: "fixed", top: "20%", left: "50%", transform: "translateX(-50%)", zIndex: 1000 }}>
          <img src="https://i.imgur.com/tpIx24B.png" alt="No" style={{ width: "200px" }} />
        </div>
      )}
    </div>
  );
        }
