import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
        { title: "Happy", image: "/images/happy.png" },
        { title: "Sad", image: "/images/sad.png" },
        { title: "Energetic", image: "/images/energetic.png" },
        { title: "Joyful", image: "/images/joyful.png" },
        { title: "Relaxed", image: "/images/relaxed.png" },
        { title: "Drowsy", image: "/images/drowsy.png" },
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

   return (
     <div className="survey">
       <img src="../../images/app-logo.png" />
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
