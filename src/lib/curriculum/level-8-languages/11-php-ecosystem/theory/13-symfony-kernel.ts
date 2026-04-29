import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t13",
  title: "Fase 3: Framework Internals II: Symfony HttpKernel e EventDispatcher",
  enableInteractive: true,
  youtubeVideoId: "raf_id_symfony_kernel",
  quizId: "php-eco-mq13",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🎻 O Maestro da Web: Symfony HttpKernel
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O componente <strong>HttpKernel</strong> é a espinha dorsal de quase todos os frameworks modernos (incluindo o Laravel e o Drupal). Ele trata o processo de converter um <code>Request</code> em um <code>Response</code> como um fluxo puramente <strong>Event-Driven</strong>.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Ciclo de Eventos do Kernel</h3>
        <p class="text-sm">O processamento do Symfony dispara 8 eventos fundamentais. Um Engenheiro Master sabe exatamente onde injetar lógica:</p>
        
        <ul class="space-y-4">
          <li class="p-3 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary">kernel.request:</strong> Para segurança, autenticação e roteamento inicial.
          </li>
          <li class="p-3 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary">kernel.controller:</strong> Onde o ControllerResolver decide qual função executar.
          </li>
          <li class="p-3 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary">kernel.exception:</strong> A rede de segurança final que transforma erros em páginas bonitas para o user.
          </li>
        </ul>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Controller e Argument Resolvers</h3>
        <p class="text-sm leading-relaxed">
          O segredo da flexibilidade do Symfony é que tu podes passar qualquer argumento para o teu controlador (Request, Session, User). O <strong>ArgumentResolver</strong> utiliza a reflexão do PHP para descobrir o que tu precisas e "pescar" essa informação do sistema.
        </p>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Bundle Architecture vs App Context
        </h4>
        <p class="text-sm leading-relaxed">
          No Symfony Master, tratamos o código como componentes independentes. O <strong>Kernel</strong> é o responsável por orquestrar a carga de <i>Bundles</i>, permitindo que a aplicação seja altamente modular e pronta para ser transformada em microserviços.
        </p>
      </section>
    </div>
  `
};
