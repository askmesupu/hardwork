import React from "react";

export default function Navbar({ navigate }) {
  return (
    <div className="navbar">
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/english")}>My Love in English</button>
      <button onClick={() => navigate("/bangla")}>My Love in Bangla</button>
      <button onClick={() => navigate("/hindi")}>My Love in Hindi</button>
      <button onClick={() => navigate("/myheart")}>My Heart</button>
      <button onClick={() => navigate("/question")}>Answer my Question</button>
    </div>
  );
    }
