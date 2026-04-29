import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';

// Import Quizzes
import { quiz as q1 } from './quizzes/01-logic-quiz';
import { quiz as q2 } from './quizzes/02-predicates-quiz';
import { quiz as q3 } from './quizzes/03-sets-quiz';
import { quiz as q4 } from './quizzes/04-functions-quiz';
import { quiz as q5 } from './quizzes/05-induction-quiz';
import { quiz as q6 } from './quizzes/06-number-theory-quiz';
import { quiz as q7 } from './quizzes/07-combinatorics-quiz';
import { quiz as q8 } from './quizzes/08-perm-comb-quiz';
import { quiz as q9 } from './quizzes/09-probability-quiz';
import { quiz as q10 } from './quizzes/10-graphs-quiz';
import { quiz as q11 } from './quizzes/11-trees-quiz';
import { quiz as q12 } from './quizzes/12-boolean-quiz';

// Import Labs
import { exercise as e1 } from './laboratory/01-logic-lab';
import { exercise as e2 } from './laboratory/02-predicates-lab';
import { exercise as e3 } from './laboratory/03-sets-lab';
import { exercise as e4 } from './laboratory/04-functions-lab';
import { exercise as e5 } from './laboratory/05-induction-lab';
import { exercise as e6 } from './laboratory/06-number-theory-lab';
import { exercise as e7 } from './laboratory/07-combinatorics-lab';
import { exercise as e8 } from './laboratory/08-perm-comb-lab';
import { exercise as e9 } from './laboratory/09-probability-lab';
import { exercise as e10 } from './laboratory/10-graphs-lab';
import { exercise as e11 } from './laboratory/11-trees-lab';
import { exercise as e12 } from './laboratory/12-boolean-lab';

export const discreteMath: KnowledgeArea = {
  id: 'ka-discrete-math',
  title: '03. Discrete Mathematics',
  description: 'A fundação matemática da ciência da computação: lógica, contagem, conjuntos e grafos.',
  load: '45h',
  iconName: 'Calculator',
  theory: lessons,
  quizzes: [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12],
  practice: {
    concept: [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12]
  }
};
