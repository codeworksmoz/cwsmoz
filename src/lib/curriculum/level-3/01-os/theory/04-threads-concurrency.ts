import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t4",
  title: "Threads, Concorrência e Multicore",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🧵 Unidades de Execução</h2>
      <p>Uma Thread (linha de execução) é a unidade básica de utilização da CPU. Um processo pode ter múltiplas threads partilhando o mesmo código e dados.</p>
      
      <div class="bg-card p-4 rounded-xl border">
        <h4 class="font-bold text-primary">Parallelism vs Concurrency</h4>
        <p class="text-sm">Paralelismo é fazer várias coisas ao mesmo tempo (Multicore). Concorrência é lidar com várias coisas (Time slicing).</p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Race Conditions</h3>
        <p>Acontece quando duas threads tentam mudar o mesmo dado ao mesmo tempo. A solução é a <strong>Exclusão Mútua (Mutex)</strong>.</p>
      </div>
    </div>
  `,
  quizId: "os-q4"
};