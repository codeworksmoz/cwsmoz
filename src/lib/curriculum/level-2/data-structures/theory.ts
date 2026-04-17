import type { TheoryLesson } from '../../types';
import { lesson as lesson1 } from './theory/01-arrays-lists';
import { lesson as lesson2 } from './theory/02-linked-lists';
import { lesson as lesson3 } from './theory/03-stacks';
import { lesson as lesson4 } from './theory/04-queues';
import { lesson as lesson5 } from './theory/05-trees';
import { lesson as lesson6 } from './theory/06-graphs';
import { lesson as lesson7 } from './theory/07-hash-tables';
import { lesson as lesson8 } from './theory/08-sets';

export const theory: TheoryLesson[] = [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5,
    lesson6,
    lesson7,
    lesson8
];
