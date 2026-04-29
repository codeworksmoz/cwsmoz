import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p17",
  language: "java",
  title: "Projeto Master Java: GraalVM Native Image",
  description: "Prepare o banco para o mundo Cloud Native e Serverless.",
  statement: "Simule a escrita de uma configuração de reflexão (reflection-config.json) para o GraalVM num comentário técnico.",
  isProjectPart: true,
  template: `/* [
  {
    "name": "com.cwm.Transaction",
    "allDeclaredConstructors": true
  }
] */`,
  detailedExplanation: `
    <h3>🚀 Startup Instantâneo</h3>
    <p>Compilar Java para código nativo com GraalVM reduz o tempo de arranque de segundos para milissegundos, essencial para funções serverless que escalam sob demanda.</p>
  `,
  objectives: [
    {
      id: "reflection_config",
      description: "Inclua 'allDeclaredConstructors' na sua configuração simulada.",
      test: "allDeclaredConstructors"
    }
  ]
};