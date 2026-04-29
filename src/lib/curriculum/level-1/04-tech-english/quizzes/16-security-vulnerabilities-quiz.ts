
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "eng-q16",
  title: "Quiz: Cybersecurity Vocabulary",
  passingScore: 70,
  questions: [
    {
      id: "q16_1",
      question: "An unauthorized access to private data is a:",
      options: ["Crash", "Breach", "Fix", "Update"],
      correctAnswer: 1
    },
    {
      id: "q16_2",
      question: "A software update to fix a security hole is a:",
      options: ["Release", "Patch", "Build", "Stage"],
      correctAnswer: 1
    },
    {
      id: "q16_3",
      question: "Code that takes advantage of a vulnerability is an:",
      options: ["Exploit", "Error", "Effect", "Engine"],
      correctAnswer: 0
    },
    {
      id: "q16_4",
      question: "A vulnerability known to hackers but not developers yet is a:",
      options: ["First-day", "Zero-day", "Last-day", "Hidden-bug"],
      correctAnswer: 1
    },
    {
      id: "q16_5",
      question: "The process of verifying a user's identity is:",
      options: ["Authentication", "Authorization", "Accessibility", "Accounting"],
      correctAnswer: 0
    },
    {
      id: "q16_6",
      question: "A security measure using something you know and something you have is:",
      options: ["2FA / MFA", "SSL", "DNS", "VPN"],
      correctAnswer: 0
    }
  ]
};
