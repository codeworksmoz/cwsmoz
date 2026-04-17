import type { KnowledgeArea } from '../../types';
import { projects } from './practice/projects';

export const practice: KnowledgeArea['practice'] = {
  html: projects,
};
