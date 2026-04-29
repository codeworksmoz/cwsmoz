import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { practice } from './laboratory';

export const phpMaster: KnowledgeArea = {
  id: 'lang-php-master',
  title: '10. PHP Master (Core & Internals)',
  description: 'Domínio absoluto da Zend Engine, gestão de memória e concorrência nativa.',
  load: '45h',
  iconName: 'Zap',
  theory: lessons,
  practice: practice,
  quizzes: quizzes
};
