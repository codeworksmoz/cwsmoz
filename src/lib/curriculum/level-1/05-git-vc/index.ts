
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';

// Import Quizzes
import { quiz as q1 } from './quizzes/01-git-basico-quiz';
import { quiz as q2 } from './quizzes/02-git-avancado-quiz';

// Import Labs
import { exercise as ex1 } from './laboratory/01-comandos-basicos';
import { exercise as ex2 } from './laboratory/02-branches-lab';
import { exercise as ex3 } from './laboratory/03-github-lab';

export const gitVC: KnowledgeArea = {
  id: 'ka-git-vc',
  title: '05. Git & Controlo Versão',
  description: 'Gestão de histórico, colaboração em equipa e fluxos de trabalho profissionais.',
  load: '15h',
  iconName: 'GitBranch',
  theory: lessons,
  quizzes: [q1, q2],
  practice: {
    bash: [ex1, ex2, ex3]
  }
};
