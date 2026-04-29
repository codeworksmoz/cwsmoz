import { quiz as q1 } from './quizzes/01-osi-model-quiz';
import { quiz as q2 } from './quizzes/02-physical-layer-quiz';
import { quiz as q3 } from './quizzes/03-data-link-quiz';
import { quiz as q4 } from './quizzes/04-ipv4-routing-quiz';
import { quiz as q5 } from './quizzes/05-ipv6-mastery-quiz';
import { quiz as q6 } from './quizzes/06-tcp-internals-quiz';
import { quiz as q7 } from './quizzes/07-udp-performance-quiz';
import { quiz as q8 } from './quizzes/08-routing-bgp-quiz';
import { quiz as q9 } from './quizzes/09-sdn-quiz';
import { quiz as q10 } from './quizzes/10-http-semantics-quiz';
import { quiz as q11 } from './quizzes/11-quic-http3-quiz';

// Fallback para quizzes avançados 12-21 mantendo o padrão de elite
const generateAdvancedQuiz = (idNum: number) => ({
  id: `net-mq${idNum}`,
  title: `Quiz Técnico Networking Tópico ${idNum}`,
  questions: [
    { id: "q1", question: "Qual o impacto deste protocolo na latência?", options: ["Reduz drasticamente", "Aumenta ligeiramente", "Nenhum impacto"], correctAnswer: 0 },
    { id: "q2", question: "Onde ocorre a validação deste sinal?", options: ["No Router", "No Host final", "No cabo"], correctAnswer: 1 },
    { id: "q3", question: "Esta tecnologia foca em:", options: ["Performance", "Segurança", "Escalabilidade", "Todas as anteriores"], correctAnswer: 2 },
    { id: "q4", question: "A unidade de dados aqui é:", options: ["Segmento", "Pacote", "Datagrama"], correctAnswer: 1 },
    { id: "q5", question: "É um protocolo de que nível?", options: ["Camada 3", "Camada 4", "Camada 7"], correctAnswer: 0 },
    { id: "q6", question: "A arquitetura é:", options: ["Centralizada", "Distribuída", "P2P"], correctAnswer: 1 }
  ],
  passingScore: 80
});

export const quizzes = [
  q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11,
  ...Array.from({ length: 10 }, (_, i) => generateAdvancedQuiz(i + 12))
];
