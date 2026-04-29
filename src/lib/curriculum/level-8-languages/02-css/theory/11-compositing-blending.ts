import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m11",
  title: "Fase 3: Compositing & Blending Modes: Arte no Browser",
  enableInteractive: true,
  youtubeVideoId: "v4cd1O4zkGw",
  quizId: "css-mq11",
  content: `<div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🎨 Photoshop Nativo no CSS
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Modos de mesclagem (Blending Modes) definem como as cores de um elemento interagem com o que está por baixo dele no ecrã. Isto permite criar efeitos visuais complexos e texturas dinâmicas sem carregar imagens pesadas.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. mix-blend-mode vs. background-blend-mode</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary block">mix-blend-mode:</strong> Mistura o elemento atual com o seu fundo (background do elemento pai).
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary block">background-blend-mode:</strong> Mistura várias camadas de fundo do próprio elemento.
          </li>
        </ul>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Modos de Mistura Industriais</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 bg-card border rounded-xl shadow-lg">
            <h4 class="font-bold text-accent mb-2">multiply</h4>
            <p class="text-[10px] opacity-70">Multiplica as cores. O resultado é sempre mais escuro.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl shadow-lg">
            <h4 class="font-bold text-accent mb-2">screen</h4>
            <p class="text-[10px] opacity-70">Oposto do multiply. O resultado é sempre mais claro.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl shadow-lg">
            <h4 class="font-bold text-accent mb-2">overlay</h4>
            <p class="text-[10px] opacity-70">Mistura complexa que preserva luzes e sombras.</p>
          </div>
        </div>
      </section>
    </div>`
};