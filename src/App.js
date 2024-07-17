import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Survey from "./components/Survey";
import Workout from "./components/Workout";
import Playlist from "./components/Playlist";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
    </Router>
  );
};

export default App;
