
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "eng-q2",
  title: "Quiz: Programming Terms & Logic",
  passingScore: 70,
  questions: [
    {
      id: "q2_1",
      question: "What is a 'Statement' in programming?",
      options: ["A full program", "A single line of instruction", "A user comment", "A variable name"],
      correctAnswer: 1
    },
    {
      id: "q2_2",
      question: "Which term describes 'If / Else' logic?",
      options: ["Loop", "Variable", "Conditional", "Function"],
      correctAnswer: 2
    },
    {
      id: "q2_3",
      question: "A sequence of instructions that repeats is called a:",
      options: ["Statement", "Loop", "Scope", "Constant"],
      correctAnswer: 1
    },
    {
      id: "q2_4",
      question: "What does 'Scope' refer to?",
      options: ["The size of a file", "The speed of a loop", "The visibility of a variable", "A type of database"],
      correctAnswer: 2
    },
    {
      id: "q2_5",
      question: "What is a 'Constant'?",
      options: ["A value that changes", "A value that stays the same", "A slow program", "A hardware part"],
      correctAnswer: 1
    },
    {
      id: "q2_6",
      question: "The process of giving a value to a variable is called:",
      options: ["Declaration", "Assignment", "Execution", "Debugging"],
      correctAnswer: 1
    }
  ]
};
