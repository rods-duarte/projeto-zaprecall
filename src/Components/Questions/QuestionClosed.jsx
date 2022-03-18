export default function QuestionClosed({identifier, setIsClosed}) {
  return (
    <div
      onClick={() => {
        setIsClosed(); //! TESTE
      }}
      className={`closed`}
    >
      <span>Pergunta {identifier}</span>
      <img src="Assets/right-arrow.svg" alt="Setinha" />
    </div>
  );
}
