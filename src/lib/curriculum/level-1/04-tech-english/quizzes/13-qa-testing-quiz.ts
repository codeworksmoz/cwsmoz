
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "eng-q13",
  title: "Quiz: QA, Testing & Assertions",
  passingScore: 70,
  questions: [
    {
      id: "q13_1",
      question: "What does it mean to 'Assert' in a test?",
      options: ["To delete", "To verify if a condition is true", "To ignore", "To repeat"],
      correctAnswer: 1
    },
    {
      id: "q13_2",
      question: "Simulating a real component (like a database) for testing is:",
      options: ["Mocking", "Coding", "Deploying", "Scaling"],
      correctAnswer: 0
    },
    {
      id: "q13_3",
      question: "A quick test to see if the basics work is a:",
      options: ["Smoke Test", "Sanity Check", "E2E Test", "Load Test"],
      correctAnswer: 1
    },
    {
      id: "q13_4",
      question: "Testing the most critical features first is a:",
      options: ["Unit Test", "Smoke Test", "Final Test", "Manual Test"],
      correctAnswer: 1
    },
    {
      id: "q13_5",
      question: "Verifying that new code didn't break old features is:",
      options: ["Unit testing", "Regression testing", "Beta testing", "Stress testing"],
      correctAnswer: 1
    },
    {
      id: "q13_6",
      question: "What does QA stand for?",
      options: ["Quick Answer", "Quality Assurance", "Query Automation", "Quantified Analysis"],
      correctAnswer: 1
    }
  ]
};
