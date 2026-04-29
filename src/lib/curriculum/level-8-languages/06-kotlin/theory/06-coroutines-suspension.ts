import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "kt-m6",
  title: "Coroutines Master: Suspensão e Scopes",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400 flex items-center gap-2">
          🧵 Concorrência de Baixa Latência
        </h2>
        <p class="text-lg leading-relaxed">
          Coroutines são a alma do Kotlin. Elas não são threads; são tarefas suspensíveis que permitem que milhares de operações corram em paralelo sem esgotar a RAM.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Conceito de Suspensão</h3>
        <p class="text-sm">Quando uma coroutine atinge um ponto de <code>suspend</code>, ela liberta a thread real (Carrier Thread) para outras tarefas. Quando o dado chega, ela retoma exatamente onde parou.</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl shadow-lg border-white/5">
            <h4 class="font-bold text-primary mb-1">Launch</h4>
            <p class="text-[10px] opacity-70">"Dispare e esqueça". Não retorna valor. Ideal para atualizar UI ou logs.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl shadow-lg border-white/5">
            <h4 class="font-bold text-primary mb-1">Async</h4>
            <p class="text-[10px] opacity-70">Retorna um 'Deferred'. Permite aguardar pelo resultado via .await().</p>
          </div>
        </div>

        <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-red-400 mb-2">⚠️ Bloqueio de Thread</h4>
          <p class="text-sm leading-relaxed">Nunca use <code>Thread.sleep()</code> dentro de uma coroutine. Isso trava a thread física e impede que todas as outras coroutines naquele pool corram. Use <code>delay()</code>, que é um ponto de suspensão legítimo.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "kt-mq6"
};
