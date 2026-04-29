import type { TheoryLesson } from '../../../types';
export const lesson: TheoryLesson = {
  id: "db-t9",
  title: "Sistemas NoSQL e Novas Tendências",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🔄 Para além do Relacional</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-muted border rounded-xl">
          <h4 class="font-bold">Document (MongoDB)</h4>
          <p class="text-xs">Esquema flexível, JSON-like.</p>
        </div>
        <div class="p-4 bg-muted border rounded-xl">
          <h4 class="font-bold">Graph (Neo4j)</h4>
          <p class="text-xs">Focado em conexões complexas.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "db-q9"
};