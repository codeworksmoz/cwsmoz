import type { Quiz } from '../../types';
import { quiz as quiz1 } from './quizzes/solid-principles';
import { quiz as quiz2 } from './quizzes/design-patterns-creational';
import { quiz as quiz3 } from './quizzes/design-patterns-structural';
import { quiz as quiz4 } from './quizzes/design-patterns-behavioral';
import { quiz as quiz5 } from './quizzes/architectural-patterns';
import { quiz as quiz6 } from './quizzes/software-design-final';

export const quizzes: Quiz[] = [
    quiz1,
    quiz2,
    quiz3,
    quiz4,
    quiz5,
    quiz6,
];
