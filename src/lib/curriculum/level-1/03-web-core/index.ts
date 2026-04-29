import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { practice } from './laboratory';

export const webCore: KnowledgeArea = {
  id: 'ka-web-core',
  title: '03. Web Core (HTML/CSS)',
  description: 'A fundação da interface moderna: estrutura semântica e estilização avançada.',
  load: '25h',
  iconName: 'Globe',
  theory: lessons,
  quizzes: quizzes,
  practice: practice
};
