import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m16",
  title: "Fase 3: Shadow DOM: Encapsulamento e Isolamento de Estilos",
  enableInteractive: true,
  quizId: "html-mq16",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🌑 O Escudo do Componente
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>Shadow DOM</strong> é o mecanismo que permite ao browser anexar uma árvore de elementos isolada a um elemento comum (Shadow Host). Esta árvore "escondida" possui o seu próprio escopo de IDs e estilos, garantindo que o seu componente seja resiliente e imune a conflitos com o resto do site.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Light DOM vs. Shadow DOM</h3>
        <p class="text-sm">Todo o elemento que vês no HTML normal pertence ao <strong>Light DOM</strong>. O Shadow DOM vive num universo paralelo, invisível para seletores globais como <code>document.querySelector('*')</code>.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <h4 class="font-bold text-primary mb-2 text-xs">Light DOM</h4>
            <ul class="text-[10px] space-y-1 opacity-70">
              <li>Acessível por qualquer script.</li>
              <li>Estilizado pelo CSS global do site.</li>
            </ul>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <h4 class="font-bold text-primary mb-2 text-xs">Shadow DOM</h4>
            <ul class="text-[10px] space-y-1">
              <li>Encapsulado e privado.</li>
              <li>Estilos internos não "vazam" para fora.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Criando o Shadow Root: Open vs. Closed</h3>
        <p class="text-sm leading-relaxed">Para criar uma sombra, usamos o método <code>attachShadow()</code>. A decisão do modo (mode) dita o nível de segurança do seu componente.</p>

        <div class="space-y-4">
           <pre><code class="language-javascript">
const host = document.querySelector('#host-element');
const shadow = host.attachShadow({ mode: 'open' });

shadow.innerHTML = \`
  <style> p { color: #3b82f6; font-weight: bold; } </style>
  <p>Eu sou um parágrafo isolado e protegido!</p>
\`;
           </code></pre>
        </div>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 O Fim do Conflito de IDs
        </h4>
        <p class="text-sm leading-relaxed">
          Dentro de um Shadow DOM, podes usar IDs genéricos como <code>id="header"</code> ou <code>id="submit"</code> sem medo de que existam duplicados na página principal. O browser trata cada sombra como um espaço de nomes (namespace) isolado.
        </p>
      </section>
    </div>
  `,
};
