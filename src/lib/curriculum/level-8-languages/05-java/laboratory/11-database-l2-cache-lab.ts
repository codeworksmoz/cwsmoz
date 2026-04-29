import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p11",
  language: "java",
  title: "Projeto Master Java: Performance de Persistência",
  description: "Configure o cache de segundo nível do Hibernate para dados estáticos (ex: Agências).",
  statement: "Simule a marcação de uma entidade como cacheável utilizando a anotação @Cacheable num comentário técnico.",
  isProjectPart: true,
  template: `// @Entity
// @Cacheable
// Defina a estratégia de cache aqui`,
  detailedExplanation: `
    <h3>🚀 Persistência de Elite</h3>
    <p>O cache L2 evita viagens desnecessárias à base de dados para informações que raramente mudam, reduzindo a latência do sistema bancário em até 80%.</p>
  `,
  objectives: [
    {
      id: "cacheable",
      description: "Utilize o termo '@Cacheable'.",
      test: "@Cacheable"
    }
  ]
};