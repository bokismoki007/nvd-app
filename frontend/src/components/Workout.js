import React, { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import "../styles/Workout.css";
import axios from "axios";
const Workout = () => {
  const location = useLocation();
  const [beforeCardio,setBeforeCardio] = useState({});
  const [afterCardio,setAfterCardio] = useState({});
  const [exercises,setExercises] = useState([]);
  const googleSearch = "https://www.google.com/search?q=";
  const moodSurvey = () => {
    window.location.href='/mood-survey'
  }
  useEffect(() => {
      setExercises(location.state.exercises);
      setBeforeCardio(location.state.before);
      setAfterCardio(location.state.after);
  },[])
  return (
      <body>
    <div className="workout">
      <h1>Workout Plan</h1>
        <div className="beforeAfter">
            <h3>Before workout</h3>
            <p>Cardio: {beforeCardio.name}</p>
            <p>Duration: {beforeCardio.duration} minutes</p>
        </div>
        <div className="container">
            {exercises.map((exercise,index) => (
            <div key={index} className="workout-data">
                    <h3>{exercise.name}</h3>
                    <h4>Targets: {exercise.targetMuscle}</h4>
                    <p>Sets: {exercise.sets}</p>
                    <p>Reps: {exercise.reps}</p>
                    <p>Weight: {exercise.weight}</p>
                    <a href={googleSearch+exercise.name}><button>Search on Google</button></a>
            </div>
            ))}
        </div>
        {afterCardio.duration!=0 ? (
            <div className="beforeAfter">
                <h3>After workout</h3>
                <p>Cardio: {afterCardio.name}</p>
                <p>Duration: {afterCardio.duration} minutes</p>
            </div>
        ): (null)}
      <button className="space"onClick={moodSurvey}>
        Discover Your Personalized Playlist
      </button>
    </div>
    </body>
  );
};

export default Workout;
