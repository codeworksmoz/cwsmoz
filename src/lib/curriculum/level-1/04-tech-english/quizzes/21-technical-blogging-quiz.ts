
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "eng-q21",
  title: "Quiz: Technical Blogging & Personal Brand",
  passingScore: 70,
  questions: [
    {
      id: "q21_1",
      question: "Ending a post with a question to encourage discussion is a:",
      options: ["Questionnaire", "Call to Action (CTA)", "Ending Note", "Comment hook"],
      correctAnswer: 1
    },
    {
      id: "q21_2",
      question: "Writing for a specific group of people is identifying your:",
      options: ["Clients", "Audience", "Users", "Followers"],
      correctAnswer: 1
    },
    {
      id: "q21_3",
      question: "Creating authority in a technical niche builds your:",
      options: ["Profile", "Personal Brand", "Status", "Resume"],
      correctAnswer: 1
    },
    {
      id: "q21_4",
      question: "A summary of a long article is the:",
      options: ["TL;DR", "Intro", "Outro", "Footer"],
      correctAnswer: 0
    },
    {
      id: "q21_5",
      question: "Linking your code to your article creates:",
      options: ["Confusion", "Trust and Proof", "Safety", "Volume"],
      correctAnswer: 1
    },
    {
      id: "q21_6",
      question: "The professional network for engineers is:",
      options: ["Facebook", "LinkedIn", "Instagram", "TikTok"],
      correctAnswer: 1
    }
  ]
};
