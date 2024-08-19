import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import "../styles/Survey.css";
import AnswerCard from "./AnswerCard";

const Survey = () => {
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState({});
  const history = useNavigate();

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

  const handleAnswerChange = (question, answer) => {
    setAnswers(prev => ({ ...prev, [question]: answer }));
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      history.push("/workout");
    }, 2000);
  };

  if (loading) return <Loading />;

  return (
    <div className="survey">
      <h1>Survey</h1>
      {questions.map((q, i) => (
        <div key={i} className="question">
          <p>{q.question}</p>
          <div className="answers">
            {q.answers.map((a, j) => (
              <AnswerCard 
                key={j}
                image={a.image}
                title={a.title}
                onClick={() => handleAnswerChange(i, a.title)}
              />
            ))}
          </div>
        </div>
      ))}
      <a target="_blank" onClick={handleSubmit}>Submit</a>
    </div>
  );
};

export default Survey;
