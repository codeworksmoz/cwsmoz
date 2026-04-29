import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m17",
  title: "Profiling e Benchmarking Rigoroso",
  content: `
    <div class="space-y-8">
      <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-green-400">🔍 Onde está o Gargalo?</h2>
        <p class="text-lg">Um engenheiro Master nunca "adivinha" porque o código está lento. Ele utiliza ferramentas de <strong>Profiling Determinístico</strong> para identificar os hotspots reais.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">cProfile e Py-spy</h3>
        <p>O <code>cProfile</code> mede o tempo gasto em cada função. O <code>py-spy</code> permite analisar um processo Python em produção sem pausar a execução, gerando Flame Graphs visuais.</p>
        
        <h3 class="text-xl font-bold font-headline text-primary">Micro-benchmarking com timeit</h3>
        <p>Evite picos de cache do CPU realizando milhares de iterações automáticas. O módulo <code>timeit</code> garante que a medição é estatisticamente válida.</p>
      </div>
    </div>
  `,
  quizId: "py-mq17"
};
