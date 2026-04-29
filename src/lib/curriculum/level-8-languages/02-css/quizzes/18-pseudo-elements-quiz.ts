import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq18",
  title: "Quiz: Pseudo-elementos de Sombra",
  passingScore: 80,
  questions: [
    {
      id: "q18_1",
      question: "Para que serve o seletor '::part()'?",
      options: [
        "Para selecionar metade de uma div",
        "Para estilizar elementos expostos de dentro de um Shadow DOM a partir do CSS global",
        "Para dividir o site em várias partes",
        "Para selecionar apenas imagens"
      ],
      correctAnswer: 1
    }
  ]
};