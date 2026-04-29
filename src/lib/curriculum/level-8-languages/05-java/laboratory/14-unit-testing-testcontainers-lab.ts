import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p14",
  language: "java",
  title: "Projeto Master Java: Testes de Integração com Docker",
  description: "Garanta que as queries SQL do banco funcionam num ambiente real.",
  statement: "Simule a inicialização de um container PostgreSQL utilizando a biblioteca Testcontainers num comentário técnico.",
  isProjectPart: true,
  template: `// public PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15");
// @BeforeAll
// static void setup() { postgres.start(); }`,
  detailedExplanation: `
    <h3>🐳 Testes de Alta Fidelidade</h3>
    <p>Testcontainers permite subir bases de dados reais dentro de containers Docker durante os testes unitários, eliminando o problema de "funciona com H2 mas falha em produção".</p>
  `,
  objectives: [
    {
      id: "testcontainers",
      description: "Inclua o termo 'PostgreSQLContainer'.",
      test: "PostgreSQLContainer"
    }
  ]
};