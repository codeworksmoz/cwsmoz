import type { TheoryLesson } from '../../types';
import { lesson as lesson1 } from './theory/01-what-is-vc';
import { lesson as lesson2 } from './theory/02-basic-workflow';
import { lesson as lesson3 } from './theory/03-branching-merging';
import { lesson as lesson4 } from './theory/04-remote-repos';

export const theory: TheoryLesson[] = [
  lesson1,
  lesson2,
  lesson3,
  lesson4
];
