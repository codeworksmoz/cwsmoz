import type { TheoryLesson } from '../../types';
import { lesson as lesson1 } from './theory/01-functional-programming';
import { lesson as lesson2 } from './theory/02-oop-advanced';
import { lesson as lesson3 } from './theory/03-generics';
import { lesson as lesson4 } from './theory/04-exception-handling';
import { lesson as lesson5 } from './theory/05-iterators-generators';
import { lesson as lesson6 } from './theory/06-metaprogramming';
import { lesson as lesson7 } from './theory/07-concurrency';
import { lesson as lesson8 } from './theory/08-async-programming';

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
