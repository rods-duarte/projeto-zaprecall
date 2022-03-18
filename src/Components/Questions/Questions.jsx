import Question from "./Question";

const questions = [
  {
    identifier: 1,
    text: `O que é JSX?`,
    answer: `Uma extensão de linguagem do JavaScript`,
  },
  {
    identifier: 2,
    text: `O React é __`,
    answer: `uma biblioteca JavaScript para construção de interfaces`,
  },
  {
    identifier: 3,
    text: `Componentes devem iniciar com __`,
    answer: `letra maiúscula`,
  },
  {
    identifier: 4,
    text: `Podemos colocar __ dentro do JSX`,
    answer: `expressões`,
  },
  {
    identifier: 5,
    text: `O ReactDOM nos ajuda __`,
    answer: `interagindo com a DOM para colocar componentes React na mesma`,
  },
  {
    identifier: 6,
    text: `Usamos o npm para __`,
    answer: `gerenciar os pacotes necessários e suas dependências`,
  },
  {
    identifier: 7,
    text: `Usamos props para __`,
    answer: `passar diferentes informações para componentes`,
  },
  {
    identifier: 8,
    text: `Usamos estado (state) para __`,
    answer: `dizer para o React quais informações quando atualizadas devem renderizar a tela novamente`,
  },
];

export default function Questions() {
  return (
    <div className="questions">
      {questions.map((question) => (
        <Question identifier={question.identifier} text={question.text} answer={question.answer} />
      ))}
    </div>
  );
}
