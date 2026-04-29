import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "git-t4",
  title: "A Área de Estágio e Commits",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">📸 O Snapshot do Código</h2>
        <p>No Git, as alterações passam por duas fases:</p>
        <ul class="list-disc ml-6 mt-4">
          <li><strong>Add:</strong> Selecionas as alterações (Staging).</li>
          <li><strong>Commit:</strong> Gravas permanentemente com uma mensagem descriptiva.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "git-t4-quiz"
};
