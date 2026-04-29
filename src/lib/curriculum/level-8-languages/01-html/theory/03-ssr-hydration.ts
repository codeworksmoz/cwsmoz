
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m4",
  title: "SSR, SSG e a Hidratação do DOM: Estratégias de Renderização",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-primary font-headline">
          🚀 A Jornada do Documento
        </h2>
        <p class="text-lg leading-relaxed">
          Para um Engenheiro Master, escolher a estratégia de renderização é uma decisão de <strong>infraestrutura</strong>. O objetivo é equilibrar o <i>Time to First Byte</i> (TTFB) com a interatividade da página.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <div class="p-6 bg-card border rounded-2xl shadow-lg border-primary/20">
          <h3 class="text-lg font-bold font-headline text-accent mb-3">SSR (Server-Side)</h3>
          <p class="text-xs text-muted-foreground leading-relaxed">O HTML é gerado no servidor no momento do pedido. Ideal para dados altamente dinâmicos (e-commerce, feeds sociais).</p>
          <div class="bg-black/20 p-2 mt-4 rounded font-code text-[9px] text-accent">Status: Dinâmico | Custo: CPU do Servidor</div>
        </div>
        <div class="p-6 bg-card border rounded-2xl shadow-lg border-green-500/20">
          <h3 class="text-lg font-bold font-headline text-green-400 mb-3">SSG (Static Generation)</h3>
          <p class="text-xs text-muted-foreground leading-relaxed">HTML gerado durante o build. Servido via CDN com latência zero. Padrão ouro para SEO e velocidade.</p>
          <div class="bg-black/20 p-2 mt-4 rounded font-code text-[9px] text-green-400">Status: Instantâneo | Custo: Armazenamento</div>
        </div>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline text-primary border-b border-white/5 pb-2">O Processo de Hidratação (Hydration)</h3>
        <p>A hidratação acontece no cliente. O browser descarrega o HTML estático (para veres o site rápido), e depois o JavaScript "anexa-se" aos elementos para torná-los vivos (clicáveis).</p>
        
        <div class="bg-red-500/5 p-5 rounded-xl border border-red-500/20">
          <h4 class="font-bold text-red-400 mb-2 italic">⚠️ O Custo da Hidratação:</h4>
          <p class="text-sm">Se o JavaScript for massivo, ocorre o <strong>"TBT" (Total Blocking Time)</strong>. O utilizador vê o botão, tenta clicar, mas nada acontece porque o JS ainda está a "hidratar" o DOM. No nível Master, usamos <i>Streaming SSR</i> ou <i>Selective Hydration</i> para mitigar isto.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq4"
};
