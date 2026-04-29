
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "eng-q15",
  title: "Quiz: Open Source & Collaboration",
  passingScore: 70,
  questions: [
    {
      id: "q15_1",
      question: "Creating your own copy of someone else's project on GitHub is a:",
      options: ["Clone", "Fork", "Branch", "Commit"],
      correctAnswer: 1
    },
    {
      id: "q15_2",
      question: "What is a 'Pull Request' (PR)?",
      options: ["A request for money", "Proposing your code changes to the author", "Downloading a file", "Deleting a repo"],
      correctAnswer: 1
    },
    {
      id: "q15_3",
      question: "The person who manages the project and accepts PRs is the:",
      options: ["Maintainer", "Contributor", "Follower", "Lurker"],
      correctAnswer: 0
    },
    {
      id: "q15_4",
      question: "Combining changes into the main code is to:",
      options: ["Push", "Merge", "Stage", "Stash"],
      correctAnswer: 1
    },
    {
      id: "q15_5",
      question: "A short label for a specific version of code is a:",
      options: ["Branch", "Tag", "Commit", "Ref"],
      correctAnswer: 1
    },
    {
      id: "q15_6",
      question: "The public history of changes is the:",
      options: ["Backlog", "Changelog", "Manual", "Readline"],
      correctAnswer: 1
    }
  ]
};
