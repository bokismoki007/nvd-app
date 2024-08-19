import React, { useState , useEffect} from "react";
import { Link, useNavigate, createSearchParams} from "react-router-dom";
import Loading from "./Loading";
import "../styles/WorkoutSurvey.css";
import AnswerCard from "./AnswerCard";
import axios from "axios";

const WorkoutSurvey = () => {
  const [loading, setLoading] = useState(false);
  const [answers,setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();

  const questions = [
    {
      question: "What is your main goal?",
      answers: [
        { title: "Gain muscle", image: "/images/goal/gain_muscle.png" },
        { title: "Lose weight", image: "/images/goal/lose_weight.png" },
        {
          title: "Reduce stress and anxiety",
          image: "/images/goal/reduce_stress.png",
        },
        {
          title: "Alleviate physical pain",
          image: "/images/goal/alleviate_pain.png",
        },
        {
          title: "Increase flexibility",
          image: "/images/goal/increase_flexibility.png",
        },
        {
          title: "Release stored emotions",
          image: "/images/goal/release_emotions.png",
        },
      ],
    },
    {
      question: "How have you been feeling lately?",
      answers: [
        { title: "Tired", image: "/images/emotions/tired.png" },
        { title: "Sad", image: "/images/emotions/sad.png" },
        { title: "Angry", image: "/images/emotions/angry.png" },
        { title: "Insecure", image: "/images/emotions/drowsy.png" },
        { title: "Happy", image: "/images/emotions/happy.png" },
        { title: "Peaceful", image: "/images/emotions/relaxed.png" },
      ],
    },
    {
      question: "How often do you feel stressed?",
      answers: [
        { title: "Never", image: "/images/stress_frequency/never.png" },
        { title: "Rarely", image: "/images/stress_frequency/rarely.png" },
        { title: "Sometimes", image: "/images/stress_frequency/sometimes.png" },
        {
          title: "Pretty often",
          image: "/images/stress_frequency/pretty_often.png",
        },
        { title: "Always", image: "/images/stress_frequency/always.png" },
      ],
    },
    {
      question: "Choose your body type",
      answers: [
        { title: "Regular", image: "/images/body_types/regular.png" },
        { title: "Flabby", image: "/images/body_types/flabby.png" },
        { title: "Extra", image: "/images/body_types/extra.png" },
        { title: "Overweight", image: "/images/body_types/overweight.png" },
        { title: "Obese", image: "/images/body_types/obese.png" },
      ],
    },
    {
      question: "Choose your target body type",
      answers: [
        { title: "Regular", image: "/images/body_types/regular.png" },
        { title: "Fit", image: "/images/body_types/fit.png" },
        { title: "Flat Stomach", image: "/images/body_types/flat_stomach.png" },
        { title: "Athletic", image: "/images/body_types/athletic.png" },
        { title: "Curvy", image: "/images/body_types/curvy.png" },
      ],
    },
    {
      question: "What is your activity level?",
      answers: [
        {
          title: "Sedentary",
          explanation: "Little or no exercise",
          image: "/images/activity_level/sedentary.png",
        },
        {
          title: "Somewhat active",
          explanation: "Light exercise / sports 1-2 days per week",
          image: "/images/activity_level/somewhat_active.png",
        },
        {
          title: "Moderately active",
          explanation: "Moderate exercise / sports 3-5 days per week",
          image: "/images/activity_level/moderately_active.png",
        },
        {
          title: "Very active",
          explanation: "Hard exercise / sports 6-7 days per week",
          image: "/images/activity_level/very_active.png",
        },
        {
          title: "Highly active",
          explanation: "Hard daily exercise / sports and physical labor",
          image: "/images/activity_level/highly_active.png",
        },
      ],
    },
  ];

  const handleAnswerChange = (answer) => {
    setAnswers(oldArray => [...oldArray,answer])
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    else {
      lastUpdate(answers,answer)
    }
  };

  const lastUpdate = (oldArray,answer) =>{
      oldArray.push(answer)
      handleSubmit(oldArray)
  };

  const handleGoBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      navigate("/");
    }
  };

  const handleSubmit = async (array) => {
    const formData1 = new FormData();
    const formData2 = new FormData();
    const formData3 = new FormData();
    let response;
    let response1;
    let response2;
    formData1.append("goal", array[0])
    formData1.append("currentBody", array[3])
    formData1.append("targetBody", array[4])
    if(sessionStorage.getItem("user")!=null){
      const userInfo = JSON.parse(sessionStorage.getItem("user"));
      formData1.append("name", array[0] + " workout");
      formData1.append("userId",userInfo.id);
    }
    else {
      formData1.append("name", "nothing");
      formData1.append("userId", "nothing");
    }
    try {
      response = await axios.post(
          'http://localhost:8080/api/exercise/find',
          formData1, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
      )
    }
    catch(error){
      console.error('Error during POST request:', error);
    }

    formData2.append("goal", array[0])
    formData2.append("targetBody", array[4])
    if(sessionStorage.getItem("user")!=null){
      const userInfo = JSON.parse(sessionStorage.getItem("user"));
      formData2.append("userId",userInfo.id);
    }
    else{
      formData2.append("userId", "nothing");
    }
    try {
      response1 = await axios.post(
          'http://localhost:8080/api/cardio/find-before',
          formData2, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
      )
    }
    catch(error){
      console.error('Error during POST request:', error);
    }

    formData3.append("goal", array[0])
    formData3.append("activity", array[5])
    if(sessionStorage.getItem("user")!=null){
      const userInfo = JSON.parse(sessionStorage.getItem("user"));
      formData3.append("userId",userInfo.id);
    }
    else{
      formData3.append("userId", "nothing");
    }
    try {
      response2 = await axios.post(
          'http://localhost:8080/api/cardio/find-after',
          formData3, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
      )
    }
    catch(error){
      console.error('Error during POST request:', error);
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/workout",{
        state: {
          before: response1.data,
          exercises: response.data,
          after: response2.data,
        }
      });
    }, 2000);
  };


  if (loading) return <Loading />;

  const currentQuestion = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex / questions.length) * 100;


  return (
    <div className="survey">
      <div className="header">
        <div className="go_back" onClick={handleGoBack}>
          <img src="../../images/arrow.png" />
        </div>

        <img className="logo" src="../../images/app-logo.png" />
      </div>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="question">
        <h2>{currentQuestion.question}</h2>
        <div className="answers">
          {currentQuestion.answers.map((a, j) => (
            <AnswerCard
              key={j}
              title={a.title}
              image={a.image}
              explanation={a.explanation}
              onClick={() => handleAnswerChange(a.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutSurvey;
