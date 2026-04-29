import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m3",
  title: "Fase 1: Custom Properties e Design Tokens",
  enableInteractive: true,
  youtubeVideoId: "v4cd1O4zkGw",
  quizId: "css-mq3",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🎨 Variáveis Vivas no DOM
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          As <strong>Custom Properties</strong> (--variável) transformaram o CSS numa linguagem dinâmica. Diferente de variáveis de SASS que são estáticas, estas respeitam a cascata, a herança e podem ser alteradas via JavaScript em tempo real. Elas são a base dos <strong>Design Tokens</strong> modernos.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Escopo Global (:root)</h3>
        <p class="text-sm">Definimos tokens globais no seletor <code>:root</code>. Isto garante que as cores, fontes e espaçamentos sejam consistentes em todo o projeto.</p>
        
        <div class="space-y-4">
           <pre><code class="language-css">
:root {
  --primary-color: #3b82f6;
  --spacing-unit: 8px;
  --base-font-size: 16px;
}

.button {
  background-color: var(--primary-color);
  padding: var(--spacing-unit) calc(var(--spacing-unit) * 2);
}
           </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Temas Dinâmicos e Redefinição</h3>
        <p class="text-sm leading-relaxed">Podes redefinir uma variável para um bloco específico ou para um modo escuro (Dark Mode) de forma extremamente elegante.</p>

        <div class="space-y-4">
           <pre><code class="language-css">
/* Tema Padrão */
.card {
  --bg-surface: #ffffff;
  --text-main: #1e293b;
  background: var(--bg-surface);
  color: var(--text-main);
}

/* Tema Dark: Basta mudar o valor das variáveis! */
.card.dark {
  --bg-surface: #0f172a;
  --text-main: #f8fafc;
}
           </code></pre>
        </div>
      </section>
    </div>
  `,
};