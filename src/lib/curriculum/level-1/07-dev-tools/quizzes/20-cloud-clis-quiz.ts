import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "dt-q20",
  title: "Quiz: Cloud CLIs",
  passingScore: 70,
  questions: [
    {
      id: "q20_1",
      question: "Qual a principal vantagem da CLI sobre o Painel Web da Nuvem?",
      options: ["É mais bonita", "Permite automação e scripts de infraestrutura", "Não precisa de login", "Gasta menos bateria"],
      correctAnswer: 1
    }
  ]
};