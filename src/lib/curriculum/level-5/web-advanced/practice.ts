import type { KnowledgeArea } from '../../types';
import { exercise as ex1 } from './practice/javascript/01-react-custom-hook';
import { exercise as ex2 } from './practice/javascript/02-nextjs-server-action';
import { exercise as ex3 } from './practice/javascript/03-graphql-query';

export const practice: KnowledgeArea['practice'] = {
    'javascript': [ex1, ex2, ex3]
};
