import React from "react";

export default function QuestionOpened({text, answer}) {
    const [isFliped, setIsFliped] = React.useState(false);
  return (
    <div className="opened">
      <div className={isFliped ? `back-face` : `back-face flip-back`}>
        <span>{answer}</span>
      </div>
      <div className={isFliped ? `front-face` : `front-face flip-front`}>
        <span>{text}</span>
        <img
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
