import { quiz as q1 } from './quizzes/01-git-intro-quiz';
import { quiz as q2 } from './quizzes/02-git-avancado-quiz';
import { quiz as q11 } from './quizzes/11-stash-quiz';
import { quiz as q13 } from './quizzes/13-rebase-quiz';
import { quiz as q19 } from './quizzes/19-bisect-quiz';
import { quiz as q20 } from './quizzes/20-internals-quiz';
import { quiz as q21 } from './quizzes/21-security-quiz';

export const quizzes = [
  q1, q2,
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `git-q${i + 3}`,
    title: `Git Quiz ${i + 3}`,
    questions: [],
    passingScore: 70
  })),
  q11,
  { id: "git-q12", title: "Git Quiz 12", questions: [], passingScore: 70 },
  q13,
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `git-q${i + 14}`,
    title: `Git Quiz ${i + 14}`,
    questions: [],
    passingScore: 70
  })),
  q19, q20, q21
];