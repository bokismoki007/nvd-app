import React from "react";
import "../styles/AnswerCard.css";

const AnswerCard = ({ image, title, explanation, onClick, selected }) => {
  return (
    <div className={`answer-card ${selected ? "selected" : ""}`} onClick={onClick}>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{explanation && <small>{explanation}</small>}</p>
    </div>
  );
};

export default AnswerCard;
