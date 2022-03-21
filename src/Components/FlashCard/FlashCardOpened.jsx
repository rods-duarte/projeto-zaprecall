import React from "react";
import Button from "./../Button/Button";

export default function FlashCardOpened({
  text,
  answer,
  answered,
  setAnswered,
  setIsAnswered,
  setStatus,
}) {
  const [isFliped, setIsFliped] = React.useState(false);

  return (
    <div className="opened">
      <div className={isFliped ? `back-face` : `back-face flip-back`}>
        <span>{answer}</span>
        <div className="buttons">
          <Button
            status="wrong"
            text="Nao lembrei"
            answered={answered}
            setAnswered={setAnswered}
            setIsAnswered={setIsAnswered}
            setStatus={setStatus}
          />
          <Button
            status="half"
            text="Quase nao lembrei"
            answered={answered}
            setAnswered={setAnswered}
            setIsAnswered={setIsAnswered}
            setStatus={setStatus}
          />
          <Button
            status="correct"
            text="Zap!"
            answered={answered}
            setAnswered={setAnswered}
            setIsAnswered={setIsAnswered}
            setStatus={setStatus}
          />
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
