
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "eng-q11",
  title: "Quiz: API Endpoints & Documentation",
  passingScore: 70,
  questions: [
    {
      id: "q11_1",
      question: "What is the 'Payload' in an API request?",
      options: ["The URL", "The actual data being sent", "The server speed", "The error message"],
      correctAnswer: 1
    },
    {
      id: "q11_2",
      question: "Which part of a request contains metadata like 'Authorization'?",
      options: ["Body", "Footer", "Header", "Query"],
      correctAnswer: 2
    },
    {
      id: "q11_3",
      question: "Checking if you have permission to access a resource is:",
      options: ["Validation", "Authorization", "Encryption", "Parsing"],
      correctAnswer: 1
    },
    {
      id: "q11_4",
      question: "What are 'Query Params'?",
      options: ["Database tables", "Filters added to the URL", "Password fields", "Server logs"],
      correctAnswer: 1
    },
    {
      id: "q11_5",
      question: "What does API stand for?",
      options: ["Application Programming Interface", "Auto Process Integration", "Advanced Program Index", "App Protocol Info"],
      correctAnswer: 0
    },
    {
      id: "q11_6",
      question: "Which section of documentation helps you start quickly?",
      options: ["Reference", "Release Notes", "Quickstart / Getting Started", "Index"],
      correctAnswer: 2
    }
  ]
};
