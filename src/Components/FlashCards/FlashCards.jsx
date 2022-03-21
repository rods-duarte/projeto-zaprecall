import React from "react";
import FlashCard from "../FlashCard/FlashCard";
import "./style.css";

export default function FlashCards({ questions, answered, setAnswered }) {
  console.log(questions);

  return (
    <div className="questions">
      {questions.map((question, index) => (
        <FlashCard
          identifier={index + 1}
          text={question.text}
          answer={question.answer}
          answered={answered}
          setAnswered={setAnswered}
        />
      ))}
    </div>
  );
}
