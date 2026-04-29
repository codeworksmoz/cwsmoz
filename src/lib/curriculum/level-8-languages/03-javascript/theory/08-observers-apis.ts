import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m8",
  title: "Fase 2: Observers APIs: Mutation, Intersection e Resize",
  enableInteractive: true,
  youtubeVideoId: "dQw4w9WgXcQ",
  quizId: "js-mq8",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          👁️ Monitorização de Alta Performance
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Tradicionalmente, para saber se um elemento mudou ou entrou no ecrã, tínhamos de usar loops ou eventos de scroll que "matavam" a performance. As <strong>Observers APIs</strong> são o padrão de elite: elas permitem que o browser nos notifique apenas quando uma mudança específica ocorre, de forma assíncrona e eficiente.
        </p>
      </div>

      <!-- 1. MUTATION OBSERVER -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. MutationObserver: O Vigilante do DOM</h3>
        <p class="text-sm">O <code>MutationObserver</code> deteta mudanças na estrutura do HTML (nós adicionados, atributos alterados ou texto modificado). É a ferramenta certa para construir frameworks de reatividade ou monitorizar injeções de terceiros.</p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-javascript">
const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList') console.log('Nó adicionado!');
  });
});

// Configuração master: vigia atributos e filhos
observer.observe(document.body, { 
  childList: true, 
  attributes: true, 
  subtree: true 
});
           </code></pre>
        </div>
      </section>

      <!-- 2. INTERSECTION OBSERVER -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. IntersectionObserver: Lazy Everything</h3>
        <p class="text-sm leading-relaxed">Permite saber quando um elemento entra ou sai da área visível (Viewport). Vital para <strong>Lazy Loading</strong> de imagens, scroll infinito ou disparar animações de entrada.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Vantagem de Elite</h4>
             <p class="text-xs opacity-70 leading-relaxed">
               Ao contrário do evento 'scroll', o <code>IntersectionObserver</code> não corre na thread principal em cada pixel movido. Ele é otimizado pelo motor do browser para ser ultra-leve.
             </p>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">O Conceito de Threshold</h4>
             <p class="text-xs opacity-70 leading-relaxed">
               Podes definir uma percentagem (0.0 a 1.0). "Avisa-me apenas quando 50% do card estiver visível".
             </p>
          </div>
        </div>
        
        <pre><code class="language-javascript">
const io = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add('visible');
    io.unobserve(entries[0].target); // Para de observar após o efeito
  }
}, { threshold: 0.5 });

io.observe(document.querySelector('.hero-banner'));
        </code></pre>
      </section>

      <!-- 3. RESIZE OBSERVER -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. ResizeObserver: Layouts Adaptáveis</h3>
        <p class="text-sm leading-relaxed">
          Monitoriza mudanças no tamanho físico de um elemento, não da janela toda. É o complemento perfeito para as <strong>Container Queries</strong> do CSS, permitindo lógica JS baseada no tamanho real do componente.
        </p>
        
        <pre><code class="language-javascript">
const ro = new ResizeObserver(entries => {
  for (let entry of entries) {
    const { width } = entry.contentRect;
    console.log(\`Largura do componente: \${width}px\`);
  }
});

ro.observe(document.getElementById('chart-container'));
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Arquiteto Master</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Nunca use <code>setInterval</code> ou eventos de scroll para monitorizar o DOM. Os Observadores são o seu radar de baixo nível: silenciosos, precisos e amigos da CPU do seu utilizador."
        </p>
      </section>
    </div>
  `
};
