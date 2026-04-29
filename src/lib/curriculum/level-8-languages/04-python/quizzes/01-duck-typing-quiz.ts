
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq1",
  title: "Quiz: Duck Typing",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "O que define a validade de um objeto no Duck Typing?",
      options: [
        "A classe de onde ele herda",
        "O nome do ficheiro",
        "A presença dos métodos e atributos necessários em runtime",
        "O tamanho da memória consumida"
      ],
      correctAnswer: 2
    }
  ]
};
