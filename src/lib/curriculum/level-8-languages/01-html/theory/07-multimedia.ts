
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m7",
  title: "Multimédia Master: Canvas, Áudio e Vídeo Avançado",
  content: `
    <div class="space-y-8">
      <div class="bg-purple-500/10 p-6 rounded-2xl border border-purple-500/20">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 font-headline">
          🎨 Manipulação de Pixels e Sinais
        </h2>
        <p class="text-lg">Multimédia Master não é apenas carregar ficheiros. É sobre renderização programática no Canvas e processamento de sinal via Web Audio API.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">Canvas 2D: O Motor Gráfico</h3>
        <p>O <code>&lt;canvas&gt;</code> é uma superfície de desenho manipulada via JavaScript. É 100x mais performático que o DOM para animar milhares de objetos.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-[11px] text-accent">
          const ctx = canvas.getContext('2d');<br/>
          ctx.fillStyle = 'blue';<br/>
          ctx.fillRect(10, 10, 100, 100);
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">WebVTT: Acessibilidade Multimedia</h3>
        <p>Para vídeos profissionais, as legendas devem ser ficheiros externos <code>.vtt</code>. Isto permite que o Google indexe o conteúdo falado do seu vídeo e que utilizadores mudem o tamanho da letra.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
          <span class="text-primary">&lt;track</span> <span class="text-accent">kind</span>=<span class="text-green-400">"captions"</span> <span class="text-accent">src</span>=<span class="text-green-400">"subs.vtt"</span> <span class="text-accent">srclang</span>=<span class="text-green-400">"pt"</span><span class="text-primary">&gt;</span>
        </div>

        <h3 class="text-xl font-bold font-headline text-primary">Web Audio API</h3>
        <p>Esqueça a tag <code>&lt;audio&gt;</code> básica. A Web Audio permite criar sintetizadores, filtros de reverberação e processamento espacial 3D em tempo real diretamente no browser.</p>
      </div>
    </div>
  `,
  quizId: "html-mq7"
};
