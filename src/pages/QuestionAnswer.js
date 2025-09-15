import React, { useState } from "react";

export default function QuestionAnswer() {
  const [yesClicked, setYesClicked] = useState(false);
  const [popupImg, setPopupImg] = useState(null);
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "55%" });

  const handleNoClick = () => {
    // Move No button randomly
    setNoPosition({
      top: Math.random() * 80 + 10 + "%",
      left: Math.random() * 80 + 10 + "%",
    });
    setPopupImg("https://i.imgur.com/tpIx24B.png");
    setTimeout(() => setPopupImg(null), 1500);
  };

  const handleYesClick = () => {
    setYesClicked(true);
    setPopupImg("https://i.imgur.com/nXvrTyh.jpeg");
    setTimeout(() => setPopupImg(null), 2000);
  };

  return (
    <div className="subpage-content">
      <div style={{ position: "relative", width: "100%", height: "60vh" }}>
        <h2>Will you stay forever with me?</h2>
        <div className="q-buttons">
          <button className="yes" onClick={handleYesClick}>Yes</button>
          <button
            className="no"
            onClick={handleNoClick}
