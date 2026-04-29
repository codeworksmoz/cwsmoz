import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m4",
  title: "Fase 1: Metaprogramação: Proxies e Reflect API",
  enableInteractive: true,
  youtubeVideoId: "mNst8vX-u8E",
  quizId: "js-mq4",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🎭 Intercetando a Realidade do Objeto
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          A Metaprogramação permite que o código opere sobre si próprio. O objeto <strong>Proxy</strong> é a ferramenta de elite para intercetar operações fundamentais (como leitura e escrita) em objetos. É a tecnologia por trás da reatividade do <button>Vue 3</button> e de sistemas de validação de dados em tempo real.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Handlers e Traps</h3>
        <p class="text-sm">Um Proxy envolve um objeto alvo. Sempre que fazes <code>proxy.name</code>, o motor dispara uma "armadilha" (Trap) definida no seu handler.</p>
        
        <div class="space-y-4">
           <pre><code class="language-javascript">
const target = { price: 100 };

const handler = {
  get(obj, prop) {
    console.log(\`Acedendo à propriedade: \${prop}\`);
    return obj[prop] * 1.15; // Injeta imposto automaticamente na leitura!
  }
};

const proxy = new Proxy(target, handler);
console.log(proxy.price); // 115
           </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Reflect API: Mantendo a Semântica</h3>
        <p class="text-sm leading-relaxed">Dentro de um Proxy, deves usar a API <code>Reflect</code> para realizar a operação original. Isto garante que comportamentos internos do motor (como herança e extensibilidade) não sejam quebrados pela sua armadilha.</p>

        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-javascript">
const handler = {
  set(target, prop, value) {
    if (prop === 'id') throw new Error("ID é imutável!");
    // ✅ Forma Master:
    return Reflect.set(target, prop, value);
  }
};
           </code></pre>
        </div>
      </section>

      <section class="bg-yellow-500/5 p-8 rounded-[2rem] border-2 border-dashed border-yellow-500/20 text-center">
        <h4 class="text-xl font-bold text-yellow-500 mb-4">🏆 Auditoria Proativa</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Proxies permitem criar 'Smart Objects' que se auto-validam e auto-persistem. Ao dominar a metaprogramação, você deixa de escrever lógica defensiva repetitiva e passa a desenhar infraestruturas de dados inteligentes."
        </p>
      </section>
    </div>
  `,
};
