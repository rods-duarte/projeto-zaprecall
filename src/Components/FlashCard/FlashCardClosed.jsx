export default function FlashCardClosed({identifier, setIsClosed, isAnswered, status}) {
  const css = `closed`;
  const img = status === "" ? "right-arrow.svg" : `${status}.svg`;

  return (
    <div
      onClick={isAnswered ? null : () => setIsClosed()}
      className={css}
    >
      <span className={status}>Pergunta {identifier}</span>
      <img src={`Assets/${img}`} alt="Setinha" />
    </div>
  );
}
