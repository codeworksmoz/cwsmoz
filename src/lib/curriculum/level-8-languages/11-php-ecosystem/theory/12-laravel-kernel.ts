import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t12",
  title: "Fase 3: Framework Internals I: O Kernel do Laravel",
  enableInteractive: true,
  youtubeVideoId: "raf_id_laravel_kernel",
  quizId: "php-eco-mq12",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🐘 Por dentro do Gigante: Laravel Internals
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Entender o Laravel em nível Master não é sobre usar as <i>facades</i>; é sobre entender como o <strong>HTTP Kernel</strong> orquestra a jornada de um pedido, desde o <code>public/index.php</code> até à resposta final.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Ciclo de Bootstrapping</h3>
        <p class="text-sm leading-relaxed">
          Quando um pedido chega, o Laravel carrega o seu <strong>Service Container</strong> (o coração). Em seguida, ele executa os <strong>Service Providers</strong>. Este é o momento onde as ligações de base de dados, sistemas de cache e rotas são registradas no sistema.
        </p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-primary text-xs mb-4 uppercase text-center">A Jornada do Request</h4>
           <div class="flex items-center justify-between text-[9px] font-bold text-center gap-2 overflow-x-auto">
             <div class="p-2 bg-muted rounded border min-w-[80px]">index.php</div>
             <div class="text-accent">→</div>
             <div class="p-2 bg-muted rounded border min-w-[80px]">HTTP Kernel</div>
             <div class="text-accent">→</div>
             <div class="p-2 bg-indigo-500/20 rounded border min-w-[80px]">Service Providers</div>
             <div class="text-accent">→</div>
             <div class="p-2 bg-muted rounded border min-w-[80px]">Router</div>
             <div class="text-accent">→</div>
             <div class="p-2 bg-green-500/20 rounded border min-w-[80px]">Middleware</div>
             <div class="text-accent">→</div>
             <div class="p-2 bg-muted rounded border min-w-[80px]">Controller</div>
           </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. O Pipeline de Middlewares</h3>
        <p class="text-sm leading-relaxed">
          O Laravel utiliza o padrão <strong>Decorator</strong> através de um <strong>Pipeline</strong>. O pedido passa por uma "casca de cebola" de filtros. Cada middleware pode interromper o pedido (ex: falta de autenticação) ou processá-lo e passá-lo para o próximo.
        </p>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Inversão de Dependência no Laravel
        </h4>
        <p class="text-sm leading-relaxed">
          O Laravel é construído sobre o conceito de <strong>Bound Interfaces</strong>. Tu podes dizer ao contentor: "Sempre que alguém pedir a interface 'Payment', entregue a classe 'StripePayment'". Isto permite trocar fornecedores sem mudar uma única linha no seu controlador.
        </p>
      </section>
    </div>
  `
};
