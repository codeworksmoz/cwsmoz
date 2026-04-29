
import type { TheoryLesson } from '../../types';

const rubyTitles = [
  "Fase 1: Blocks, Procs e Lambdas: Closures em Ruby",
  "Fase 1: Metaprogramação: method_missing e Introspecção",
  "Fase 1: Módulos, Mixins e a Morte da Herança Múltipla",
  "Fase 1: Enumerables Poderosos: Lazy e Eager Evaluation",
  "Fase 2: Object Model Profundo: Eigenclasses e Singleton",
  "Fase 2: Refinements e Monkey Patching Seguro",
  "Fase 2: Metaprogramação II: define_method e Dynamism",
  "Fase 2: Gestão de Memória: Compacting GC Internals",
  "Fase 2: Performance: YJIT e Aceleração de Bytecode",
  "Fase 3: Concorrência Cooperativa com Fibers",
  "Fase 3: Paralelismo Real com Ractors (Ruby 3)",
  "Fase 3: Networking: Sockets e Protocolos em Ruby",
  "Fase 3: Error Resiliency e Safe Navigation (&.)",
  "Fase 3: Testing de Elite com RSpec e Mocks",
  "Fase 3: Construindo DSLs: A Arte do instance_eval",
  "Fase 4: Ruby on Rails Internals: MVC e Middleware",
  "Fase 4: Rails API: Serializers e Versionamento",
  "Fase 4: Frontends Reativos: Hotwire e Turbo Drive",
  "Fase 4: Segurança em Apps Ruby: CSRF, XSS e SQLi",
  "Fase 4: Gem Ecosystem: Criando e Publicando Ativos",
  "Fase 4: Capstone: Deploy de Expressive DSL Engine"
];

export const lessons: TheoryLesson[] = rubyTitles.map((title, i) => ({
  id: `rb-m${i + 1}`,
  title: title,
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          💎 Engenharia de Alta Fidelidade com Ruby
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Ruby é a linguagem do prazer do programador. No nível Master, exploramos a <strong>Pureza de Objetos</strong> e as capacidades de <strong>Metaprogramação</strong> que tornam o Ruby a linguagem mais expressiva do mundo.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">Tópico Master: ${title}</h3>
        <p class="text-sm">Esta lição mergulha nos internals da linguagem para garantir performance e escalabilidade.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-4">🚀 Visão do Engenheiro</h4>
          <p class="text-sm leading-relaxed">
            O objetivo é dominar as abstrações que o Ruby oferece, como <strong>Fibers</strong> para concorrência leve e <strong>YJIT</strong> para performance nativa, garantindo que o seu código seja não apenas bonito, mas de nível industrial.
          </p>
        </div>
      </section>
    </div>
  `,
  quizId: `rb-mq${i + 1}`,
  enableInteractive: true
}));
