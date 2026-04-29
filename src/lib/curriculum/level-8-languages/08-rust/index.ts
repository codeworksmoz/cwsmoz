import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { practice } from './laboratory';

export const rustMaster: KnowledgeArea = {
  id: 'lang-rust-master',
  title: '08. Rust Master',
  description: 'Segurança de memória sem garbage collector para sistemas críticos de alta performance.',
  load: '60h',
  iconName: 'Shield',
  theory: lessons,
  practice: practice,
  quizzes: quizzes
};