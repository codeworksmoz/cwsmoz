import type { Level, KnowledgeArea } from '../types';

const capstoneLessons = Array.from({ length: 21 }, (_, i) => ({
  id: `cap-t${i + 1}`,
  title: [
    "Definição do MVP & Scope", "Engenharia de Requisitos Master",
    "Arquitetura de Dados & Entidades", "UX Research & Design Patterns",
    "Segurança: Auth & RBAC", "Backend Logic & Performance",
    "Frontend Engineering & State", "Testing Strategy & Coverage",
    "CI/CD Pipeline Setup", "Cloud Infrastructure Deployment",
    "Escalabilidade & Cache", "Observabilidade & Logging",
    "Fronteiras de API (REST/GraphQL)", "Tratamento de Erros Proativo",
    "Documentação Técnica Completa", "Acessibilidade Compliance",
    "Performance Optimization Audit", "Refactoring para Produção",
    "Final Polish & QA", "Preparação de Pitch Técnico",
    "Showcase & Certificação Master"
  ][i],
  content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🏆 Capstone Project</h2><p>Aplicação prática de todo o conhecimento em larga escala.</p></div>`,
  quizId: `cap-q${i + 1}`
}));

const capstone: KnowledgeArea = {
  id: 'ka-capstone',
  title: '01. Capstone Project',
  description: 'Construção da aplicação final ponta-a-ponta para certificação master.',
  load: '100h',
  iconName: 'Trophy',
  theory: capstoneLessons,
  practice: {
    process: Array.from({ length: 21 }, (_, i) => ({
      id: `cap-p${i + 1}`,
      language: "process",
      title: `Capstone Milestone ${i + 1}`,
      description: "Marco de desenvolvimento do projeto final.",
      statement: "Valide a conclusão deste marco.",
      template: "let milestone = 'completed';",
      detailedExplanation: "<h3>🏆 Marco Capstone</h3><p>Progresso oficial do projeto de graduação.</p>",
      objectives: [{ id: "obj1", description: "Atingir marco", test: "completed" }]
    }))
  },
  quizzes: Array.from({ length: 21 }, (_, i) => ({
    id: `cap-q${i + 1}`,
    title: `Capstone Milestone Quiz ${i + 1}`,
    questions: [{ id: "q1", question: "Marco atingido?", options: ["Sim", "Não"], correctAnswer: 0 }],
    passingScore: 70
  }))
};

export const level7: Level = {
  id: 7,
  title: 'Nível 7: Projetos & Certificações',
  description: 'Consolidação de todo o currículo através de um projeto de grande escala.',
  knowledgeAreas: [capstone]
};