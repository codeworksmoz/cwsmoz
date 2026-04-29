import type { TheoryLesson } from '../../../types';
export const lesson: TheoryLesson = {
  id: "db-t2",
  title: "Modelagem Entidade-Relacionamento (ER)",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">📐 Desenhando o Banco</h2>
      <p>Antes de criar tabelas, precisamos de um modelo conceptual.</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Entidades:</strong> Objetos do mundo real (ex: Aluno, Curso).</li>
        <li><strong>Atributos:</strong> Propriedades (ex: Nome, DataNascimento).</li>
        <li><strong>Relacionamentos:</strong> Como as entidades se ligam (1:1, 1:N, N:M).</li>
      </ul>
    </div>
  `,
  quizId: "db-q2"
};