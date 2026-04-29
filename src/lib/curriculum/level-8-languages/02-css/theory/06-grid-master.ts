import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m6",
  title: "Fase 2: Grid & Subgrid Master: Alinhamento Multi-nível",
  enableInteractive: true,
  youtubeVideoId: "jV8B24w82CU",
  quizId: "css-mq6",
  content: `<div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🏁 A Orquestração Bidimensional
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Enquanto o Flexbox brilha em uma única dimensão, o <strong>CSS Grid</strong> é o motor de layout bidimensional definitivo. Ele permite controlar linhas e colunas simultaneamente, permitindo designs que antes eram impossíveis sem hacks complexos. No nível Master, evoluímos para o <strong>Subgrid</strong>, permitindo alinhamento perfeito entre containers diferentes.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Unidades Fracionárias (fr) e repeat()</h3>
        <p class="text-sm">A unidade <code>fr</code> representa uma fração do espaço livre. É o segredo para layouts que se adaptam sem quebras.</p>
        
        <div class="space-y-4">
           <pre><code class="language-html">
&lt;style&gt;
  .grid-system {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
&lt;/style&gt;
           </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. O Poder do Subgrid</h3>
        <p class="text-sm leading-relaxed">
          O <code>subgrid</code> permite que um elemento filho "partilhe" as linhas e colunas do grid do elemento pai. Isto resolve o problema clássico de alinhar cabeçalhos de cards vizinhos que têm quantidades de texto diferentes.
        </p>

        <div class="space-y-4">
           <pre><code class="language-css">
.parent-grid {
  display: grid;
  grid-template-rows: auto auto auto; /* Header, Body, Footer */
}

.card {
  grid-row: span 3;
  display: grid;
  grid-template-rows: subgrid;
}
           </code></pre>
        </div>
      </section>
    </div>`
};