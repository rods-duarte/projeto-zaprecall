import React from "react";
import Question from "./Question";

export default function Questions({ questions, answered, setAnswered }) {
  console.log(questions);

  return (
    <div className="questions">
      {questions.map((question, index) => (
        <Question
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
