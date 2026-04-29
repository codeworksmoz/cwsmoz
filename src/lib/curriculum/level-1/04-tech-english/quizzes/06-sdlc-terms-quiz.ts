
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "eng-q6",
  title: "Quiz: SDLC - The Lifecycle of Code",
  passingScore: 70,
  questions: [
    {
      id: "q6_1",
      question: "What happens in the 'Analysis' phase?",
      options: ["Coding", "Understanding user needs", "Fixing bugs", "Selling software"],
      correctAnswer: 1
    },
    {
      id: "q6_2",
      question: "Which phase creates the architecture and blueprints?",
      options: ["Implementation", "Analysis", "Design", "Maintenance"],
      correctAnswer: 2
    },
    {
      id: "q6_3",
      question: "What is the 'Implementation' phase?",
      options: ["Testing", "Actual coding", "Planning", "Marketing"],
      correctAnswer: 1
    },
    {
      id: "q6_4",
      question: "Searching for bugs is part of:",
      options: ["Design", "Testing", "Analysis", "Release"],
      correctAnswer: 1
    },
    {
      id: "q6_5",
      question: "Updating and fixing software over time is:",
      options: ["Startup", "Maintenance", "Implementation", "Debugging"],
      correctAnswer: 1
    },
    {
      id: "q6_6",
      question: "What does SDLC stand for?",
      options: ["Software Development Life Cycle", "System Data Logic Code", "Server Deploy Low Cost", "Secure Design Logic Circuit"],
      correctAnswer: 0
    }
  ]
};
