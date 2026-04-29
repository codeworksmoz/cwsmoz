import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m1",
  title: "Fase 1: Prototypal Inheritance Internals",
  enableInteractive: true,
  youtubeVideoId: "8aGhZQkoFbQ",
  quizId: "js-mq1",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🧬 A Anatomia Molecular do JavaScript
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Diferente de Java ou C++, o JavaScript não possui classes "reais" no nível do motor. Ele utiliza um modelo de <strong>Herança Prototípica</strong>. No nível Master, entendemos que objetos são ligados uns aos outros através de uma cadeia de referências vivas na memória.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. prototype vs. [[Prototype]]</h3>
        <p class="text-sm leading-relaxed">
          O segredo da senioridade é distinguir entre o mapa de construção e o link real:
        </p>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary block mb-1">A propriedade 'prototype':</strong> Presente apenas em funções. É o molde que será dado aos objetos criados com <button>new</button>.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary block mb-1">O link [[Prototype]]:</strong> (Acedido via <code>__proto__</code>). É a referência real que o objeto guarda para o seu pai na hierarquia.
          </li>
        </ul>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. A Busca na Cadeia (Lookup Chain)</h3>
        <p class="text-sm">Ao pedir <code>obj.prop</code>, o motor <button>V8</button> percorre a trilha até encontrar o valor ou chegar ao fim da linha (<button>null</button>).</p>
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-javascript">
const base = { power: 10 };
const hero = Object.create(base);
hero.name = "Edson";

// 🔍 Processo de Busca:
console.log(hero.name);  // 1. Encontra em 'hero' -> "Edson"
console.log(hero.power); // 2. Não encontra em 'hero', sobe para 'base' -> 10
console.log(hero.toString); // 3. Sobe até Object.prototype -> function
           </code></pre>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Arquiteto</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Nunca altere o protótipo de um objeto em tempo de execução usando <code>Object.setPrototypeOf</code>. Isto quebra as otimizações do motor <button>V8</button> (Hidden Classes), degradando a performance de O(1) para uma pesquisa de dicionário lenta."
        </p>
      </section>
    </div>
  `,
};
