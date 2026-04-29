import type { TheoryLesson } from '../../../types';
export const lesson: TheoryLesson = {
  id: "db-t8",
  title: "Índices e Otimização de Queries",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold text-green-500">🚀 Velocidade de Resposta</h2>
      <p>Como o banco encontra dados em milissegundos no meio de milhões de linhas.</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>B-Trees & Hash Indexes:</strong> Estruturas de busca.</li>
        <li><strong>Query Execution Plan:</strong> Como o banco planeia a busca.</li>
        <li><strong>Sharding e Replicação:</strong> Escalar para múltiplos servidores.</li>
      </ul>
    </div>
  `,
  quizId: "db-q8"
};