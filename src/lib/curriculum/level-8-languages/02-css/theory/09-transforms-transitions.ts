
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m9",
  title: "Fase 3: Transições e Transformações de Hardware",
  enableInteractive: true,
  quizId: "css-mq9",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          ✨ Movimento de Baixo Nível
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Animações de elite não são processadas pelo CPU, mas pela <strong>GPU</strong> (Placa Gráfica). Para atingir 60 FPS estáveis, um Engenheiro Master foca em transformar o que o utilizador não sente: a latência de renderização.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Propriedades Aceleradas (Composite)</h3>
        <p class="text-sm">O browser possui três estágios: Layout, Paint e Composite. Animar <code>width</code> ou <code>margin</code> dispara o Layout (lento). Animar <code>transform</code> dispara apenas o Composite (ultra-rápido).</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
             <h4 class="font-bold text-red-400 text-xs mb-1">Evite Animar ❌</h4>
             <p class="text-[10px] opacity-70">width, height, top, left, font-size.</p>
          </div>
          <div class="p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
             <h4 class="font-bold text-green-400 text-xs mb-1">Anime Sempre ✅</h4>
             <p class="text-[10px] opacity-70">transform (translate, scale, rotate), opacity.</p>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Funções de Timing (Easing)</h3>
        <p class="text-sm">O movimento na natureza não é linear. Use <code>cubic-bezier</code> para criar sensações de física real, como gravidade ou inércia.</p>
        <pre><code class="language-css">
.btn {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.btn:hover {
  transform: scale(1.05);
}
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🚀 Dica de Performance</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Utilize <code>will-change: transform;</code> em elementos que terão animações complexas. Isto avisa o browser para preparar a GPU antecipadamente, eliminando o 'jank' inicial."
        </p>
      </section>
    </div>
  `
};
