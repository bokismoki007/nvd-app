import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MoodSurvey from "./components/MoodSurvey";
import WorkoutSurvey from "./components/WorkoutSurvey";
import Workout from "./components/Workout";
import Playlist from "./components/Playlist";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mood-survey" element={<MoodSurvey />} />
        <Route path="/workout-survey" element={<WorkoutSurvey />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
    </Router>
  );
};

export default App;
