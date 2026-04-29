
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "eng-q7",
  title: "Quiz: Agile & Scrum Jargon",
  passingScore: 70,
  questions: [
    {
      id: "q7_1",
      question: "What is a 'Sprint'?",
      options: ["A long project", "A short period (2-4 weeks) for specific tasks", "A fast computer", "A running competition"],
      correctAnswer: 1
    },
    {
      id: "q7_2",
      question: "The list of all tasks waiting to be done is the:",
      options: ["Schedule", "History", "Backlog", "Manual"],
      correctAnswer: 2
    },
    {
      id: "q7_3",
      question: "What is a 'Stand-up Meeting'?",
      options: ["A long seminar", "A very short daily update meeting", "A party", "An interview"],
      correctAnswer: 1
    },
    {
      id: "q7_4",
      question: "Anyone interested in the project (clients, bosses) is a:",
      options: ["Master", "Stakeholder", "Developer", "Analyst"],
      correctAnswer: 1
    },
    {
      id: "q7_5",
      question: "What is the 'Product Owner' responsible for?",
      options: ["Writing CSS", "Defining the vision and priorities", "Fixing the Wi-Fi", "Managing servers"],
      correctAnswer: 1
    },
    {
      id: "q7_6",
      question: "A meeting to reflect on the past Sprint is a:",
      options: ["Planning", "Daily", "Retrospective", "Review"],
      correctAnswer: 2
    }
  ]
};
