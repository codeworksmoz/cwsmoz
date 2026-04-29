import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq3",
  title: "Quiz: Concorrência com AsyncIO",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "O que a palavra-chave 'await' faz no Python?",
      options: [
        "Para o computador por 1 segundo",
        "Pausa a execução da corrotina atual e liberta o event loop",
        "Cria uma nova thread automaticamente",
        "Apaga a variável da memória"
      ],
      correctAnswer: 1
    }
  ]
};