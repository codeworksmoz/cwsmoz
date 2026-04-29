import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "kt-p4",
  language: "kotlin",
  title: "Projeto Master: Transformações Funcionais",
  description: "Processe listas de updates de forma declarativa.",
  statement: "Dada uma lista de strings, filtre as vazias e transforme o restante em maiúsculas usando funções de alta ordem.",
  isProjectPart: true,
  template: `fun cleanUpdates(raw: List<String>): List<String> {
    // Use filter e map aqui
    return emptyList()
}`,
  detailedExplanation: `
    <h3>λ Pureza e Transformação</h3>
    <p>O Kotlin incentiva o uso de <strong>High-Order Functions</strong>. Processar dados de sincronização usando <code>filter</code> e <code>map</code> torna o código mais legível, menos propenso a erros e fácil de testar.</p>
  `,
  objectives: [
    {
      id: "filter",
      description: "Utilize o método filter { ... }.",
      test: ".filter"
    },
    {
      id: "map",
      description: "Utilize o método map { ... }.",
      test: ".map"
    }
  ]
};