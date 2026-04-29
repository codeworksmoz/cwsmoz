import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "web-t10",
  title: "SVG: Gráficos Vetoriais e a Matemática Visual",
  youtubeVideoId: "u044iM9xsTM",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📐 O Poder dos Vetores
        </h2>
        <p class="text-lg leading-relaxed">
          Diferente de imagens comuns (JPG/PNG), o <strong>SVG</strong> (Scalable Vector Graphics) não é feito de pixels, mas de matemática. Ele é um documento <strong>XML</strong> que descreve formas, linhas e cores, garantindo que o seu gráfico seja nítido num telemóvel ou num ecrã de cinema.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Anatomia de um Elemento SVG</h3>
        <p>Um SVG vive diretamente no seu HTML. Ele possui um sistema de coordenadas próprio definido pelo <code>viewBox</code>.</p>
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm shadow-inner text-accent">
          &lt;svg <span class="text-primary">viewBox</span>="0 0 100 100" <span class="text-primary">width</span>="100"&gt;<br/>
          &nbsp;&nbsp;&lt;circle <span class="text-primary">cx</span>="50" <span class="text-primary">cy</span>="50" <span class="text-primary">r</span>="40" /&gt;<br/>
          &lt;/svg&gt;
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. As Formas Básicas</h3>
        <ul class="grid md:grid-cols-2 gap-4">
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">&lt;rect&gt;:</strong> Desenha retângulos e quadrados. <br/><span class="text-[10px] opacity-60">Atributos: x, y, width, height, rx (arredondamento).</span>
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">&lt;circle&gt;:</strong> Círculos perfeitos. <br/><span class="text-[10px] opacity-60">Atributos: cx, cy (centro) e r (raio).</span>
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">&lt;path&gt;:</strong> A ferramenta mais potente. Desenha qualquer forma complexa usando comandos de "caneta" (M=Move, L=Line, C=Curve).
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">&lt;g&gt;:</strong> Grupo. Serve para agrupar elementos e aplicar transformações a todos de uma vez.
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🎨 Estilização com CSS</h3>
          <p class="text-sm mb-4">Podes mudar a aparência do seu SVG usando CSS, o que permite animações interativas de elite:</p>
          <ul class="space-y-2 text-xs font-mono">
            <li><span class="text-accent">fill:</span> Muda a cor de fundo da forma.</li>
            <li><span class="text-accent">stroke:</span> Muda a cor da linha de contorno.</li>
            <li><span class="text-accent">stroke-width:</span> Define a espessura da linha.</li>
          </ul>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Vantagem Master: Acessibilidade
          </h4>
          <p class="text-sm leading-relaxed">
            Como o SVG é texto (XML), o Google consegue ler as palavras dentro dele e tecnologias assistivas podem descrever o gráfico se usares as tags <code>&lt;title&gt;</code> e <code>&lt;desc&gt;</code> corretamente. É o formato de imagem mais "amigo" da web.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "web-t10-quiz"
};
