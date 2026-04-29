
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "rs-m8",
  title: "Async/Await, Futures e Wakers",
  content: `
    <div class="space-y-6">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10">
        <h2 class="text-2xl font-bold mb-4">🧵 Concorrência Zero-Cost</h2>
        <p>Em Rust, o modelo async é <i>lazy</i>: nada acontece até que uma Future seja puxada (poll) por um executor.</p>
      </div>
      <p>O <strong>Waker</strong> é o mecanismo que notifica o executor de que uma tarefa está pronta para progredir, evitando polling contínuo ineficiente.</p>
    </div>
  `,
  quizId: "rs-mq8"
};
