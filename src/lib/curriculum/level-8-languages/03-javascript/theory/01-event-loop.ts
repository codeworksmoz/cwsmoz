
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m1",
  title: "Motores JS e o Event Loop",
  content: `
    <div class="space-y-6">
      <div class="bg-yellow-500/10 p-6 rounded-2xl border border-yellow-500/20">
        <h2 class="text-2xl font-bold mb-4">⚙️ Por baixo do capô</h2>
        <p class="text-lg leading-relaxed">
          O JavaScript é single-threaded, mas o seu ecossistema é assíncrono. Entender o <strong>V8</strong> e o <strong>Event Loop</strong> é obrigatório para performance.
        </p>
      </div>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-card border rounded-xl">
          <h4 class="font-bold text-yellow-500">Call Stack</h4>
          <p class="text-xs">Onde as funções síncronas são executadas (LIFO).</p>
        </div>
        <div class="p-4 bg-card border rounded-xl">
          <h4 class="font-bold text-primary">Microtasks</h4>
          <p class="text-xs">Promises e queues com alta prioridade.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "js-mq1"
};
