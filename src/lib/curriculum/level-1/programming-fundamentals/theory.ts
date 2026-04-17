import type { TheoryLesson } from '../../types';
import { lesson as lesson1 } from './theory/01-variables-data-types';
import { lesson as lesson2 } from './theory/02-control-structures-conditionals';
import { lesson as lesson3 } from './theory/03-control-structures-loops';
import { lesson as lesson4 } from './theory/04-functions-methods';
import { lesson as lesson5 } from './theory/05-arrays-collections';

export const theory: TheoryLesson[] = [
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5
];
