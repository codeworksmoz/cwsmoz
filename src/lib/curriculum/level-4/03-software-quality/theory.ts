import type { TheoryLesson } from '../../types';

const titles = [
  "A Pirâmide de Testes", "Unit Testing & Mocks", "Integration Testing",
  "E2E Testing (Playwright/Cypress)", "TDD: Test Driven Development", "BDD: Behavior Driven Development",
  "Performance & Load Testing", "Security Testing (SAST/DAST)", "Mutation Testing",
  "Test Coverage Metrics", "Visual Regression Testing", "Accessibility Auditing",
  "Contract Testing", "Chaos Engineering", "Observabilidade & Logs",
  "Monitorização Proativa", "Tracing Distribuído", "Gestão de Erros em Produção",
  "QA in DevOps Pipeline", "Zero Bug Policy", "Qualidade de Dados"
];

export const lessons: TheoryLesson[] = titles.map((title, i) => ({
  id: `qual-t${i + 1}`,
  title: title,
  content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🛡️ Software Quality: ${title}</h2><p>Estratégias de garantia de qualidade e resiliência para software de missão crítica.</p></div>`,
  quizId: `qual-q${i + 1}`
}));
