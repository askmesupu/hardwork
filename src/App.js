// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeartAnimation from "./components/HeartAnimation";

// Pages
import Home from "./pages/Home";
import English from "./pages/English";
import Bangla from "./pages/Bangla";
import Hindi from "./pages/Hindi";
import MyHeart from "./pages/MyHeart";
import QuestionAnswer from "./pages/QuestionAnswer";

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const [showHeart, setShowHeart] = useState(false);
  const [navigateTo, setNavigateTo] = useState(null);

  const handleNavigation = (path) => {
    setNavigateTo(path);
    setShowHeart(true);
  };

  const handleHeartEnd = (navigate) => {
    setShowHeart(false);
    if (navigate) {
      navigate(navigateTo);
      setNavigateTo(null);
    }
  };

  return (
    <>
      <Navbar onNavClick={handleNavigation} />
      {showHeart && <HeartAnimation onAnimationEnd={handleHeartEnd} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/english" element={<English />} />
        <Route path="/bangla" element={<Bangla />} />
        <Route path="/hindi" element={<Hindi />} />
        <Route path="/myheart" element={<MyHeart />} />
        <Route path="/question" element={<QuestionAnswer />} />
      </Routes>
    </>
  );
}

export default AppWrapper;
