import type { TheoryLesson } from '../../../types';
export const lesson: TheoryLesson = {
  id: "db-t7",
  title: "Normalização: 1NF, 2NF, 3NF e BCNF",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🧹 Organização Eficiente</h2>
      <p>Evitar a redundância de dados e anomalias de atualização.</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>1NF:</strong> Valores atómicos, sem grupos repetidos.</li>
        <li><strong>2NF:</strong> Sem dependências parciais da chave.</li>
        <li><strong>3NF:</strong> Sem dependências transitivas.</li>
      </ul>
    </div>
  `,
  quizId: "db-q7"
};