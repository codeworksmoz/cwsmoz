
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "eng-q8",
  title: "Quiz: Technical Writing & Documentation",
  passingScore: 70,
  questions: [
    {
      id: "q8_1",
      question: "What is a 'README' file?",
      options: ["A virus", "A manual explaining the project", "A private chat", "A list of passwords"],
      correctAnswer: 1
    },
    {
      id: "q8_2",
      question: "What are 'Docstrings'?",
      options: ["External books", "Comments explaining functions inside code", "Secret codes", "Variables"],
      correctAnswer: 1
    },
    {
      id: "q8_3",
      question: "Cleaning up code without changing functionality is:",
      options: ["Deleting", "Refactoring", "Releasing", "Compiling"],
      correctAnswer: 1
    },
    {
      id: "q8_4",
      question: "What is 'Legacy Code'?",
      options: ["New code", "Old code that is still in use", "Fast code", "Hidden code"],
      correctAnswer: 1
    },
    {
      id: "q8_5",
      question: "A guide for users to interact with a system is:",
      options: ["Codebase", "Documentation", "Database", "Release Note"],
      correctAnswer: 1
    },
    {
      id: "q8_6",
      question: "The tone of technical writing should be:",
      options: ["Funny", "Clear and objective", "Poetic", "Aggressive"],
      correctAnswer: 1
    }
  ]
};
