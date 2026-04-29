
import { lesson as l1 } from './theory/01-solid-principles';
import { lesson as l2 } from './theory/02-clean-code';
import { lesson as l3 } from './theory/03-creational-patterns';
import { lesson as l4 } from './theory/04-structural-patterns';
import { lesson as l5 } from './theory/05-behavioral-patterns';
import { lesson as l6 } from './theory/06-ddd-design';
import { lesson as l7 } from './theory/07-layered-architecture';
import { lesson as l8 } from './theory/08-hexagonal-architecture';
import { lesson as l9 } from './theory/09-clean-architecture';
import { lesson as l10 } from './theory/10-microservices-fundamentals';
import { lesson as l11 } from './theory/11-event-driven-architecture';
import { lesson as l12 } from './theory/12-api-design-rest';
import { lesson as l13 } from './theory/13-graphql-grpc';
import { lesson as l14 } from './theory/14-caching-strategies';
import { lesson as l15 } from './theory/15-messaging-queues';
import { lesson as l16 } from './theory/16-service-discovery';
import { lesson as l17 } from './theory/17-api-gateways';
import { lesson as l18 } from './theory/18-circuit-breakers';
import { lesson as l19 } from './theory/19-saga-pattern';
import { lesson as l20 } from './theory/20-cqrs-pattern';
import { lesson as l21 } from './theory/21-adr-architecture';

const designTitles = [
  "Fase 1: Princípios SOLID e Robustez",
  "Fase 1: Clean Code e Refatoração Profissional",
  "Fase 2: Padrões de Criação (Creational)",
  "Fase 2: Padrões Estruturais (Structural)",
  "Fase 2: Padrões Comportamentais (Behavioral)",
  "Fase 3: Domain Driven Design (DDD) Estratégico",
  "Fase 3: Arquitetura em Camadas (N-Tier)",
  "Fase 3: Hexagonal Architecture (Ports & Adapters)",
  "Fase 3: Clean Architecture de Elite",
  "Fase 4: Microserviços e Decomposição",
  "Fase 4: Event-Driven Architecture e Brokerage",
  "Fase 4: API Design: REST, HATEOAS e Versão",
  "Fase 4: GraphQL vs gRPC: Comunicação de Próxima Geração",
  "Fase 4: Estratégias de Cache (L1, L2, Invalidação)",
  "Fase 4: Messaging Queues e Backpressure",
  "Fase 4: Service Discovery e Service Mesh",
  "Fase 4: API Gateways e Segurança de Borda",
  "Fase 4: Resiliência: Circuit Breakers e Timeouts",
  "Fase 4: Sagas: Transações Distribuídas",
  "Fase 4: CQRS e Separação de Comando/Consulta",
  "Fase 4: Capstone: Design de Sistema Escalável"
];

const lessonsSource = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10,
  l11, l12, l13, l14, l15, l16, l17, l18, l19, l20, l21
];

export const lessons = designTitles.map((title, i) => {
  const baseLesson = lessonsSource[i];
  return {
    ...baseLesson,
    id: `des-t${i + 1}`, // IDs normalizados des-t* para evitar colisão com Java jv-m*
    title: title,
    quizId: `des-q${i + 1}-master`
  };
});
