import type { PracticeExercise } from '../../types';

// Gerador de laboratórios de processo para os 21 tópicos
const generateProcessLab = (idNum: number, title: string, testStr: string) => ({
  id: `se-p${idNum}`,
  language: "process",
  title: `Laboratório: ${title}`,
  description: "Aplicação prática de métricas e processos de engenharia.",
  statement: `Identifique o conceito chave de ${title}. Escreva '${testStr}'.`,
  template: "let analise = '';",
  detailedExplanation: `<div class='space-y-4'><h3>📋 Auditoria de Processo</h3><p>Nesta fase, validamos a compreensão do fluxo operacional de ${title}.</p></div>`,
  objectives: [{ id: "obj1", description: `Validar conhecimento de ${title}`, test: testStr }]
});

const titles = [
  "SDLC Metrics", "Agile Maturity", "Scrum Artifacts", "Kanban Throughput", 
  "Requirements Traceability", "INVEST Validation", "Relative Estimation", 
  "DevOps Culture Audit", "CI/CD Reliability", "Deployment Risk", 
  "Code Review Quality", "Technical Debt Interest", "SLO Calculation", 
  "Error Budget Burn", "Incident Response P0", "Post-mortem Root Cause", 
  "ADR Documentation", "Ethics Compliance", "Leadership Multiplier", 
  "AI Audit Protocol", "DORA Performance Audit"
];

const tests = [
  "Lead Time", "Agile", "Incremento", "WIP Limit", 
  "Traceability", "INVEST", "Fibonacci", 
  "CAMS", "Pipeline", "Rollback", 
  "Navigator", "Refactoring", "99.9%", 
  "Freeze", "Mitigation", "5 Porquês", 
  "Context", "Ethics", "Bus Factor", 
  "Zero Trust", "MTTR"
];

export const practice = {
  process: titles.map((title, i) => generateProcessLab(i + 1, title, tests[i]))
};
