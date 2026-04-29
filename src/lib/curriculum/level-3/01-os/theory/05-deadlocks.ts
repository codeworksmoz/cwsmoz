import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t5",
  title: "Deadlocks: O Impasse Mortal",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold text-red-500">🚫 Bloqueio Mútuo</h2>
      <p>Um Deadlock ocorre quando cada processo num conjunto está à espera de um recurso que apenas outro processo no conjunto possui.</p>
      
      <h3 class="font-bold">As 4 Condições Necessárias (Coffman):</h3>
      <ol class="list-decimal ml-6 space-y-2">
        <li><strong>Mutual Exclusion:</strong> Apenas um processo usa o recurso por vez.</li>
        <li><strong>Hold and Wait:</strong> Processo segura recursos e espera por mais.</li>
        <li><strong>No Preemption:</strong> Recurso não pode ser tirado à força.</li>
        <li><strong>Circular Wait:</strong> Cadeia circular de espera.</li>
      </ol>
    </div>
  `,
  quizId: "os-q5"
};