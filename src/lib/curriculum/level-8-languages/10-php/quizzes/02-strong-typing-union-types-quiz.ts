import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq2",
  title: "Quiz: Union Types",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Como se declara uma função que aceita int ou float no PHP 8?",
      options: ["int or float", "int|float", "int||float", "mixed(int, float)"],
      correctAnswer: 1
    }
  ]
};