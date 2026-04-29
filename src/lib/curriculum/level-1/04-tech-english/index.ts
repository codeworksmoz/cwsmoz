
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { exercise1 } from './laboratory/01-vocabulary-exercise';

/**
 * Knowledge Area: Tech English
 * Focada na comunicação global para engenheiros de software.
 */
export const techEnglish: KnowledgeArea = {
  id: 'ka-tech-english',
  title: '04. Tech English',
  description: 'Vocabulário essencial, documentação e comunicação profissional para o mercado global.',
  load: '20h',
  iconName: 'Languages',
  theory: lessons,
  quizzes: quizzes,
  practice: {
    english: [exercise1]
  }
};
