import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import MyHeart from "./components/MyHeart";
import AnswerQuestion from "./components/AnswerQuestion";
import MyLove from "./components/MyLove";

export default function App() {
  const [showHeart, setShowHeart] = useState(false);
  const [nextPage, setNextPage] = useState(null);

  const navigateWithHeart = (navigate, path) => {
    setShowHeart(true);
    setNextPage(() => path);
    setTimeout(() => {
      setShowHeart(false);
      navigate(path);
    }, 2000); // 2s heart animation
  };

  return (
    <Router>
      {showHeart && <div className="fullscreen-heart"><div className="heart"></div></div>}
      <Routes>
        <Route path="/" element={<Home navigateWithHeart={navigateWithHeart} />} />
        <Route path="/my-heart" element={<MyHeart />} />
        <Route path="/answer-question" element={<AnswerQuestion />} />
        <Route path="/my-love/:lang" element={<MyLove />} />
      </Routes>
    </Router>
  );
       }
