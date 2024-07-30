
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const Plan = () => {
    const location = useLocation();
    const [before,setBefore] = useState({});
    const [after,setAfter] = useState({})
    const [exercises,setExercises] = useState([]);
    const googleSearch = "https://www.google.com/search?q=";
    useEffect(() => {
        fetch(`http://localhost:8080/api/plan/planId/${location.state.id}`)
            .then(response => response.json())
            .then(data => {
                setExercises(data)
            })
    },[]);
    useEffect(() => {
        fetch(`http://localhost:8080/api/cardio/before/${location.state.id}`)
            .then(response => response.json())
            .then(data => {
                setBefore(data)
            })
    },[]);
    useEffect(() => {
        fetch(`http://localhost:8080/api/cardio/after/${location.state.id}`)
            .then(response => response.json())
            .then(data => {
                setAfter(data)
            })
    },[]);
    const ProfileRedirect = () => {
        window.location.href="/profile"
    }
    return (
        <body>
        <div className="workout">
            <h1>Workout Plan</h1>
            <div className="beforeAfter">
                <h3>Before workout</h3>
                <p>Cardio: {before.name}</p>
                <p>Duration: {before.duration} minutes</p>
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
            {after.duration!=0 ? (
                <div className="beforeAfter">
                    <h3>After workout</h3>
                    <p>Cardio: {after.name}</p>
                    <p>Duration: {after.duration} minutes</p>
                </div>
            ): (null)}
            <button className="space" onClick={ProfileRedirect}>
                Go back to profile
            </button>
        </div>
        </body>
    )
}
export default Plan;