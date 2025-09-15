// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeartAnimation from "./components/HeartAnimation";

import Home from "./pages/Home";
import English from "./pages/English";
import Bangla from "./pages/Bangla";
import Hindi from "./pages/Hindi";
import MyHeart from "./pages/MyHeart";
import QuestionAnswer from "./pages/QuestionAnswer";

function App() {
  return (
    <Router>
      <HeartAnimation /> {/* Full screen heart animation component */}
      <Navbar /> {/* Navbar always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/english" element={<English />} />
        <Route path="/bangla" element={<Bangla />} />
        <Route path="/hindi" element={<Hindi />} />
        <Route path="/my-heart" element={<MyHeart />} />
        <Route path="/question-answer" element={<QuestionAnswer />} />
      </Routes>
    </Router>
  );
}

export default App;
