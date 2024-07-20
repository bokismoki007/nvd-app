import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import "../styles/WorkoutSurvey.css";
import AnswerCard from "./AnswerCard";

const WorkoutSurvey = () => {
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();

  const questions = [
    {
      question: "What is your main goal?",
      answers: [
        { title: "Gain muscle", image: "" },
        { title: "Lose weight" },
        { title: "Reduce stress and anxiety" },
        { title: "Alleviate physical pain" },
        { title: "Increase flexibility" },
        { title: "Release stored emotions" },
      ],
    },
    {
      question: "How have you been feeling lately?",
      answers: [
        { title: "Tired" },
        { title: "Sad" },
        { title: "Angry" },
        { title: "Insecure" },
        { title: "Happy" },
        { title: "Peaceful" },
      ],
    },
    {
      question: "How often do you feel stressed?",
      answers: [
        { title: "Never" },
        { title: "Rarely" },
        { title: "Sometimes" },
        { title: "Pretty often" },
        { title: "Always" },
      ],
    },
    {
      question: "Choose your body type",
      answers: [
        { title: "Regular" },
        { title: "Flabby" },
        { title: "Extra" },
        { title: "Overweight" },
        { title: "Obese" },
      ],
    },
    {
      question: "Choose your target body type",
      answers: [
        { title: "Regular" },
        { title: "Fit" },
        { title: "Flat Stomach" },
        { title: "Athletic" },
        { title: "Curvy" },
      ],
    },
    {
      question: "What is your activity level?",
      answers: [
        { title: "Sedentary", explanation: "Little or no exercise" },
        {
          title: "Somewhat active",
          explanation: "Light exercise / sports 1-2 days per week",
        },
        {
          title: "Moderately active",
          explanation: "Moderate exercise / sports 3-5 days per week",
        },
        {
          title: "Very active",
          explanation: "Hard exercise / sports 6-7 days per week",
        },
        {
          title: "Highly active",
          explanation: "Hard daily exercise / sports and physical labor",
        },
      ],
    },
  ];

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer)
    setAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }));
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate.push("/workout");
    }, 2000);
  };

  if (loading) return <Loading />;

  const currentQuestion = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex / questions.length) * 100;

  return (
    <div className="survey">
      <img src="../../images/app-logo.png"/>
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
