import React from "react";
import "../styles/AnswerCard.css";

const AnswerCard = ({ image, title, explanation, onClick, selected }) => {
  return (
    <div
      className={`answer-card ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <img src={image} alt={title} />
      
      <div className="text">
        <h4>{title}</h4>
        <p>{explanation && <small>{explanation}</small>}</p>
      </div>
    </div>
  );
};

export default AnswerCard;
