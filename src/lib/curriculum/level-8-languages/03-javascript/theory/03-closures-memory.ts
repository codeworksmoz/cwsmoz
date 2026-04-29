import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m3",
  title: "Fase 1: Closures e Gestão de Memória Profunda",
  enableInteractive: true,
  youtubeVideoId: "8ME9u065vD4",
  quizId: "js-mq3",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📦 Memória Além do Escopo
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Uma <strong>Closure</strong> ocorre quando uma função "lembra" do ambiente em que foi criada, capturando variáveis que deveriam ter morrido. No nível Master, entendemos que isto não é apenas um truque de sintaxe, mas uma decisão de <strong>Alocação no Heap</strong> que impacta a performance.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Captura de Ambiente Léxico</h3>
        <p class="text-sm">Normalmente, variáveis na Stack são limpas quando a função termina. Mas se uma função interna referencia uma variável externa, o motor <button>V8</button> move essa variável para o <strong>Heap</strong> para que ela sobreviva.</p>
        <pre><code class="language-javascript">
function createCounter() {
  let count = 0; // Esta variável vive no Heap via Closure
  return () => ++count;
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
        </code></pre>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Memory Leaks e Closures Esquecidas</h3>
        <p class="text-sm leading-relaxed">O perigo ocorre quando closures capturam grandes objetos desnecessariamente. Como o Garbage Collector vê que a função ainda pode ser chamada, ele nunca liberta a memória desses objetos.</p>

        <div class="p-5 bg-red-500/5 border border-red-500/20 rounded-2xl shadow-inner">
           <h4 class="font-bold text-red-400 text-xs mb-2 uppercase">Antipattern de Memória</h4>
           <pre><code class="language-javascript">
function leak() {
  const massiveData = new Array(1000000).fill("❌");
  return () => console.log(massiveData.length);
}
// O array de 1M de itens nunca será limpo enquanto a função retornada existir!
           </code></pre>
        </div>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Encapsulamento de Verdade
        </h4>
        <p class="text-sm leading-relaxed">
          Antes dos campos privados (#) de classe, as closures eram a única forma de criar variáveis verdadeiramente privadas em JavaScript. No nível Master, usamos closures para criar <strong>Factories</strong> e <strong>Modules</strong> que escondem a complexidade interna.
        </p>
      </section>
    </div>
  `,
};
