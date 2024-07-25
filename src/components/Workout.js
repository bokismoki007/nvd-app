import React, { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import "../styles/Workout.css";
import axios from "axios";
const Workout = () => {
  const location = useLocation();
  const args = location.state.args;
  const goal = args[0];
  const feel = args[1];
  const stressed = args[2];
  const currentBody = args[3];
  const targetBody = args[4];
  const activity = args[5];
  const [beforeCardio,setBeforeCardio] = useState({});
  const [afterCardio,setAfterCardio] = useState({});
  const [exercises,setExercises] = useState([]);
  const googleSearch = "https://www.google.com/search?q=";
  const moodSurvey = () => {
    window.location.href='/mood-survey'
  }
  const getBeforeCardio = async () => {
      const formData1 = new FormData();
      formData1.append("goal", goal)
      formData1.append("targetBody", targetBody)
      try {
          const response = await axios.post(
              'http://localhost:8080/api/cardio/find-before',
              formData1, {
                  headers: {
                      'Content-Type': 'application/x-www-form-urlencoded',
                  },
              }
          )
          setBeforeCardio(response.data);
      }
      catch(error){
          console.error('Error during POST request:', error);
      }
  }
  const getAfterCardio = async () => {
        const formData1 = new FormData();
        formData1.append("goal", goal)
        formData1.append("activity", activity)
        try {
            const response = await axios.post(
                'http://localhost:8080/api/cardio/find-after',
                formData1, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            )
            setAfterCardio(response.data);
        }
        catch(error){
            console.error('Error during POST request:', error);
        }
  }
  const getExercises = async () => {
        const formData1 = new FormData();
        formData1.append("goal", goal)
        formData1.append("currentBody", currentBody)
        formData1.append("targetBody", targetBody)
        try {
            const response = await axios.post(
                'http://localhost:8080/api/exercise/find',
                formData1, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            )
            setExercises(response.data);
        }
        catch(error){
            console.error('Error during POST request:', error);
        }
    }
  useEffect(() => {
      getBeforeCardio();
      getExercises();
      getAfterCardio();
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

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
            crossOrigin="anonymous"/>
      </body>
  );
};

export default Workout;
