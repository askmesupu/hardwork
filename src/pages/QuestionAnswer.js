import React, { useState } from "react";

export default function QuestionAnswer() {
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "40%" });
  const [yesClicked, setYesClicked] = useState(false);
  const [popupImg, setPopupImg] = useState(null);

  const handleNoClick = () => {
    const top = Math.random() * 60 + 20 + "%";
    const left = Math.random() * 60 + 20 + "%";
    setNoPosition({ top, left });
    setPopupImg("https://i.imgur.com/tpIx24B.png"); // Dudu crying image
    setTimeout(() => setPopupImg(null), 1500);
  };

  const handleYesClick = () => {
    setYesClicked(true);
    setPopupImg("https://i.imgur.com/nXvrTyh.jpeg"); // Dudu happy image
    setTimeout(() => {
      setPopupImg(null);
      setYesClicked(false);
    }, 2000);
  };

  return (
    <div className="subpage-content" style={{ position: "relative" }}>
      <h2>Will you stay forever with me?</h2>
      <div style={{ marginTop: "2rem", position: "relative" }}>
        <button onClick={handleYesClick} className="subpage-button">Yes</button>
        <button
          onMouseEnter={handleNoClick}
          style={{ top: noPosition.top, left: noPosition.left, position: "absolute" }}
          className="subpage-button"
        >
          No
        </button>
      </div>
      {yesClicked && (
        <div style={{
          position: "absolute",
          top: "70%",
          left: "50%",
          transform: "translateX(-50%)",
          color:"white",
          fontSize:"1.5rem"
        }}>
          I love you baby
        </div>
      )}
      {popupImg && <img src={popupImg} alt="popup" className="popup-img" />}
    </div>
  );
    }
