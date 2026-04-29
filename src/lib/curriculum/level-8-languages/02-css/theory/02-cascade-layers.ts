import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m2",
  title: "Fase 1: Cascade Layers (@layer) e a Nova Ordem",
  enableInteractive: true,
  youtubeVideoId: "jV8B24w82CU",
  quizId: "css-mq2",
  content: `<div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🧱 Domando a Fera da Especificidade
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          As <strong>Cascade Layers (@layer)</strong> permitem que o Engenheiro Master organize o CSS em níveis de importância, garantindo que estilos de componentes específicos nunca sejam sobrescritos por estilos de base, independentemente da força do seletor.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Contrato de Precedência</h3>
        <p class="text-sm leading-relaxed">
          A prioridade das camadas é definida pela <strong>ordem em que aparecem no ficheiro</strong> pela primeira vez. A última camada declarada é a mais forte.
        </p>
        
        <div class="space-y-4">
           <pre><code class="language-css">
/* 1. Definimos a hierarquia no topo */
@layer reset, base, components, utilities;

@layer components {
  /* Este seletor simples ganha de seletores complexos da camada base */
  .btn { background: #3b82f6; }
}

@layer base {
  button { background: gray; margin: 20px; }
}
           </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Estilos Fora de Camadas (Unlayered)</h3>
        <p class="text-sm leading-relaxed">
          Regra de Ouro: <strong>Estilos escritos fora de qualquer @layer sempre ganham de estilos dentro de camadas.</strong> Isto garante que resets antigos ou estilos globais de emergência continuem a funcionar conforme o esperado.
        </p>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner text-center">
        <h4 class="text-xl font-bold text-indigo-400 mb-4">🚀 Modularidade Extrema</h4>
        <p class="text-sm leading-relaxed max-w-2xl mx-auto">
          "As @layer permitem que você integre frameworks externos como se fossem caixas pretas de baixa prioridade, protegendo a sua lógica customizada sem nunca precisar de recorrer ao <code>!important</code>."
        </p>
      </section>
    </div>`
};