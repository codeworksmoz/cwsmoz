import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq12",
  title: "Quiz: Garbage Collection Internals",
  passingScore: 80,
  questions: [
    {
      id: "q12_1",
      question: "Qual o nome do algoritmo padrão de GC no motor V8?",
      options: ["Reference Counting", "Mark-and-Sweep", "Stop-and-Go", "Binary Search"],
      correctAnswer: 1
    }
  ]
};
