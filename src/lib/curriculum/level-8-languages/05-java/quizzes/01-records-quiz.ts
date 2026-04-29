
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "jv-mq1",
  title: "Quiz: Java Records",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Um Record pode herdar de outra classe em Java?",
      options: [
        "Sim, desde que a classe seja abstrata",
        "Não, pois Records herdam implicitamente de java.lang.Record",
        "Sim, sem restrições",
        "Apenas se for um record local"
      ],
      correctAnswer: 1
    }
  ]
};
