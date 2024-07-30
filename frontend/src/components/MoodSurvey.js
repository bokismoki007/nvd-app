import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import "../styles/MoodSurvey.css";
import AnswerCard from "./AnswerCard";
import axios from "axios";

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
  const playlists = {
    happy: 'https://open.spotify.com/playlist/37i9dQZF1EIgG2NEOhqsD7',
    sad: 'https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP',
    energetic: 'https://open.spotify.com/playlist/0eGBLt9vFkefYCF543CxaY',
    joyful: 'https://open.spotify.com/playlist/37i9dQZF1EQp9BVPsNVof1',
    relaxed: 'https://open.spotify.com/playlist/37i9dQZF1EIhshGKK0SEkb',
    drowsy: 'https://open.spotify.com/playlist/37i9dQZF1EIgbjUtLiWmHt'
  };
  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer)
  };
  const determineLink = () => {
    let emotionLink;
    if(selectedAnswer=="Happy"){
      emotionLink=playlists.happy
    }
    else if(selectedAnswer=="Sad"){
      emotionLink=playlists.sad
    }
    else if(selectedAnswer=="Energetic"){
      emotionLink=playlists.energetic
    }
    else if(selectedAnswer=="Joyful"){
      emotionLink=playlists.joyful
    }
    else if(selectedAnswer=="Relaxed"){
      emotionLink=playlists.relaxed
    }
    else if(selectedAnswer=="Drowsy"){
      emotionLink=playlists.drowsy
    }
    return emotionLink;
  }
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

  const handleSubmit = async () => {
    setLoading(true);
    const link = determineLink();
    if(sessionStorage.getItem('user')!=null){
      const userInfo = JSON.parse(sessionStorage.getItem("user"));
      const formData = new FormData();
      formData.append("name", selectedAnswer + "playlist")
      formData.append("url", link);
      formData.append("id", userInfo.id)
      try{
        const response = await axios.post(
            'http://localhost:8080/api/playlist',
            formData, {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            }
        )
      }
      catch(error){
        alert(error.response.data);
      }
    }
    setTimeout(() => {
      setLoading(false);
      window.location.href=link;
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
