import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "alg-q2",
  title: "Quiz: Algoritmos de Busca",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o requisito fundamental para usar a Busca Binária?",
      options: [
        "A lista deve ser pequena",
        "A lista deve estar ordenada",
        "A lista deve conter apenas números",
        "Não há requisitos"
      ],
      correctAnswer: 1
    }
  ]
};
