import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m10",
  title: "Fase 3: Animações de Alta Performance: O Papel do Compositor",
  enableInteractive: true,
  youtubeVideoId: "jV8B24w82CU",
  quizId: "css-mq10",
  content: `<div class="space-y-12">
      <div class="bg-red-500/5 p-8 rounded-[2.5rem] border border-red-500/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-red-400 flex items-center gap-3">
          🏎️ Mantendo os 60 FPS
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Nem todas as animações CSS são iguais. Animar as propriedades erradas causa "Jank" (soluços visuais) porque obriga o browser a recalcular o layout de toda a página (Reflow). O Engenheiro Master anima apenas o que é processado pela <strong>GPU</strong>.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-red-500/20 pb-2 text-accent">1. O Pipeline de Renderização</h3>
        <p class="text-sm">O browser executa três etapas: Layout -> Paint -> Composite. Propriedades como <code>width</code> e <code>top</code> disparam o Layout (caro). <code>transform</code> e <code>opacity</code> disparam apenas o Composite (barato).</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-red-900/20 border border-red-500/30 rounded-xl">
             <h4 class="font-bold text-red-400 text-xs mb-2">Evite Animar (CPU Bound)</h4>
             <ul class="text-[10px] space-y-1 opacity-70">
               <li>width / height</li>
               <li>top / left / margin</li>
               <li>font-size</li>
             </ul>
          </div>
          <div class="p-4 bg-green-900/20 border border-green-500/30 rounded-xl">
             <h4 class="font-bold text-green-400 text-xs mb-2">Anime Sempre (GPU Bound)</h4>
             <ul class="text-[10px] space-y-1">
               <li>transform: translate()</li>
               <li>transform: scale()</li>
               <li>opacity</li>
             </ul>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-red-500/20 pb-2 text-accent">2. will-change: O Aviso Prévio</h3>
        <p class="text-sm leading-relaxed">
          A propriedade <code>will-change</code> avisa o browser para criar uma nova camada (layer) na GPU para o elemento. Use com cautela apenas em elementos que realmente terão animações complexas.
        </p>
      </section>
    </div>`
};