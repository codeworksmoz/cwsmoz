import type { KnowledgeArea } from '../../types';
import { pythonExercises } from './practice/python';
import { javascriptExercises } from './practice/javascript';
import { javaExercises } from './practice/java';
import { cppExercises } from './practice/cpp';

export const practice: KnowledgeArea['practice'] = {
  python: pythonExercises,
  javascript: javascriptExercises,
  java: javaExercises,
  cpp: cppExercises
};
