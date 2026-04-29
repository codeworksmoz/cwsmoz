import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m9",
  title: "Fase 3: Variable Fonts & Typography Performance",
  enableInteractive: true,
  youtubeVideoId: "u044iM9xsTM",
  quizId: "css-mq9",
  content: `<div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🖋️ Tipografia Infinita num Único Ficheiro
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          <strong>Variable Fonts</strong> representam a maior evolução no texto digital desde o TrueType. Em vez de descarregares 10 ficheiros para pesos diferentes (Light, Bold, Black), descarregas apenas um ficheiro mestre que permite o ajuste granular de múltiplos eixos em tempo de execução.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Os Eixos de Variação (Axes)</h3>
        <p class="text-sm">A propriedade <code>font-variation-settings</code> permite manipular os eixos da fonte com precisão absoluta.</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li class="p-4 bg-muted/20 border border-white/5 rounded-xl">
             <strong class="text-primary">"wght" (Weight):</strong> Peso da fonte (ex: 100 a 900).
          </li>
          <li class="p-4 bg-muted/20 border border-white/5 rounded-xl">
             <strong class="text-primary">"wdth" (Width):</strong> Largura dos caracteres.
          </li>
          <li class="p-4 bg-muted/20 border border-white/5 rounded-xl">
             <strong class="text-primary">"ital" (Italic):</strong> Grau de inclinação.
          </li>
        </ul>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Performance e o Fim do FOIT</h3>
        <p class="text-sm leading-relaxed">
          O <strong>FOIT (Flash of Invisible Text)</strong> ocorre quando o browser espera pelo download de múltiplas fontes. Com Variable Fonts, o número de pedidos HTTP cai drasticamente, economizando até 70% de largura de banda tipográfica.
        </p>
        <pre><code class="language-css">
@font-face {
  font-family: 'EliteVariable';
  src: url('font.woff2') format('woff2-variations');
  font-weight: 100 900;
}

h1 {
  font-family: 'EliteVariable';
  font-variation-settings: "wght" 650, "wdth" 85;
}
        </code></pre>
      </section>
    </div>`
};