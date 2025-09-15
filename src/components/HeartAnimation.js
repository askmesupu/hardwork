import React from "react";

export default function HeartAnimation() {
  const hearts = Array.from({ length: 50 });

  return (
    <div className="heart-container">
      {hearts.map((_, i) => (
        <span
          key={i}
          className="floating-word"
          style={{
            left: Math.random() * 100 + "vw",
            animationDuration: 2 + Math.random() * 3 + "s",
            fontSize: 12 + Math.random() * 12 + "px",
          }}
        >
          Shiropa
        </span>
      ))}
    </div>
  );
}
