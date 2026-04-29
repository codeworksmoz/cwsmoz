import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { practice } from './laboratory';

/**
 * Knowledge Area: Programming Fundamentals
 * Focada em lógica universal com suporte multi-linguagem.
 */
export const programmingFundamentals: KnowledgeArea = {
  id: 'ka-prog-fund',
  title: '02. Programming Fundamentals',
  description: 'Sintaxe universal, tipos de dados, estruturas de controlo e modularização. Base para qualquer linguagem.',
  load: '30h',
  iconName: 'Code2',
  theory: lessons,
  quizzes: quizzes,
  practice: practice
};
