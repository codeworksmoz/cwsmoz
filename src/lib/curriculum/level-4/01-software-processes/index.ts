import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { practice } from './laboratory';

export const softwareProcesses: KnowledgeArea = {
  id: 'ka-se-processes',
  title: '01. Software Processes',
  description: 'Metodologias de desenvolvimento, ciclo de vida, agilidade industrial e métricas de performance.',
  load: '30h',
  iconName: 'Settings',
  theory: lessons,
  quizzes: quizzes,
  practice: practice
};
