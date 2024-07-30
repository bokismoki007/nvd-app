import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MoodSurvey from "./components/MoodSurvey";
import WorkoutSurvey from "./components/WorkoutSurvey";
import Workout from "./components/Workout";
import Playlist from "./components/Playlist";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Plan from "./components/Plan";
import DeletePlaylist from "./components/DeletePlaylist";
import DeletePlan from "./components/DeletePlan";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mood-survey" element={<MoodSurvey />} />
        <Route path="/workout-survey" element={<WorkoutSurvey />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/delete-playlist" element={<DeletePlaylist />} />
        <Route path="/delete-plan" element={<DeletePlan />} />
      </Routes>
    </Router>
  );
};

export default App;
