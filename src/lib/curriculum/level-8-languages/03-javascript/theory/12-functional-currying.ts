import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m12",
  title: "Fase 3: Programação Funcional: Currying e Composição",
  enableInteractive: true,
  youtubeVideoId: "mNst8vX-u8E",
  quizId: "js-mq12",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          λ A Elegância da Lógica Funcional
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          A Programação Funcional no JavaScript Master não é sobre usar <code>map()</code>; é sobre a <strong>Componibilidade de Lógica</strong>. Ao transformar funções complexas em sequências de funções simples, criamos sistemas imunes a efeitos colaterais e fáceis de testar.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Currying: Funções de Argumento Único</h3>
        <p class="text-sm leading-relaxed">
          Currying é o processo de transformar uma função que recebe <code>n</code> argumentos numa série de <code>n</code> funções que recebem apenas um argumento cada.
        </p>
        <pre><code class="language-javascript">
// Função Tradicional
const add = (a, b) => a + b;

// Versão Curried
const addCurried = a => b => a + b;

const add5 = addCurried(5);
console.log(add5(10)); // 15
        </code></pre>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Composição (Pipe Pattern)</h3>
        <p class="text-sm leading-relaxed">A composição permite-te criar pipelines de processamento de dados legíveis, onde o output de uma função é o input da próxima.</p>
        <pre><code class="language-javascript">
const trim = s => s.trim();
const capitalize = s => s.toUpperCase();
const exclaim = s => \`\${s}!\`;

// ⛓️ Composição Master
const transform = s => exclaim(capitalize(trim(s)));

console.log(transform("  codworks  ")); // "CODWORKS!"
        </code></pre>
      </section>
    </div>
  `,
};
