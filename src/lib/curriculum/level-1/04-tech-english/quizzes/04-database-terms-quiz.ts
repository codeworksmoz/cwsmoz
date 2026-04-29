
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "eng-q4",
  title: "Quiz: Database Vocabulary",
  passingScore: 70,
  questions: [
    {
      id: "q4_1",
      question: "What is a 'Query'?",
      options: ["A database error", "A request for information", "A table row", "A password"],
      correctAnswer: 1
    },
    {
      id: "q4_2",
      question: "The formal structure of a database is the:",
      options: ["Record", "Schema", "Field", "Index"],
      correctAnswer: 1
    },
    {
      id: "q4_3",
      question: "A single row of data is called a:",
      options: ["Table", "Column", "Record", "View"],
      correctAnswer: 2
    },
    {
      id: "q4_4",
      question: "What is 'Encryption'?",
      options: ["Deleting data", "Copying data", "Converting data into a secret code", "Compressing files"],
      correctAnswer: 2
    },
    {
      id: "q4_5",
      question: "A unique identifier for a database record is a:",
      options: ["Second Key", "Primary Key", "Main Value", "Code"],
      correctAnswer: 1
    },
    {
      id: "q4_6",
      question: "Moving data between databases is called:",
      options: ["Migration", "Mutation", "Selection", "Joining"],
      correctAnswer: 0
    }
  ]
};
