import React from "react";
import FlashCardOpened from "./FlashCardOpened";
import FlashCardClosed from "./FlashCardClosed";
import "./style.css";

export default function FlashCard({ identifier, text, answer, answered, setAnswered }) {
  const [isClosed, setIsClosed] = React.useState(true);
  const [isAnswered, setIsAnswered] = React.useState(false);
  const [status, setStatus] = React.useState('');
  const css = isClosed || isAnswered ? `question ${status}` : "question open";

  return (
    <div className={css}>
      {(isClosed || isAnswered) ? (
        <FlashCardClosed
          identifier={identifier}
          setIsClosed={setIsClosed}
          isAnswered={isAnswered}
          answered={answered}
          status={status}
        />
      ) : (
        <FlashCardOpened
          text={text}
          answer={answer}
          answered={answered}
          setAnswered={setAnswered}
          setIsAnswered={setIsAnswered}
          setStatus={setStatus}
        />
      )}
    </div>
  );
}
