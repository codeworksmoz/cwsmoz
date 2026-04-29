import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';

/**
 * Knowledge Area: HCI (Human-Computer Interaction)
 * Focada no design de interfaces, usabilidade e experiência do utilizador.
 */
export const hci: KnowledgeArea = {
  id: 'ka-hci',
  title: '06. HCI (Interação Humano-Computador)',
  description: 'Design centrado no utilizador, princípios de usabilidade e arquitetura de interfaces profissionais.',
  load: '30h',
  iconName: 'Layout',
  theory: lessons,
  quizzes: quizzes,
  practice: {
    design: [
      {
        id: "hci-p1",
        language: "concept",
        title: "Laboratório: Diagnóstico Heurístico",
        description: "Avalie uma interface com base nas regras de Nielsen.",
        statement: "Identifique qual heurística é violada se um site não tiver botão de 'Voltar'. Escreva 'Controlo'.",
        template: "let violacao = '';",
        detailedExplanation: "<h3>📐 Auditoria de Usabilidade</h3><p>Um sistema profissional nunca deve prender o utilizador numa página ou estado.</p>",
        objectives: [{ id: "obj1", description: "Identificar heurística de Controlo", test: "Controlo" }]
      }
    ]
  }
};
