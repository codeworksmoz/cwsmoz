import type { Quiz } from '../../../types';
export const quiz: Quiz = {
  id: "rs-mq2",
  title: "Quiz: Ownership",
  passingScore: 80,
  questions: [{ id: "q1", question: "O que acontece ao transferir o ownership de uma variável?", options: ["A original torna-se inválida", "A original é copiada", "Ambas partilham o dado", "O programa crasha"], correctAnswer: 0 }]
};