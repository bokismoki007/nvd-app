import React from "react";
import "../styles/AnswerCard.css";

const AnswerCard = ({ image, title, onClick }) => {
  return (
    <div className="answer-card" onClick={onClick}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default AnswerCard;
