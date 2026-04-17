import type { KnowledgeArea } from '../../types';
import { exercise as ex1 } from './practice/sql/01-sql-queries';
import { exercise as ex2 } from './practice/sql/02-normalization';

export const practice: KnowledgeArea['practice'] = {
  'sql': [
      ex1,
      ex2
  ]
};
