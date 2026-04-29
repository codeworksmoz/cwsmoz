
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "kt-m8",
  title: "Coroutines: Pontos de Suspensão e Continuações",
  content: `
    <div class="space-y-6">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10">
        <h2 class="text-2xl font-bold mb-4">🧵 Concorrência sem Bloqueio</h2>
        <p>Coroutines não são threads. São suspensíveis. Quando uma coroutine atinge um <code>suspend</code>, ela liberta a thread para outras tarefas.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>A Máquina de Estados</h3>
        <p>O compilador transforma funções suspensas numa máquina de estados que utiliza um objeto <code>Continuation</code> para saber onde retomar a execução.</p>
      </div>
    </div>
  `,
  quizId: "kt-mq8"
};
