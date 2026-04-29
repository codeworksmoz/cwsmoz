import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';

/**
 * Knowledge Area: Networking
 * Focada na infraestrutura de comunicação global e protocolos de elite.
 */
export const networking: KnowledgeArea = {
  id: 'ka-networking',
  title: '02. Networking (Infraestrutura Global)',
  description: 'Do sinal físico ao roteamento BGP e protocolos assíncronos modernos como QUIC.',
  load: '45h',
  iconName: 'Globe',
  theory: lessons,
  quizzes: quizzes,
  practice: {
    bash: [
      {
        id: "net-p1",
        language: "bash",
        title: "Laboratório: Inspecção de Portas e Sockets",
        description: "Diagnostique conexões ativas no servidor.",
        statement: "Qual comando lista todas as portas TCP em estado de escuta (LISTEN)? Escreva 'netstat -tulpn'.",
        template: "let comando = '';",
        detailedExplanation: "<h3>🔍 Networking CLI</h3><p>O monitoramento de sockets é vital para segurança. Portas abertas desnecessariamente são vetores de ataque.</p>",
        objectives: [{ id: "obj1", description: "Identificar comando netstat", test: "netstat -tulpn" }]
      }
    ]
  }
};
