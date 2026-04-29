import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m3",
  title: "AsyncIO: Concorrência e o Event Loop",
  youtubeVideoId: "8aGhZQkoFbQ",
  enableInteractive: true,
  quizId: "py-mq3",
  content: `
    <div class="space-y-12">
      <div class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-indigo-400 flex items-center gap-3">
          ⚡ Escalando sem Threads
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>AsyncIO</strong> permite que um único processo Python lide com milhares de conexões simultâneas. Diferente das threads, o escalonamento é <strong>cooperativo</strong>: a função "cede" o controle voluntariamente no momento de espera.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Corrotinas e Await</h3>
        <p class="text-sm">Ao usar <code>await</code>, o interpretador pausa a execução daquela função e corre outras tarefas pendentes enquanto espera pela rede ou disco.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm text-accent shadow-inner">
          <pre><code class="language-python">
import asyncio

async def fetch_metrics():
    # Simula espera de rede sem travar o programa
    await asyncio.sleep(1)
    return {"cpu": 45}

asyncio.run(fetch_metrics())
          </code></pre>
        </div>
      </section>

      <section class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20 mt-6 shadow-inner text-center">
        <h4 class="font-bold text-yellow-500 mb-2">🚀 Regra de Ouro do Async</h4>
        <p class="text-sm italic">"Nunca use <code>time.sleep()</code> dentro de uma função async. Isso trava o Event Loop inteiro. Em Python Master, usamos o tempo de CPU para lógica e o <code>await</code> para qualquer espera de tempo ou I/O."</p>
      </section>
    </div>
  `
};
