import React from "react";

export default function FlashCardOpened({
  text,
  answer,
  answered,
  setAnswered,
  setIsAnswered,
  setStatus
}) {
  const [isFliped, setIsFliped] = React.useState(false);

  return (
    <div className="opened">
      <div className={isFliped ? `back-face` : `back-face flip-back`}>
        <span>{answer}</span>
        <div className="buttons">
          <button
            onClick={() => {
              setIsAnswered(true);
              setAnswered([...answered, "wrong"]);
              setStatus("wrong");
            }}
            className="button-wrong"
          >
            Nao lembrei
          </button>
          <button
            onClick={() => {
              setIsAnswered(true);
              setAnswered([...answered, "half"]);
              setStatus("half");
            }}
            className="button-half"
          >
            Quase nao lembrei
          </button>
          <button
            onClick={() => {
              setIsAnswered(true);
              setAnswered([...answered, "correct"]);
              setStatus("correct");
            }}
            className="button-correct"
          >
            Zap!
          </button>
        </div>
      </div>
      <div className={isFliped ? `front-face` : `front-face flip-front`}>
        <span>{text}</span>
        <img
          className="flip-icon"
          src="Assets/setinha.svg"
          alt="Virar carta"
          onClick={() => {
            setIsFliped(true);
          }}
        />
      </div>
    </div>
  );
}
