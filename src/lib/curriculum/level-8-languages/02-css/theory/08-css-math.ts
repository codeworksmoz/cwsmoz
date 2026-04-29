import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m8",
  title: "Fase 2: CSS Math: clamp(), min(), max() e calc()",
  enableInteractive: true,
  youtubeVideoId: "8ME9u065vD4",
  quizId: "css-mq8",
  content: `<div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🧮 Lógica de Design Programática
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          As funções matemáticas nativas do CSS eliminam a necessidade de JavaScript para cálculos de layout simples, permitindo interfaces fluidas que se adaptam a qualquer ecrã com performance de silício puro.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. clamp(): A Régua da Tipografia Fluida</h3>
        <p class="text-sm leading-relaxed">O <code>clamp(min, ideal, max)</code> é a ferramenta definitiva para fontes e paddings. Ele garante que um valor nunca ultrapasse os limites de segurança.</p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-css">
h1 {
  /* Mínimo: 1.5rem | Ideal: 5% da tela + 1rem | Máximo: 4rem */
  font-size: clamp(1.5rem, 5vw + 1rem, 4rem);
}
           </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. min() e max() para Layouts Adaptáveis</h3>
        <p class="text-sm leading-relaxed">Úteis para definir larguras que devem respeitar limites físicos e percentuais simultaneamente.</p>
        <pre><code class="language-css">
.container {
  /* Largura é 90% da tela, mas nunca mais de 1200px */
  width: min(90%, 1200px);
  
  /* Margem é 2rem, mas nunca menos de 10px */
  margin-top: max(2rem, 10px);
}
        </code></pre>
      </section>
    </div>`
};