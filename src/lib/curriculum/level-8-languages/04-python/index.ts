
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { practice as practiceData } from './laboratory';

export const pythonMaster: KnowledgeArea = {
  id: 'lang-python-master',
  title: '04. Python Master',
  description: 'Domínio profundo de CPython Internals, Metaprogramação, AsyncIO e Engenharia de IA.',
  load: '80h',
  iconName: 'Zap',
  theory: lessons,
  practice: practiceData,
  quizzes: quizzes
};
