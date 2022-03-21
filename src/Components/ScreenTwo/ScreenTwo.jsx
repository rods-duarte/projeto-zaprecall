import React from "react";
import FlashCards from "../FlashCards/FlashCards";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";

let deckOne = [
  {
    text: `O que é JSX?`,
    answer: `Uma extensão de linguagem do JavaScript`,
  },
  {
    text: `O React é __`,
    answer: `uma biblioteca JavaScript para construção de interfaces`,
  },
  {
    text: `Componentes devem iniciar com __`,
    answer: `letra maiúscula`,
  },
  {
    text: `Podemos colocar __ dentro do JSX`,
    answer: `expressões`,
  },
  {
    text: `O ReactDOM nos ajuda __`,
    answer: `interagindo com a DOM para colocar componentes React na mesma`,
  },
  {
    text: `Usamos o npm para __`,
    answer: `gerenciar os pacotes necessários e suas dependências`,
  },
  {
    text: `Usamos props para __`,
    answer: `passar diferentes informações para componentes`,
  },
  {
    text: `Usamos estado (state) para __`,
    answer: `dizer para o React quais informações quando atualizadas devem renderizar a tela novamente`,
  },
];

deckOne = deckOne.sort(() => Math.random() - 0.5);

export default function ScreenTwo() {
  const [questions, setQuestions] = React.useState(deckOne); //! Usar para mudar o deck
  const [answered, setAnswered] = React.useState([]);
  console.log(answered);

  return (
    <main className="screenTwo">
      <Header />
      <FlashCards
        questions={questions}
        answered={answered}
        setAnswered={setAnswered}
      />
      <Footer total={questions.length} answered={answered}/>
    </main>
  );
}
