import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m18",
  title: "Fase 4: Custom Events e Comunicação Desacoplada",
  enableInteractive: true,
  youtubeVideoId: "mNst8vX-u8E",
  quizId: "js-mq18",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📡 O Diálogo entre Componentes
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Num sistema de alta escala, os componentes não devem conhecer os detalhes uns dos outros. Utilizamos <strong>Custom Events</strong> para criar uma arquitetura <strong>Event-Driven</strong> no browser, onde o emissor apenas "anuncia" um fato e os interessados reagem de forma independente.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Disparando Sinais com Payload</h3>
        <p class="text-sm">O segredo está no objeto <code>detail</code>, que permite transportar qualquer dado (objetos, arrays, números) dentro do evento.</p>
        
        <pre><code class="language-javascript">
const loginEvent = new CustomEvent('cwm:login', {
  detail: { userId: 101, role: 'admin' },
  bubbles: true,
  composed: true
});

window.dispatchEvent(loginEvent);
        </code></pre>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Porquê usar Custom Events?
        </h4>
        <ul class="text-sm space-y-2 opacity-90">
          <li>✅ <strong>Desacoplamento Total:</strong> O botão de 'Comprar' não precisa de saber que o carrinho existe.</li>
          <li>✅ <strong>Extensibilidade:</strong> Podes adicionar um logger de métricas apenas ouvindo o evento, sem mexer no código original.</li>
          <li>✅ <strong>Interoperabilidade:</strong> Permite que um componente em React fale com um componente em Vanilla JS ou Web Components.</li>
        </ul>
      </section>
    </div>
  `
};
