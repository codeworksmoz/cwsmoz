import type { KnowledgeArea } from '../../types';
import { simulatorExercises } from './practice/simulator';

export const practice: KnowledgeArea['practice'] = {
  simulator: simulatorExercises
};
