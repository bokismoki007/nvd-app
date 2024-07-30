import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import "../styles/Workout.css";

const Workout = () => {
  const [loading, setLoading] = useState(true);
  const [workout, setWorkout] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setWorkout("Your personalized workout");
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="workout">
      <h1>Workout Plan</h1>
      <p>{workout}</p>
      <button onClick={() => history.push("/playlist")}>
        Discover Your Personalizes Playlist
      </button>
    </div>
  );
};

export default Workout;
