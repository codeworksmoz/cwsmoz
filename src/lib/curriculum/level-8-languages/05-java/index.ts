
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { practice } from './laboratory';

export const javaMaster: KnowledgeArea = {
  id: 'lang-java-master',
  title: '05. Java Master',
  description: 'Arquitetura corporativa de alta escala, tuning de JVM e ecossistema Spring Boot 3 de elite.',
  load: '70h',
  iconName: 'Coffee',
  theory: lessons,
  practice: practice,
  quizzes: quizzes
};
