import type { TheoryLesson } from '../../../types';
export const lesson: TheoryLesson = {
  id: "db-t3",
  title: "Álgebra Relacional e Cálculo",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🧮 A Matemática por trás do SQL</h2>
      <p>Operações formais sobre relações que definem como as queries funcionam.</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Seleção (σ):</strong> Filtrar linhas.</li>
        <li><strong>Projeção (π):</strong> Escolher colunas.</li>
        <li><strong>Junção (⋈):</strong> Combinar tabelas.</li>
        <li><strong>União e Intersecção:</strong> Operações de conjuntos.</li>
      </ul>
    </div>
  `,
  quizId: "db-q3"
};