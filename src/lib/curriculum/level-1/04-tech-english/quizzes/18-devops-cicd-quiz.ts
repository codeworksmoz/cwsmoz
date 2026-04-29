
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "eng-q18",
  title: "Quiz: DevOps & CI/CD Jargon",
  passingScore: 70,
  questions: [
    {
      id: "q18_1",
      question: "A set of automated steps to build and deploy code is a:",
      options: ["Chain", "Pipeline", "Road", "Wire"],
      correctAnswer: 1
    },
    {
      id: "q18_2",
      question: "The final output of a build (.zip, container image) is an:",
      options: ["Object", "Artifact", "Asset", "Item"],
      correctAnswer: 1
    },
    {
      id: "q18_3",
      question: "Returning to a previous version after an error is a:",
      options: ["Reset", "Rollback", "Undo", "Backtrack"],
      correctAnswer: 1
    },
    {
      id: "q18_4",
      question: "Managing many containers at once is:",
      options: ["Clustering", "Orchestration", "Ordering", "Grouping"],
      correctAnswer: 1
    },
    {
      id: "q18_5",
      question: "What does CI stand for?",
      options: ["Code Integration", "Continuous Integration", "Cloud Instance", "Computer Information"],
      correctAnswer: 1
    },
    {
      id: "q18_6",
      question: "The practice of infrastructure defined by code is:",
      options: ["IaC", "Saas", "PaaS", "IaaS"],
      correctAnswer: 0
    }
  ]
};
