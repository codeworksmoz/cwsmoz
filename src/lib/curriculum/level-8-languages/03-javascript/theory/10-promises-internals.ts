import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m10",
  title: "Fase 3: Promises Internals: Wakers e Microtask Queue",
  enableInteractive: true,
  youtubeVideoId: "8aGhZQkoFbQ",
  quizId: "js-mq10",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          ⚙️ Por dentro das Promessas
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Promises não são mágicas; são objetos de estado geridos pela <button>Zend Engine</button> ou <button>V8</button>. No nível Master, entendemos como o motor utiliza a <strong>Microtask Queue</strong> para garantir que a resolução de uma Promise ocorra antes da próxima renderização da UI.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Os Três Estados e Reações</h3>
        <p class="text-sm leading-relaxed">
          Uma Promise é um objeto com um slot interno <code>[[PromiseState]]</code>. Quando o estado muda de <i>pending</i> para <i>fulfilled</i>, o motor agenda as <strong>Reações</strong> (os callbacks do .then) na fila de microtasks.
        </p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-primary text-xs mb-4 uppercase">A Ordem de Execução</h4>
           <pre><code class="language-javascript">
console.log("Start");

// Agenda na Microtask Queue (Alta Prioridade)
Promise.resolve().then(() => console.log("Microtask"));

// Agenda na Task Queue (Baixa Prioridade)
setTimeout(() => console.log("Macrotask"), 0);

console.log("End");

// 🏁 Resultado: Start -> End -> Microtask -> Macrotask
           </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Wakers e o Custo de Memória</h3>
        <p class="text-sm leading-relaxed">Sempre que usas <code>await</code>, o motor suspende a execução da função atual e cria um objeto de continuação. Se tiveres milhões de Promises pendentes sem estratégia de cancelamento (AbortController), corres o risco de causar pressão excessiva no <strong>Heap</strong>.</p>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Dica de Elite: Promise.all vs Promise.allSettled
        </h4>
        <p class="text-sm leading-relaxed">
          <code>Promise.all</code> falha se UMA falhar (Fail-fast). <code>allSettled</code> aguarda por todas, independentemente do sucesso ou erro. Em sistemas resilientes, preferimos a segunda para evitar estados parciais inconsistentes.
        </p>
      </section>
    </div>
  `,
};
