import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { practice } from './laboratory';

export const dataStructures: KnowledgeArea = {
  id: 'ka-data-structures',
  title: '02. Data Structures',
  description: 'A fundação física da computação: como organizar dados na RAM para máxima performance.',
  load: '40h',
  iconName: 'Database',
  theory: lessons,
  quizzes: quizzes,
  practice: practice
};