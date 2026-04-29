
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "go-m1",
  title: "Interfaces Implícitas e Tipagem Estrutural",
  content: `
    <div class="space-y-6">
      <div class="bg-cyan-500/10 p-6 rounded-2xl border border-cyan-500/20">
        <h2 class="text-2xl font-bold mb-4">🚀 Satisfação de Interfaces</h2>
        <p class="text-lg">Em Go, não declaras que "implementas" uma interface. Se o teu tipo possui os métodos, ele satisfaz a interface automaticamente.</p>
      </div>
    </div>
  `,
  quizId: "go-mq1"
};
