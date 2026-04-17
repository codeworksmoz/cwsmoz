import type { TheoryLesson } from '../../types';
import { lesson as lesson1 } from './theory/01-set-theory';
import { lesson as lesson2 } from './theory/02-relations';
import { lesson as lesson3 } from './theory/03-functions';
import { lesson as lesson4 } from './theory/04-propositional-logic';
import { lesson as lesson5 } from './theory/05-predicate-logic';
import { lesson as lesson6 } from './theory/06-proof-methods';
import { lesson as lesson7 } from './theory/07-combinatorics';
import { lesson as lesson8 } from './theory/08-probability';
import { lesson as lesson9 } from './theory/09-graph-theory';
import { lesson as lesson10 } from './theory/10-recurrence-relations';

export const theory: TheoryLesson[] = [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5,
    lesson6,
    lesson7,
    lesson8,
    lesson9,
    lesson10
];
