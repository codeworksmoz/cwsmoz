import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { practice } from './laboratory';

export const os: KnowledgeArea = {
  id: 'ka-os',
  title: '01. Operating Systems',
  description: 'Arquitetura de Kernels, gestão de processos, memória e segurança.',
  load: '45h',
  iconName: 'Cpu',
  theory: lessons,
  quizzes: quizzes,
  practice: practice
};