import type { Quiz } from '../../../../types';

export const quiz: Quiz = {
  id: "pf-t1-quiz",
  title: "Quiz: Variáveis e Tipos",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Para que serve uma variável?",
      options: ["Para apagar dados", "Para guardar informação com um nome", "Para ligar o monitor"],
      correctAnswer: 1
    }
  ]
};
