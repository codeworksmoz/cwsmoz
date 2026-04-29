
import type { PracticeExercise } from '../../types';
import { exercise as p1 } from './laboratory/01-dsl-init-lab';

const titles = [
  "DSL: Fundação e Blocos", "Mixins e Composição", "method_missing Dinâmico",
  "instance_eval e Contexto", "Eigenclasses de Elite", "Refinements Seguros",
  "Introspecção de Atributos", "Fibers e Pausa", "Ractors Paralelos",
  "Enumerators Lazy", "GC.compact Audit", "Benchmark Realtime",
  "Regex Parsing DSL", "Method Chaining (Self)", "Const_set Dinâmico",
  "Safe Navigation (&.)", "YJIT Performance", "Inherited Hooks",
  "define_method Factory", "Object Freezing (Security)", "Final Capstone"
];

const tests = [
  "yield", "include Logger", "def method_missing", "instance_eval(&block)",
  "class << self", "refine String", "instance_variables", "Fiber.yield",
  "r.take", ".lazy", "GC.compact", "Benchmark.realtime",
  "=~", "return self", "const_set", "&.", "--yjit",
  "self.inherited", "define_method", ".freeze", "PRODUCTION READY"
];

export const practice = {
  ruby: titles.map((title, i) => {
    if (i === 0) return p1;
    return {
      id: `rb-p${i + 1}`,
      language: "ruby",
      title: `Projeto Master: ${title}`,
      description: "Construção cumulativa da Expressive DSL Engine.",
      statement: `Implemente o requisito de ${title} no motor.`,
      isProjectPart: true,
      template: `# Checkpoint Aula ${i}\n# O código anterior foi herdado.\n`,
      detailedExplanation: `<h3>💎 Fase ${i + 1}: ${title}</h3><p>Evolua a arquitetura da sua DSL aplicando este conceito de elite.</p>`,
      objectives: [{ id: "obj", description: "Concluir requisito técnico", test: tests[i] }]
    };
  })
};
