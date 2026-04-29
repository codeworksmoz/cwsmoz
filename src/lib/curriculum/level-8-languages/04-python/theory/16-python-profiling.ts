import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m16",
  title: "Fase 4: Profiling: Identificando Gargalos Reais",
  youtubeVideoId: "v4cd1O4zkGw",
  enableInteractive: true,
  quizId: "py-mq16",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🔬 A Ciência da Medição
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Um engenheiro master nunca otimiza por intuição. O <strong>Profiling</strong> é o processo de auditoria de runtime que identifica exatamente quais funções estão a consumir CPU ou memória. No nível Master, utilizamos ferramentas de amostragem determinística para curar o software lento.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Deterministic Profiling com cProfile</h3>
        <p class="text-sm leading-relaxed">
          O <code>cProfile</code> é o padrão industrial. Ele mede o tempo de CPU e o número de chamadas de cada função no seu projeto, gerando um relatório que revela o <strong>Hot Path</strong> (o caminho crítico) do seu código.
        </p>
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-python">
import cProfile

def monitor_loop():
    # Lógica do motor...
    pass

cProfile.run('monitor_loop()')
           </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Flame Graphs e Py-spy</h3>
        <p class="text-sm leading-relaxed">Para sistemas em produção, não podemos usar o cProfile devido ao overhead. Utilizamos o <strong>py-spy</strong>, um profiler de amostragem (sampling) que lê a memória do processo Python sem o interromper, gerando visualizações térmicas chamadas <strong>Flame Graphs</strong>.</p>
      </section>

      <section class="bg-green-500/5 p-8 rounded-[2rem] border-2 border-dashed border-green-500/20 text-center">
        <h4 class="text-xl font-bold text-green-500 mb-4">🚀 Regra do Engenheiro</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Premature optimization is the root of all evil. Meça primeiro, entenda o gargalo, e só depois aplique técnicas como Cython ou Vectorização para resolver o problema real."
        </p>
      </section>
    </div>
  `
};
