import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "kt-p13",
  language: "kotlin",
  title: "Projeto Master: Injeção de Dependência por Delegação",
  description: "Desacople os serviços do seu motor.",
  statement: "Simule a obtenção de um 'SyncService' usando o padrão de delegação 'inject()' fictício num comentário.",
  isProjectPart: true,
  template: `// class EngineController {
//     val service: SyncService by inject()
// }`,
  detailedExplanation: `
    <h3>🧩 Modularidade de Elite</h3>
    <p>Em projetos Kotlin profissionais, utilizamos bibliotecas como Koin ou Hilt. O segredo é o uso de <strong>Delegated Properties</strong> para obter instâncias de forma limpa e testável.</p>
  `,
  objectives: [
    {
      id: "di_pattern",
      description: "Mantenha o padrão de delegação no comentário.",
      test: "by inject()"
    }
  ]
};