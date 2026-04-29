
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "eng-q1",
  title: "Quiz: Basic Computer Vocabulary",
  passingScore: 70,
  questions: [
    {
      id: "q1_1",
      question: "What is the English term for data entering a computer system?",
      options: ["Output", "Input", "Storage", "Memory"],
      correctAnswer: 1
    },
    {
      id: "q1_2",
      question: "Which term refers to long-term data retention devices like SSDs?",
      options: ["RAM", "Cache", "Storage", "CPU"],
      correctAnswer: 2
    },
    {
      id: "q1_3",
      question: "What does 'Run' mean in a technical context?",
      options: ["To delete", "To move fast", "To execute a program", "To cancel"],
      correctAnswer: 2
    },
    {
      id: "q1_4",
      question: "What is a 'Bug'?",
      options: ["A hardware part", "A coding error", "A new feature", "A virus only"],
      correctAnswer: 1
    },
    {
      id: "q1_5",
      question: "What is a 'Feature'?",
      options: ["An error", "A specific functionality", "A computer screen", "A cable"],
      correctAnswer: 1
    },
    {
      id: "q1_6",
      question: "Which part of the computer provides workspace for the CPU?",
      options: ["Hard Drive", "Keyboard", "Memory (RAM)", "Monitor"],
      correctAnswer: 2
    }
  ]
};
