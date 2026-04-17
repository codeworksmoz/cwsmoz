import type { Quiz } from '../../types';
import { quiz as quiz1 } from './quizzes/git-basics';
import { quiz as quiz2 } from './quizzes/git-intermediate';

export const quizzes: Quiz[] = [
  quiz1,
  quiz2
];
