
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "eng-q14",
  title: "Quiz: System Design Discussion",
  passingScore: 70,
  questions: [
    {
      id: "q14_1",
      question: "Distributing traffic across multiple servers is:",
      options: ["Broadcasting", "Load Balancing", "Cloning", "Mirroring"],
      correctAnswer: 1
    },
    {
      id: "q14_2",
      question: "Percentage of time a system is 'up' and running is:",
      options: ["Throughput", "Latency", "Availability / Uptime", "Scalability"],
      correctAnswer: 2
    },
    {
      id: "q14_3",
      question: "How many requests per second a system can process is:",
      options: ["Latency", "Throughput", "Speed", "Load"],
      correctAnswer: 1
    },
    {
      id: "q14_4",
      question: "Reducing dependencies between components is called:",
      options: ["Coupling", "Decoupling", "Joining", "Merging"],
      correctAnswer: 1
    },
    {
      id: "q14_5",
      question: "A single point of failure in a system is a:",
      options: ["Bottle", "Bottleneck", "Single Point of Failure (SPOF)", "Crash"],
      correctAnswer: 2
    },
    {
      id: "q14_6",
      question: "Making a system work across multiple data centers is:",
      options: ["Replication", "Redundancy", "High Availability", "Global Scaling"],
      correctAnswer: 2
    }
  ]
};
