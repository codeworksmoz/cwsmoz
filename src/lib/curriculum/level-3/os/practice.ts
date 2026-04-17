import type { KnowledgeArea } from '../../types';
import { exercise as ex1 } from './practice/exercises/01-process-vs-thread';
import { exercise as ex2 } from './practice/exercises/02-memory-management';

export const practice: KnowledgeArea['practice'] = {
  'exercises': [
      ex1,
      ex2
  ]
};
