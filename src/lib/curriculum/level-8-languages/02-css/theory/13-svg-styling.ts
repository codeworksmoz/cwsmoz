import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m13",
  title: "SVG Styling & Path Animation",
  content: `
    <div class="space-y-8">
      <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/10">
        <h2 class="text-2xl font-bold mb-4 font-headline text-green-400">📐 Estilizando Vetores com CSS</h2>
        <p class="text-lg leading-relaxed">SVGs são XML, o que significa que o CSS pode manipular os seus atributos internos (como <code>fill</code> e <code>stroke</code>) diretamente, permitindo animações orgânicas impossíveis com imagens raster.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">O Truque do Dash Offset</h3>
        <p>A técnica mais comum para criar o efeito de "desenho manual" é manipular as propriedades <code>stroke-dasharray</code> e <code>stroke-dashoffset</code>.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs text-accent">
          path { <br/>
          &nbsp;&nbsp;<span class="text-primary">stroke-dasharray</span>: 1000; <br/>
          &nbsp;&nbsp;<span class="text-primary">stroke-dashoffset</span>: 1000; <br/>
          &nbsp;&nbsp;<span class="text-primary">animation</span>: draw 2s forwards; <br/>
          } <br/><br/>
          @keyframes draw { to { stroke-dashoffset: 0; } }
        </div>

        <h3 class="text-xl font-bold font-headline">CurrentColor</h3>
        <p>Use <code>fill: currentColor</code> no seu SVG. Isto permite que o ícone herde a cor do texto do elemento pai automaticamente, facilitando temas Dark/Light sem duplicar código.</p>
      </div>
    </div>
  `,
  quizId: "css-mq13"
};
