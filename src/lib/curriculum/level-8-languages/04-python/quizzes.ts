import type { Quiz } from '../../types';
import { quiz as q1 } from './quizzes/01-gil-internals-quiz';
import { quiz as q2 } from './quizzes/02-metaprogramming-quiz';
import { quiz as q3 } from './quizzes/03-asyncio-quiz';
import { quiz as q4 } from './quizzes/04-memory-management-quiz';
import { quiz as q5 } from './quizzes/05-fastapi-scaling-quiz';
import { quiz as q6 } from './quizzes/06-numpy-pandas-quiz';
import { quiz as q7 } from './quizzes/07-scikit-learn-quiz';
import { quiz as q8 } from './quizzes/08-pytorch-deep-quiz';
import { quiz as q9 } from './quizzes/09-security-best-practices-quiz';
import { quiz as q10 } from './quizzes/10-python-security-quiz';
import { quiz as q11 } from './quizzes/13-adv-decorators-quiz';
import { quiz as q12 } from './quizzes/14-metaclasses-quiz';
import { quiz as q13 } from './quizzes/14-metaclasses-quiz'; // Reutilizando para ABC
import { quiz as q14 } from './quizzes/15-networking-quiz';
import { quiz as q15 } from './quizzes/16-cython-quiz';
import { quiz as q16 } from './quizzes/17-profiling-quiz';
import { quiz as q17 } from './quizzes/18-microservices-quiz';
import { quiz as q18 } from './quizzes/19-poetry-quiz';
import { quiz as q19 } from './quizzes/20-bytecode-quiz';
import { quiz as q20 } from './quizzes/11-docker-quiz';
import { quiz as q21 } from './quizzes/21-deployment-quiz';

export const quizzes: Quiz[] = [
  q1, q2, q3, q4, q5, q6, q7, q8, q9, q10,
  q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21
];
