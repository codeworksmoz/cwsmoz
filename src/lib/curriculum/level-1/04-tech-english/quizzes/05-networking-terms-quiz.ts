
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "eng-q5",
  title: "Quiz: Networking & Cloud Terms",
  passingScore: 70,
  questions: [
    {
      id: "q5_1",
      question: "What is 'Hosting'?",
      options: ["Writing code", "Where your website lives 24/7", "Buying a domain", "Building a PC"],
      correctAnswer: 1
    },
    {
      id: "q5_2",
      question: "The data transfer capacity of a network is:",
      options: ["Latency", "Ping", "Bandwidth", "Protocol"],
      correctAnswer: 2
    },
    {
      id: "q5_3",
      question: "The delay in network communication is called:",
      options: ["Speed", "Latency", "Bandwidth", "Broadcasting"],
      correctAnswer: 1
    },
    {
      id: "q5_4",
      question: "What is a 'Protocol'?",
      options: ["A hardware device", "A set of rules for communication", "A cable type", "A screen resolution"],
      correctAnswer: 1
    },
    {
      id: "q5_5",
      question: "The process of pushing code to a live server is:",
      options: ["Commit", "Deploy", "Save", "Merge"],
      correctAnswer: 1
    },
    {
      id: "q5_6",
      question: "Which device connects different networks together?",
      options: ["Switch", "Router", "Hub", "Monitor"],
      correctAnswer: 1
    }
  ]
};
