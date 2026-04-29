import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "web-q21",
  title: "Quiz: Transição para JavaScript",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que é o DOM (Document Object Model)?",
      options: [
        "Uma base de dados no servidor",
        "A representação do HTML como uma árvore de objetos na memória do browser",
        "O nome do servidor do Google",
        "Um tipo de vírus de computador"
      ],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Qual o método moderno e mais versátil para selecionar um elemento no DOM?",
      options: ["getElementByTagName", "document.querySelector", "findNode", "selectElement"],
      correctAnswer: 1
    }
  ]
};
