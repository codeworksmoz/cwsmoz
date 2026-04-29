import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m6",
  title: "Fase 2: JavaScript Modules (ESM) & Tree Shaking",
  enableInteractive: true,
  youtubeVideoId: "v4cd1O4zkGw",
  quizId: "js-mq6",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📦 Modularização Estática e Performance
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Os <strong>ES Modules (ESM)</strong> são o padrão oficial do JavaScript para organizar código. Ao contrário do CommonJS (require), o ESM é <strong>estático</strong>: o compilador sabe o que será importado antes mesmo de rodar o código. No nível Master, utilizamos esta propriedade para atingir o <strong>Tree Shaking</strong> agressivo, reduzindo o bundle de produção ao mínimo necessário.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Poder do Tree Shaking</h3>
        <p class="text-sm leading-relaxed">
          Tree Shaking é o processo de eliminar "código morto". Se importas apenas uma função de uma biblioteca gigante, o bundler (Vite, Webpack) remove todas as outras funções que não estão a ser usadas.
        </p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-primary text-xs mb-4 uppercase">Exemplo de Otimização</h4>
           <pre><code class="language-javascript">
// math_utils.js
export const add = (a, b) => a + b;
export const heavyUnusedLogic = () => { /* 100kb de código */ };

// main.js
import { add } from './math_utils.js';

// 🚀 O 'heavyUnusedLogic' será removido do bundle final de produção!
           </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Importação Dinâmica (Code Splitting)</h3>
        <p class="text-sm leading-relaxed">Para funcionalidades que o utilizador raramente usa (ex: um editor de imagem ou um dashboard administrativo), não deves carregar o código no início. Usamos <code>import()</code> dinâmico para carregar o módulo sob demanda.</p>

        <pre><code class="language-javascript">
button.addEventListener('click', async () => {
    // ⚡ O download do módulo só acontece agora!
    const { renderChart } = await import('./charts.js');
    renderChart();
});
        </code></pre>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Side Effects e Pureza de Módulo
        </h4>
        <p class="text-sm leading-relaxed">
          O Tree Shaking pode falhar se o seu módulo tiver "efeitos secundários" (ex: mudar uma variável global ao ser importado). Um Engenheiro Master desenha módulos <strong>Side-Effect Free</strong>, permitindo que o compilador os remova com segurança total se não houver referências.
        </p>
      </section>
    </div>
  `
};
