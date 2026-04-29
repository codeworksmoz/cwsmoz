import type { PracticeExercise } from '../../types';
import { exercise as p1 } from './laboratory/01-solid-srp-lab';
import { exercise as p2 } from './laboratory/02-clean-code-lab';
import { exercise as p3 } from './laboratory/03-factory-pattern-lab';
import { exercise as p4 } from './laboratory/04-adapter-pattern-lab';
import { exercise as p5 } from './laboratory/05-strategy-pattern-lab';

// Gerador para os restantes labs enquanto são aprofundados individualmente
const generateDesignLab = (idNum: number, title: string, testStr: string) => ({
  id: `des-p${idNum}`,
  language: "typescript",
  title: `Laboratório Master: ${title}`,
  description: "Implementação de padrões e princípios de design de alta fidelidade.",
  statement: `Aplique o conceito de ${title} no editor utilizando TypeScript.`,
  template: `// Implemente ${title} (Arquitetura Master)\n`,
  detailedExplanation: `<div class='space-y-4'><h3>🏗️ Engenharia de Design</h3><p>O objetivo é criar uma estrutura que respeite o padrão ${title} com segurança de tipos.</p></div>`,
  objectives: [{ id: "obj1", description: `Implementar ${title}`, test: testStr }]
});

const titles = [
  "SOLID SRP", "Clean Code", "Factory Pattern", "Adapter Pattern", 
  "Strategy Pattern", "DDD Bounded Context", "Layered Separation", 
  "Hexagonal Ports", "Clean Onion", "Microservices Discovery", 
  "Event Bus", "REST Semantics", "gRPC Proto", "LRU Cache", 
  "Message Consumer", "Service Registry", "API Gateway Logic", 
  "Circuit Breaker", "Saga Compensate", "CQRS Read Model", "ADR Record"
];

const tests = [
  "interface", "function", "factory", "adapter", 
  "strategy", "domain", "layer", 
  "port", "entity", "service", 
  "event", "get", "proto", "cache", 
  "queue", "registry", "gateway", 
  "breaker", "saga", "query", "adr"
];

export const practice = {
  typescript: [
    p1, p2, p3, p4, p5,
    ...titles.slice(5).map((title, i) => generateDesignLab(i + 6, title, tests[i + 5]))
  ]
};
