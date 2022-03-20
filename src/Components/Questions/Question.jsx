import React from "react";
import QuestionOpened from "./QuestionOpened";
import QuestionClosed from "./QuestionClosed";

export default function Question({ identifier, text, answer, answered, setAnswered }) {
  const [isClosed, setIsClosed] = React.useState(true);
  const [isAnswered, setIsAnswered] = React.useState(false);
  const [status, setStatus] = React.useState('');
  const css = isClosed || isAnswered ? `question ${status}` : "question open";

  return (
    <div className={css}>
      {(isClosed || isAnswered) ? (
        <QuestionClosed
          identifier={identifier}
          setIsClosed={setIsClosed}
          isAnswered={isAnswered}
          answered={answered}
          status={status}
        />
      ) : (
        <QuestionOpened
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
