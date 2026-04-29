import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "kt-m6",
  title: "Fase 2: Coroutines Master: Suspensão e Scopes",
  enableInteractive: true,
  youtubeVideoId: "u044iM9xsTM",
  quizId: "kt-mq6",
  content: `
    <div class="space-y-12">
      <div class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-indigo-400 flex items-center gap-3">
          🧵 Concorrência de Baixa Latência
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Coroutines são a alma do Kotlin moderno. Elas não são threads; são tarefas suspensíveis que permitem que milhares de operações corram em paralelo sem esgotar a RAM do sistema operativo.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Conceito de Suspensão</h3>
        <p class="text-sm">Quando uma coroutine atinge um ponto de <code>suspend</code>, ela liberta a thread real (Carrier Thread) para outras tarefas. Quando o dado chega, ela retoma exatamente onde parou.</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl shadow-lg border-white/5">
            <h4 class="font-bold text-primary mb-1">launch</h4>
            <p class="text-[10px] opacity-70">"Dispare e esqueça". Não retorna valor. Ideal para atualizar UI ou logs em background.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl shadow-lg border-white/5">
            <h4 class="font-bold text-primary mb-1">async</h4>
            <p class="text-[10px] opacity-70">Retorna um 'Deferred'. Permite aguardar pelo resultado via <code>.await()</code>.</p>
          </div>
        </div>

        <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-red-400 mb-2">⚠️ Bloqueio de Thread</h4>
          <p class="text-sm leading-relaxed">Nunca use <code>Thread.sleep()</code> dentro de uma coroutine. Isso trava a thread física e impede que todas as outras coroutines naquele pool corram. Use <code>delay()</code>, que é um ponto de suspensão legítimo.</p>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Coroutine Scope e Contexto</h3>
        <p class="text-sm">O <code>CoroutineScope</code> define o tempo de vida da tarefa. Se o scope for destruído, todas as coroutines dentro dele são canceladas automaticamente, evitando memory leaks em aplicações móveis.</p>
      </section>
    </div>
  `
};