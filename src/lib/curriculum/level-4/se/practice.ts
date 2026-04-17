import type { KnowledgeArea } from '../../types';
import { exercise as ex1 } from './practice/01-create-user-stories';
import { exercise as ex2 } from './practice/02-planning-poker';
import { exercise as ex3 } from './practice/03-sprint-planning';
import { exercise as ex4 } from './practice/04-kanban-board';
import { exercise as ex5 } from './practice/05-retrospective';
import { exercise as ex6 } from './practice/06-agile-metrics';

export const practice: KnowledgeArea['practice'] = {
    'agile-exercises': [
        ex1,
        ex2,
        ex3,
        ex4,
        ex5,
        ex6,
    ]
};
