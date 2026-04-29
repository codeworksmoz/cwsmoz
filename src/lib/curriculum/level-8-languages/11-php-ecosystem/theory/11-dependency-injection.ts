import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t11",
  title: "Fase 3: Dependency Injection e Contentores de Elite",
  enableInteractive: true,
  youtubeVideoId: "raf_id_di_master",
  quizId: "php-eco-mq11",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          💉 Injeção de Dependência e IoC
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          A <strong>Injeção de Dependência (DI)</strong> é o padrão que inverte o controlo da criação de objetos. Em vez de um serviço criar as suas ferramentas, ele as recebe prontas. No nível Master, delegamos esta tarefa a um <button>Dependency Injection Container (DIC)</button>, o cérebro que orquestra todo o grafo de dependências da aplicação.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Autowiring: O Poder da Introspecção</h3>
        <p class="text-sm leading-relaxed">
          O <button>Autowiring</button> é a funcionalidade mais potente dos contentores modernos (como o do Symfony ou PHP-DI). Ele utiliza a <button>Reflection API</button> para inspecionar o construtor das classes e injetar as instâncias corretas automaticamente, baseando-se apenas na tipagem dos argumentos.
        </p>
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-php">
class EventDispatcher {
    // O Contentor lê estes tipos e injeta as instâncias globais
    public function __construct(
        private EventRepository $repo,
        private LoggerInterface $logger
    ) {}
}
           </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Ciclo de Vida: Singleton vs. Prototype</h3>
        <p class="text-sm">Um Engenheiro Master deve decidir como o objeto vive na memória RAM:</p>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-primary block">Shared (Singleton):</strong> O contentor cria o objeto uma vez e entrega a mesma instância em todo o lado. Ideal para <button>Database Connections</button>.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-primary block">Factory (Prototype):</strong> O contentor cria uma nova instância a cada pedido. Vital para objetos que carregam estado específico de um processo.
          </li>
        </ul>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4">🚀 PSR-11: O Padrão Universal</h4>
        <p class="text-sm leading-relaxed">
          A <button>PSR-11</button> define a interface <code>ContainerInterface</code>. Ela garante que o seu código possa pedir um serviço sem saber se está a usar o contentor do Laravel, Symfony ou Zend. Isto é o auge da interoperabilidade no ecossistema PHP.
        </p>
      </section>
    </div>
  `
};
