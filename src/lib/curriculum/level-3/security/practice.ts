import type { KnowledgeArea } from '../../types';
import { exercise as ex1 } from './practice/analysis/01-cia-triad';
import { exercise as ex2 } from './practice/analysis/02-xss-vs-csrf';

export const practice: KnowledgeArea['practice'] = {
  'analysis': [
      ex1,
      ex2
  ]
};
