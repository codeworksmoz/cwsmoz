import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { practice } from './laboratory';

export const softwareDesign: KnowledgeArea = {
  id: 'ka-se-design',
  title: '02. Design & Architecture',
  description: 'Princípios SOLID, Design Patterns e Arquitetura Limpa para sistemas escaláveis e resilientes.',
  load: '45h',
  iconName: 'Layout',
  theory: lessons,
  practice: practice,
  quizzes: quizzes
};
