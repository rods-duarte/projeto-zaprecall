import React from "react";
import QuestionOpened from "./QuestionOpened";
import QuestionClosed from "./QuestionClosed";

export default function Question({ identifier, text, answer }) {
  const [isClosed, setIsClosed] = React.useState(true);
  const css = isClosed ? 'question' : 'question open';

  return (
    <div className={css}>
      {isClosed ? ( 
        <QuestionClosed
          identifier={identifier}
          setIsClosed={() => setIsClosed(false)}
        />
      ) : (
        <QuestionOpened text={text} answer={answer}/>
      )}
    </div>
  );
}
