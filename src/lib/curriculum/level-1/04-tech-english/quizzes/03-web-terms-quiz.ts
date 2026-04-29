
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "eng-q3",
  title: "Quiz: Web Development Vocabulary",
  passingScore: 70,
  questions: [
    {
      id: "q3_1",
      question: "What is another name for the 'Frontend'?",
      options: ["Server", "Database", "Client", "Kernel"],
      correctAnswer: 2
    },
    {
      id: "q3_2",
      question: "Which part of the system is the 'Backend'?",
      options: ["Browser", "Monitor", "Server", "Viewport"],
      correctAnswer: 2
    },
    {
      id: "q3_3",
      question: "The act of asking for data from a server is a:",
      options: ["Response", "Request", "Reload", "Render"],
      correctAnswer: 1
    },
    {
      id: "q3_4",
      question: "What is the 'Viewport'?",
      options: ["A type of port", "The visible area of a web page", "A server address", "A graphics card"],
      correctAnswer: 1
    },
    {
      id: "q3_5",
      question: "A specific URL where data is located is an:",
      options: ["Endpoint", "Input", "Anchor", "Protocol"],
      correctAnswer: 0
    },
    {
      id: "q3_6",
      question: "What does HTML stand for as a 'Markup' language?",
      options: ["Hyper Transfer", "HyperText Markup Language", "High Tech", "Hybrid Text"],
      correctAnswer: 1
    }
  ]
};
