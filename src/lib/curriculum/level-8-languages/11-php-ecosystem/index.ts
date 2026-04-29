import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { practice } from './laboratory';

/**
 * Knowledge Area: PHP Ecosystem & Advanced Patterns (10.1)
 * Focada na construção de infraestruturas de software resilientes e escaláveis.
 */
export const phpEcosystem: KnowledgeArea = {
  id: 'lang-php-ecosystem',
  title: '10.1 PHP Ecosystem & Advanced Patterns',
  description: 'Arquitetura de sistemas, DDD, Testes de Elite e Infraestrutura Cloud-Native com PHP 8.4.',
  load: '50h',
  iconName: 'Blocks',
  theory: lessons,
  practice: practice,
  quizzes: quizzes
};