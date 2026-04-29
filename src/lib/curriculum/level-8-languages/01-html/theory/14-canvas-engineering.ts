import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m14",
  title: "Fase 3: Canvas API: Renderização Gráfica 2D e Immediate Mode",
  enableInteractive: true,
  youtubeVideoId: "dQw4w9WgXcQ",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🖌️ Engenharia Gráfica no Browser
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O elemento <code>&lt;canvas&gt;</code> não é um componente DOM comum; é uma superfície de desenho de baixo nível. Diferente do SVG (vetorial), o Canvas opera em <strong>Immediate Mode</strong>: o browser não guarda a lista de objetos desenhados, ele apenas manipula pixels na memória. No nível Master, isto permite renderizar milhares de partículas a 60 FPS.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Contexto de Renderização</h3>
        <p class="text-sm">Para desenhar, precisamos obter o contexto. O objeto <code>ctx</code> é a sua caixa de ferramentas que contém todos os métodos de pintura.</p>
        
        <div class="space-y-4">
           <pre><code class="language-html">
&lt;canvas id="master-canvas" width="400" height="200" style="border:1px solid #ccc; border-radius:12px;"&gt;&lt;/canvas&gt;

&lt;script&gt;
  const canvas = document.querySelector('#master-canvas');
  const ctx = canvas.getContext('2d');

  // Desenhar um retângulo preenchido
  ctx.fillStyle = '#3b82f6';
  ctx.fillRect(50, 50, 150, 100);

  // Desenhar apenas o contorno
  ctx.strokeStyle = '#ef4444';
  ctx.lineWidth = 5;
  ctx.strokeRect(250, 50, 100, 100);
&lt;/script&gt;
           </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Caminhos (Paths) e Lógica Complexa</h3>
        <p class="text-sm leading-relaxed">Formas que não são retângulos são construídas através de caminhos. É um processo de "caneta virtual": inicias o caminho, moves a caneta e fechas a forma.</p>

        <div class="space-y-4">
           <pre><code class="language-javascript">
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.lineTo(150, 25);
ctx.closePath(); // Volta ao início
ctx.fillStyle = 'green';
ctx.fill();
           </code></pre>
        </div>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Animação com requestAnimationFrame
        </h4>
        <p class="text-sm leading-relaxed">
          Para criar movimento suave, nunca uses <code>setInterval</code>. O <button>requestAnimationFrame</button> sincroniza o seu desenho com a taxa de atualização do monitor, garantindo fluidez e poupando CPU.
        </p>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Arquiteto Gráfico</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Canvas é sobre controle absoluto dos pixels. Use-o para visualização de dados massivos, jogos e filtros de imagem complexos. Lembre-se: como não há objetos no DOM, o SEO e a acessibilidade devem ser tratados manualmente via fallback text."
        </p>
      </section>
    </div>
  `
};
