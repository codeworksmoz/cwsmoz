import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m2",
  title: "Fase 1: Event Loop: Microtasks vs Macrotasks",
  enableInteractive: true,
  youtubeVideoId: "dQw4w9WgXcQ",
  quizId: "js-mq2",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          ⚙️ O Coração Assíncrono do JS
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          JavaScript é single-threaded, mas a web é multitarefa. O segredo está no <strong>Event Loop</strong>. No nível Master, deves dominar a ordem exata de execução para evitar bloqueios de UI e bugs de concorrência.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Microtask Queue (Alta Prioridade)</h3>
        <p class="text-sm">Contém tarefas urgentes que devem ser executadas IMEDIATAMENTE após a stack de chamadas esvaziar, antes de qualquer renderização ou outra tarefa.</p>
        <div class="bg-black/40 p-4 rounded-xl border border-indigo-500/20 shadow-lg">
           <p class="text-xs font-bold text-indigo-400 uppercase mb-2">Exemplos de Microtasks:</p>
           <ul class="text-[10px] space-y-1 font-mono text-green-400">
             <li>- Promise.then() / .catch() / .finally()</li>
             <li>- queueMicrotask()</li>
             <li>- MutationObserver callbacks</li>
           </ul>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Macrotask Queue (Task Queue)</h3>
        <p class="text-sm">Contém eventos agendados ou externos. O loop processa apenas UMA macrotask por vez e depois volta para limpar a fila de microtasks.</p>
        <div class="bg-black/40 p-4 rounded-xl border border-white/10">
           <p class="text-xs font-bold text-primary uppercase mb-2">Exemplos de Macrotasks:</p>
           <ul class="text-[10px] space-y-1 font-mono">
             <li>- setTimeout() / setInterval()</li>
             <li>- Eventos de I/O (clique, rede, ficheiro)</li>
             <li>- setImmediate() (Node.js)</li>
           </ul>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. O Algoritmo da Prioridade</h3>
        <pre><code class="language-javascript">
console.log("1. Síncrono");

setTimeout(() => console.log("2. Macrotask"), 0);

Promise.resolve().then(() => console.log("3. Microtask"));

console.log("4. Fim da Stack");

// 🏁 Ordem de Saída: 1 -> 4 -> 3 -> 2
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🚀 Visão de Performance</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Se uma microtask gera outra microtask recursivamente, a fila nunca esvazia e o browser nunca chega a pintar a tela (Render Phase), travando o site. Use Macrotasks para tarefas longas e Microtasks para lógica de estado urgente."
        </p>
      </section>
    </div>
  `,
};
