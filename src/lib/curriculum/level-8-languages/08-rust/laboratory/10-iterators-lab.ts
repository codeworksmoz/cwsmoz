import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "rs-p10",
  language: "rust",
  title: "Projeto Master: Iteradores de Alta Performance",
  description: "Processe blocos de dados de forma funcional e veloz.",
  statement: "Dada uma lista de blocos, use iteradores para filtrar os vazios e somar os tamanhos dos restantes.",
  isProjectPart: true,
  template: `fn audit_storage(blocks: Vec<String>) -> usize {
    // Utilize .iter().filter().map().sum()
    0
}`,
  detailedExplanation: `
    <h3>⚡ Abstrações de Custo Zero</h3>
    <p>Iteradores em Rust são tão rápidos quanto loops <code>for</code> manuais. O compilador otimiza o encadeamento de funções em código de máquina linear ultra-eficiente.</p>
  `,
  objectives: [
    {
      id: "iter_chain",
      description: "Encadeie iteradores para processar a coleção.",
      test: ".iter()."
    },
    {
      id: "sum",
      description: "Utilize o método .sum().",
      test: ".sum()"
    }
  ]
};