import "./style.css";

export default function Footer({ total, answered }) {
  const validation = answered.filter((answer) => answer === "wrong").length;
  const result = validation > 0 ? {title: "PUTZ!", img: "sad.svg", text: "Ainda faltaram alguns... Mas nao desanime !"} : {title: "PARABENS!", img: "happy.svg", text: "Você não esqueceu de nenhum flashcard!"}

  return (
    <footer>
      {answered.length === total ? (
        <>
          <div className="top">
            <img src={`Assets/${result.img}`} alt={result.img} />
            <h1>{result.title}</h1>
          </div>
          <p>{result.text}</p>
        </>
      ) : (
        <span>
          {answered.length}/{total} CONCLUIDOS
        </span>
      )}

      <div className="footer-icons">
        {answered.map((icon) => (
          <img src={`Assets/${icon}.svg`} alt={icon} />
        ))}
      </div>
    </footer>
  );
}
