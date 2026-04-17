import type { KnowledgeArea } from '../../types';
import { exercise as ex1 } from './practice/exercises/01-osi-vs-tcpip';
import { exercise as ex2 } from './practice/exercises/02-dns-lookup';

export const practice: KnowledgeArea['practice'] = {
  'exercises': [
      ex1,
      ex2
  ]
};
