import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m9",
  title: "Fase 2: Performance: Debouncing e Throttling de Elite",
  enableInteractive: true,
  youtubeVideoId: "v4cd1O4zkGw",
  quizId: "js-mq9",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          ⚡ Otimização de Eventos de Alta Frequência
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Eventos como <code>scroll</code>, <code>resize</code> ou <code>keypress</code> podem disparar centenas de vezes por segundo. Sem controle, isto causa o "Jank" (lentidão visual) e sobrecarrega APIs. No nível Master, utilizamos <strong>Debouncing</strong> e <strong>Throttling</strong> para ditar o ritmo de execução do motor.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Debouncing: O Silêncio Após a Tempestade</h3>
        <p class="text-sm leading-relaxed">
          O <strong>Debounce</strong> garante que uma função só será executada após o utilizador <strong>parar</strong> de realizar a ação por um determinado tempo. Ideal para campos de busca "type-ahead".
        </p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-javascript">
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// 🚀 Só dispara o pedido à API 500ms após o utilizador parar de digitar
const search = debounce((query) => fetchApi(query), 500);
           </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Throttling: O Batimento Cardíaco Constante</h3>
        <p class="text-sm leading-relaxed">O <strong>Throttle</strong> garante que a função execute no máximo uma vez a cada intervalo de tempo, independentemente de quantas vezes o evento ocorra. Ideal para monitorizar a posição do scroll.</p>

        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-javascript">
function throttle(fn, limit) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// 🚀 Mesmo que o utilizador mova o rato freneticamente, 
// a lógica só corre uma vez a cada 100ms.
window.addEventListener('mousemove', throttle(trackPosition, 100));
           </code></pre>
        </div>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Qual escolher?
        </h4>
        <ul class="text-sm space-y-3 opacity-90">
          <li>✅ <strong>Use Debounce:</strong> Quando o resultado final é o que importa (ex: validação de formulário, busca).</li>
          <li>✅ <strong>Use Throttle:</strong> Quando precisas de atualizações intermediárias constantes (ex: animações baseadas em scroll, redimensionamento de canvas).</li>
        </ul>
      </section>
    </div>
  `,
};
