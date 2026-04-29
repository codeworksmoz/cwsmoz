
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "eng-q10",
  title: "Quiz: Debugging & Error Terms",
  passingScore: 70,
  questions: [
    {
      id: "q10_1",
      question: "What does it mean to 'Fix' code?",
      options: ["To delete it", "To repair an error", "To hide it", "To send it"],
      correctAnswer: 1
    },
    {
      id: "q10_2",
      question: "A problem reported in the system is an:",
      options: ["Answer", "Event", "Issue", "Idea"],
      correctAnswer: 2
    },
    {
      id: "q10_3",
      question: "A record of system events is a:",
      options: ["Manual", "Log", "Blog", "Script"],
      correctAnswer: 1
    },
    {
      id: "q10_4",
      question: "What is an 'Unhandled Exception'?",
      options: ["A planned exit", "A code comment", "An error the code didn't deal with", "A fast process"],
      correctAnswer: 2
    },
    {
      id: "q10_5",
      question: "The process of stepping through code to find errors is:",
      options: ["Coding", "Debugging", "Designing", "Publishing"],
      correctAnswer: 1
    },
    {
      id: "q10_6",
      question: "What is a 'Patch' in software?",
      options: ["A large update", "A temporary fix or small update", "A hardware cable", "A virus"],
      correctAnswer: 1
    }
  ]
};
