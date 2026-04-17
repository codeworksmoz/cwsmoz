import type { Quiz } from '../../types';
import { quiz as quiz1 } from './quizzes/testing-fundamentals';
import { quiz as quiz2 } from './quizzes/tdd-bdd';
import { quiz as quiz3 } from './quizzes/test-doubles';
import { quiz as quiz4 } from './quizzes/quality-assurance-final';

export const quizzes: Quiz[] = [
    quiz1,
    quiz2,
    quiz3,
    quiz4,
];
