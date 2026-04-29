
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "eng-q12",
  title: "Quiz: Cloud Native & Virtualization",
  passingScore: 70,
  questions: [
    {
      id: "q12_1",
      question: "What is an isolated package containing an app and its dependencies?",
      options: ["Virtual Machine", "Container", "Folder", "Server"],
      correctAnswer: 1
    },
    {
      id: "q12_2",
      question: "Running code without managing the underlying server is called:",
      options: ["Hosting", "Serverless", "Localhost", "Fixed Server"],
      correctAnswer: 1
    },
    {
      id: "q12_3",
      question: "The ability to handle more users by adding resources is:",
      options: ["Redundancy", "Scalability", "Latency", "Bandwidth"],
      correctAnswer: 1
    },
    {
      id: "q12_4",
      question: "What is a 'Cluster'?",
      options: ["A single PC", "A group of connected computers working as one", "A small file", "A network cable"],
      correctAnswer: 1
    },
    {
      id: "q12_5",
      question: "Which term describes 'paying only for what you use' in the cloud?",
      options: ["Free Tier", "On-demand / Pay-as-you-go", "Subscription", "License"],
      correctAnswer: 1
    },
    {
      id: "q12_6",
      question: "A copy of a resource for reliability is a:",
      options: ["Backup", "Replica / Redundancy", "Shadow", "Ghost"],
      correctAnswer: 1
    }
  ]
};
