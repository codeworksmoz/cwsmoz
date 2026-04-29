
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m8",
  title: "Performance: Resource Hints e o Caminho Crítico",
  content: `
    <div class="space-y-8">
      <div class="bg-green-500/10 p-6 rounded-2xl border border-green-500/20 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 font-headline">
          ⚡ Velocidade de Silício
        </h2>
        <p class="text-lg">O HTML Master controla a ordem de descarregamento do browser. Pequenas diretivas no <code>&lt;head&gt;</code> podem reduzir o tempo de carregamento em segundos.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline text-primary border-b border-white/5 pb-2">Resource Hints: Antecipando o Futuro</h3>
        <ul class="space-y-4">
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong class="text-accent">Preconnect:</strong> Resolve o DNS e faz o aperto de mão TCP/TLS antes do utilizador precisar do recurso (ex: fontes ou APIs).
            <br/><code class="text-[10px] text-green-400">&lt;link rel="preconnect" href="https://api.exemplo.com"&gt;</code>
          </li>
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong class="text-accent">Preload:</strong> Força o download de um recurso crítico que o browser ainda não detetou (ex: uma fonte pesada ou imagem de banner).
            <br/><code class="text-[10px] text-green-400">&lt;link rel="preload" href="hero.webp" as="image"&gt;</code>
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline text-primary">Native Lazy Loading</h3>
        <p>Nunca descarregue imagens que o utilizador não está a ver. O atributo <code>loading="lazy"</code> é agora um standard nativo que poupa dados e memória.</p>
        
        <h3 class="text-xl font-bold font-headline text-primary">Fetch Priority (Novidade 2024)</h3>
        <p>Diga ao browser qual imagem é a mais importante de todas (o LCP). Isto altera o algoritmo de agendamento de rede do Chrome/Firefox.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
          <span class="text-primary">&lt;img</span> <span class="text-accent">src</span>=<span class="text-green-400">"banner.jpg"</span> <span class="text-accent">fetchpriority</span>=<span class="text-green-400">"high"</span><span class="text-primary">&gt;</span>
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq8"
};
