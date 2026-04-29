import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m5",
  title: "Fase 2: Advanced Async: AbortController e Sinais",
  enableInteractive: true,
  youtubeVideoId: "8aGhZQkoFbQ",
  quizId: "js-mq5",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🛑 Parando o Imparável
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Tradicionalmente, uma <code>Promise</code> não pode ser cancelada após ser disparada. O <strong>AbortController</strong> mudou isto, fornecendo um padrão universal para cancelar operações assíncronas (Fetch, Eventos, Streams). No nível Master, entendemos que o cancelamento é vital para evitar <strong>Memory Leaks</strong> e economizar recursos do utilizador em SPAs de alta escala.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Ciclo do AbortController</h3>
        <p class="text-sm leading-relaxed">
          O controlador emite um sinal (<button>AbortSignal</button>). Qualquer API compatível que receba este sinal irá monitorizar o seu estado. Quando o método <button>abort()</button> é chamado, a operação é interrompida imediatamente.
        </p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-primary text-xs mb-4 uppercase">Exemplo: Cancelamento de Fetch</h4>
           <pre><code class="language-javascript">
const controller = new AbortController();
const { signal } = controller;

async function downloadData() {
  try {
    const response = await fetch('/api/heavy-data', { signal });
    const data = await response.json();
    return data;
  } catch (err) {
    if (err.name === 'AbortError') {
      console.log('Fase 2: Pedido cancelado pelo utilizador.');
    } else {
      console.error('Erro de rede real:', err);
    }
  }
}

// 🛑 Aborta o pedido se demorar mais de 2 segundos
setTimeout(() => controller.abort(), 2000);
           </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. AbortSignal.timeout()</h3>
        <p class="text-sm leading-relaxed">No JavaScript moderno (ES2022+), não precisas de criar um controlador manual apenas para limites de tempo. O método estático <code>timeout()</code> retorna um sinal que se auto-aborta.</p>

        <div class="space-y-4">
           <pre><code class="language-javascript">
// Abre o pedido com timeout nativo de 5 segundos
fetch(url, { signal: AbortSignal.timeout(5000) });
           </code></pre>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Removendo Event Listeners Automaticamente</h3>
        <p class="text-sm leading-relaxed">
          Um dos maiores geradores de Memory Leaks é esquecer de chamar <code>removeEventListener</code>. O <code>AbortSignal</code> resolve isto permitindo limpar múltiplos ouvintes com um único comando.
        </p>
        
        <pre><code class="language-javascript">
const controller = new AbortController();

window.addEventListener('resize', onResize, { signal: controller.signal });
window.addEventListener('scroll', onScroll, { signal: controller.signal });

// ✅ Limpa AMBOS os eventos de uma vez:
controller.abort();
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Visão do Engenheiro Master</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Em aplicações de elite, o cancelamento não é uma opção, é um requisito. Sempre que o utilizador navega para fora de uma página ou fecha um modal, todos os pedidos pendentes devem ser abortados. Isto é o que diferencia um site 'pesado' de uma interface que responde instantaneamente."
        </p>
      </section>
    </div>
  `
};
