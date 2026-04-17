import type { TheoryLesson } from '../../types';
import { lesson as lesson1 } from './theory/01-analysis';
import { lesson as lesson2 } from './theory/02-sorting';
import { lesson as lesson3 } from './theory/03-searching';
import { lesson as lesson4 } from './theory/04-recursion';
import { lesson as lesson5 } from './theory/05-paradigms';
import { lesson as lesson6 } from './theory/06-graph-intro';
import { lesson as lesson7 } from './theory/07-string-algorithms';
import { lesson as lesson8 } from './theory/08-numeric-algorithms';

export const theory: TheoryLesson[] = [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5,
    lesson6,
    lesson7,
    lesson8,
];
