import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "cs-t2-quiz",
  title: "Quiz: Lógica Booleana",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual operador exige que todas as condições sejam verdadeiras?",
      options: ["OR", "NOT", "AND", "XOR"],
      correctAnswer: 2
    },
    {
      id: "q2",
      question: "Se uma condição OR tem um lado Verdadeiro e outro Falso, qual o resultado?",
      options: ["Falso", "Verdadeiro", "Erro", "Indeterminado"],
      correctAnswer: 1
    }
  ]
};