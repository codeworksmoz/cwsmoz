import type { KnowledgeArea } from '../../types';
import { exercise as ex1 } from './practice/01-write-user-stories';
import { exercise as ex2 } from './practice/02-acceptance-criteria';
import { exercise as ex3 } from './practice/03-create-use-cases';
import { exercise as ex4 } from './practice/04-non-functional-specs';
import { exercise as ex5 } from './practice/05-prioritize-backlog';
import { exercise as ex6 } from './practice/06-requirements-document';
import { exercise as ex7 } from './practice/07-stakeholder-interview';


export const practice: KnowledgeArea['practice'] = {
    'requirements-exercises': [
        ex1,
        ex2,
        ex3,
        ex4,
        ex5,
        ex6,
        ex7,
    ]
};
