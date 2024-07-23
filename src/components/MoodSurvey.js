import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import "../styles/MoodSurvey.css";
import AnswerCard from "./AnswerCard";

const MoodSurvey = () => {
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();

  const questions = [
    {
      question: "How do you feel today?",
      answers: [
        { title: "Happy", image: "/images/emotions/happy.png" },
        { title: "Sad", image: "/images/emotions/sad.png" },
        { title: "Energetic", image: "/images/emotions/energetic.png" },
        { title: "Joyful", image: "/images/emotions/joyful.png" },
        { title: "Relaxed", image: "/images/emotions/relaxed.png" },
        { title: "Drowsy", image: "/images/emotions/drowsy.png" },
      ],
    },
  ];

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    setAnswers((prev) => ({
      ...prev,
      [questions[currentQuestionIndex].question]: selectedAnswer,
    }));
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate.push("/playlist");
    }, 2000);
  };

  if (loading) return <Loading />;

  const currentQuestion = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex / questions.length) * 100;

  return (
    <div className="survey">
      <div className="header">
        <Link to="/">
          <div className="go_back">
            <img src="../../images/arrow.png" />
          </div>
        </Link>

        <img src="../../images/app-logo.png" />
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
              image={a.image}
              title={a.title}
              selected={selectedAnswer === a.title}
              onClick={() => handleAnswerChange(a.title)}
            />
          ))}
        </div>
      </div>
      <button onClick={handleNextQuestion} className="button">
        Submit
      </button>
    </div>
  );
};

export default MoodSurvey;
