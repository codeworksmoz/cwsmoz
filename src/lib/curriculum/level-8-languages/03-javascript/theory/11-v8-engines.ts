import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m11",
  title: "Fase 3: V8 Engines: Hidden Classes e Inline Caching",
  enableInteractive: true,
  youtubeVideoId: "u044iM9xsTM",
  quizId: "js-mq11",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🚀 Performance de Próxima Geração: O Motor V8
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O JavaScript é uma linguagem dinâmica, mas o motor <button>V8</button> (Chrome/Node.js) utiliza truques de baixo nível para a tornar tão rápida quanto C++. Entender as <strong>Hidden Classes</strong> é a chave para escrever código que o compilador JIT ama.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Hidden Classes (Shapes)</h3>
        <p class="text-sm leading-relaxed">
          Como o JS não tem tipos fixos, o V8 cria classes ocultas em runtime. Se alterares a ordem das propriedades ou adicionares campos dinamicamente, o V8 é forçado a criar uma <strong>nova</strong> classe oculta, quebrando as otimizações.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
             <h4 class="font-bold text-green-400 text-xs mb-2">Performático ✅</h4>
             <p class="text-[10px] opacity-70">Sempre inicialize todas as propriedades no construtor e na mesma ordem.</p>
          </div>
          <div class="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
             <h4 class="font-bold text-red-400 text-xs mb-2">Lento ❌</h4>
             <p class="text-[10px] opacity-70">Adicionar propriedades dinamicamente (ex: <code>obj.x = 10</code>) em momentos diferentes.</p>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Inline Caching (IC)</h3>
        <p class="text-sm leading-relaxed">O V8 memoriza onde encontrar propriedades em tipos de objetos específicos. Se uma função recebe sempre o mesmo "formato" de objeto, o motor pula a pesquisa no dicionário e acede à memória diretamente. Isto é o <strong>Monomorfismo</strong>.</p>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Regra de Ouro do Engenheiro Master
        </h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Trate o JavaScript como se fosse uma linguagem estática. Ao manter a forma (shape) dos seus objetos consistente, você permite que o compilador TurboFan gere código de máquina ultra-otimizado."
        </p>
      </section>
    </div>
  `,
};
