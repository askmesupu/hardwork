import React from "react";

export default function MyHeart() {
  return (
    <div className="subpage-content">
      <h2>My Heart</h2>
      <p>In my heart beats there is only one name - Shiropa</p>
      <p style={{ marginTop: "2rem", fontWeight: "bold", fontSize: "1.3rem", animation: "heartText 2s ease-in-out infinite alternate" }}>
        💖 Shiropa 💖
      </p>
      <style>
        {`
          @keyframes heartText {
            0% { transform: scale(1); color: #ff6b81; }
            50% { transform: scale(1.2); color: #ff4757; }
            100% { transform: scale(1); color: #ff6b81; }
          }
        `}
      </style>
    </div>
  );
          }
