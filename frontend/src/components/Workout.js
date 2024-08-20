import React, { useState, useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Workout.css";

const Workout = () => {
  const location = useLocation();
  const [beforeCardio, setBeforeCardio] = useState({});
  const [afterCardio, setAfterCardio] = useState({});
  const [exercises, setExercises] = useState([]);
  const googleSearch = "https://www.google.com/search?q=";
  const images = "../images/vezhbi/";
  const onLoad = () => {
    if(!sessionStorage.getItem('exercises')){
      setExercises(location.state.exercises);
      setBeforeCardio(location.state.before);
      setAfterCardio(location.state.after);
      sessionStorage.setItem('before',JSON.stringify(location.state.before));
      sessionStorage.setItem('exercises',JSON.stringify(location.state.exercises));
      sessionStorage.setItem('after',JSON.stringify(location.state.after));
    }
    else {
      setExercises(JSON.parse(sessionStorage.getItem('exercises')));
      setBeforeCardio(JSON.parse(sessionStorage.getItem('before')));
      setAfterCardio(JSON.parse(sessionStorage.getItem('after')));
    }
  }

  useEffect(() => {
    if(sessionStorage.getItem("planId")){
        fetch(`http://localhost:8080/api/plan/planId/${sessionStorage.getItem("planId")}`)
            .then(response => response.json())
            .then(data => {
              setExercises(data)
            });
        fetch(`http://localhost:8080/api/cardio/before/${sessionStorage.getItem("planId")}`)
          .then(response => response.json())
          .then(data => {
            setBeforeCardio(data)
          });
        fetch(`http://localhost:8080/api/cardio/after/${sessionStorage.getItem("planId")}`)
          .then(response => response.json())
          .then(data => {
            setAfterCardio(data)
          });
    }
    else{
      onLoad();
    }
  },[location.state]);

  const deleteContent = () => {
    sessionStorage.removeItem("before");
    sessionStorage.removeItem("exercises");
    sessionStorage.removeItem("after");
  }
  const deletePlan = () => {
      sessionStorage.removeItem("planId");
  }
  return (
    <div className="workout">
      <h1>Workout Plan</h1>
      <Carousel
        className="workout-carousel"
        showThumbs={false}
        useKeyboardArrows
      >
        <div className="beforeAfter">
          <h2 className="title">Before workout</h2>
          <img src={images + beforeCardio.url} alt="exercise" />
          <a href={googleSearch + beforeCardio.name} target="_blank">
            <button className="survey-button">How To</button>
          </a>
          <div className="content_">
            <p>
              <span>Cardio:</span> {beforeCardio.name}
            </p>
            <p>
              <span>Duration:</span> {beforeCardio.duration} minutes
            </p>
          </div>
        </div>

        {exercises.map((exercise, index) => (
          <div key={index} className="workout-data">
            <h3 className="title">{exercise.name}</h3>
            <img src={images + exercise.url} alt="exercise" />
            <a href={googleSearch + exercise.name} target="_blank">
              <button className="survey-button">How To</button>
            </a>
            <div className="content_">
              <p>
                <span>Targets:</span> {exercise.targetMuscle}
              </p>
              <p>
                <span>Sets:</span> {exercise.sets}
              </p>
              <p>
                <span>Reps:</span> {exercise.reps}
              </p>
              <p>
                <span>Weight:</span> {exercise.weight}
              </p>
            </div>
          </div>
        ))}

        {afterCardio.duration !== 0 && (
          <div className="beforeAfter">
            <h2 className="title">After workout</h2>
            <img src={images + afterCardio.url} alt="exercise" />
            <a href={googleSearch + afterCardio.name} target="_blank">
              <button className="survey-button">How To</button>
            </a>
            <div className="content_">
              <p>
                <span>Cardio:</span> {afterCardio.name}
              </p>
              <p>
                <span>Duration:</span> {afterCardio.duration} minutes
              </p>
            </div>
          </div>
        )}
      </Carousel>
      <br/>
      <Link to="/mood-survey"><button>Generate a Personalized Playlist</button></Link>
      <br/>
        {sessionStorage.getItem("planId") ? (
            <Link to="/profile"><button onClick={deletePlan}>Go To Profile</button></Link>
        ) : (
            <Link to="/"><button onClick={deleteContent}>Go Home</button></Link>
        )}
      <br/>
    </div>
  );
};

export default Workout;
