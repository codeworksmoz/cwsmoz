
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "eng-q9",
  title: "Quiz: Job Interview Vocabulary",
  passingScore: 70,
  questions: [
    {
      id: "q9_1",
      question: "Technical abilities like coding or SQL are:",
      options: ["Soft Skills", "Hard Skills", "Life Skills", "Fun Skills"],
      correctAnswer: 1
    },
    {
      id: "q9_2",
      question: "Communication and teamwork are examples of:",
      options: ["Hard Skills", "Soft Skills", "Metal Skills", "Logical Skills"],
      correctAnswer: 1
    },
    {
      id: "q9_3",
      question: "What is a 'Portfolio'?",
      options: ["A bank account", "A collection of your best projects", "A resume only", "A laptop case"],
      correctAnswer: 1
    },
    {
      id: "q9_4",
      question: "The person who makes the final hiring decision is the:",
      options: ["Intern", "Hiring Manager", "Consultant", "Candidate"],
      correctAnswer: 1
    },
    {
      id: "q9_5",
      question: "Checking back after an interview is a:",
      options: ["Failure", "Follow-up", "Reset", "Repeat"],
      correctAnswer: 1
    },
    {
      id: "q9_6",
      question: "Discussing salary and benefits is part of:",
      options: ["Negotiation", "Interview", "Onboarding", "Applying"],
      correctAnswer: 0
    }
  ]
};
