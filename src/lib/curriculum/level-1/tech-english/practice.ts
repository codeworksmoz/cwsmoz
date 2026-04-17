import type { KnowledgeArea } from '../../types';
import { exercises } from './practice/exercises';

export const practice: KnowledgeArea['practice'] = {
  exercises: exercises,
};
