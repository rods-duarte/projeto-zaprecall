import "./style.css";

export default function Button({
  status,
  setStatus,
  text,
  answered,
  setAnswered,
  setIsAnswered,
}) {
  return (
    <button
      onClick={() => {
        setIsAnswered(true);
        setAnswered([...answered, status]);
        setStatus(status);
      }}
      className={`button-${status}`}
    >
      {text}
    </button>
  );
}
