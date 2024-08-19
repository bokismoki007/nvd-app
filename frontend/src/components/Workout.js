import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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

  const moodSurvey = () => {
    window.location.href = "/mood-survey";
  };

  useEffect(() => {
    setExercises(location.state.exercises);
    setBeforeCardio(location.state.before);
    setAfterCardio(location.state.after);
  }, [location.state]);

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
          <a /*href={googleSearch + exercise.name}*/>
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
            <a href={googleSearch + exercise.name}>
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
            <a /*href={googleSearch + exercise.name}*/>
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

      <button onClick={moodSurvey}>Generate a Personalized Playlist</button>
    </div>
  );
};

export default Workout;
