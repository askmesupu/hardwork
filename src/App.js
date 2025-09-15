import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import English from "./pages/English";
import Bangla from "./pages/Bangla";
import Hindi from "./pages/Hindi";
import MyHeart from "./pages/MyHeart";
import QuestionAnswer from "./pages/QuestionAnswer";

import "./index.css";

export default function App() {
  const [route, setRoute] = useState("/");
  const [showHeartAnimation, setShowHeartAnimation] = useState(false);

  const navigate = (path) => {
    setShowHeartAnimation(true);
    setTimeout(() => {
      setRoute(path);
      setShowHeartAnimation(false);
    }, 1500); // Animation duration
  };

  const renderPage = () => {
    switch (route) {
      case "/": return <Home />;
      case "/english": return <English />;
      case "/bangla": return <Bangla />;
      case "/hindi": return <Hindi />;
      case "/myheart": return <MyHeart />;
      case "/question": return <QuestionAnswer />;
      default: return <Home />;
    }
  };

  return (
    <div className="bg-animate" style={{ minHeight: "100vh", position: "relative" }}>
      <Navbar navigate={navigate} />
      {showHeartAnimation && <MyHeart />}
      {!showHeartAnimation && renderPage()}
    </div>
  );
}
