import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { practice } from './laboratory';

export const algorithms: KnowledgeArea = {
  id: 'ka-algorithms',
  title: '01. Algorithms',
  description: 'Lógica de resolução de problemas, ordenação, busca e análise de eficiência.',
  load: '35h',
  iconName: 'Zap',
  theory: lessons,
  quizzes: quizzes,
  practice: practice
};