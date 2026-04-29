
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';

/**
 * Knowledge Area: CS Core
 * Removidos laboratórios conceptuais (practice) pois a validação é feita 
 * via quizzes integrados nas lições teóricas para melhor fluxo UX.
 */
export const csCore: KnowledgeArea = {
  id: 'ka-cs-core',
  title: '01. CS Core (Engenharia Base)',
  description: 'Ciência da Computação Profunda: de circuitos lógicos a arquiteturas avançadas de CPU. 21 tópicos de nível universitário.',
  load: '45h',
  iconName: 'Cpu',
  theory: lessons,
  quizzes: quizzes,
  practice: {
    // Mantendo vazio para focar no fluxo Teoria + Quiz conforme pedido
  }
};
