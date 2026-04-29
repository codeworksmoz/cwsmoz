import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m16",
  title: "Fase 4: Dependency Injection e Contentores de Serviço",
  enableInteractive: true,
  youtubeVideoId: "raf_id_di_containers",
  quizId: "php-mq16",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          💉 Inversão de Controlo (IoC)
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          A <strong>Injeção de Dependência</strong> é o padrão que remove a responsabilidade de uma classe criar os seus próprios objetos. No nível Master, delegamos esta tarefa a um <button>Dependency Injection Container (DIC)</button>, permitindo que o sistema seja montado dinamicamente com base em configurações ou metadados de <button>Attributes</button>.
        </p>
      </div>

      <!-- 1. O CONCEITO DE CONTAINER -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Contentor de Serviços (DIC)</h3>
        <p class="text-sm leading-relaxed">
          O <button>DIC</button> é o armazém central da aplicação. Ele sabe como instanciar cada classe e quais são as suas dependências. Em vez de dares <button>new</button> manualmente, tu pedes ao contentor: <code>$container->get(Service::class)</code>.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Estratégia Singleton</h4>
             <p class="text-xs opacity-70 leading-relaxed">
               O contentor cria o objeto apenas uma vez e reutiliza a mesma instância em toda a aplicação. Ideal para conexões de base de dados (<button>PDO</button>) ou loggers.
             </p>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Estratégia Prototype</h4>
             <p class="text-xs opacity-70 leading-relaxed">
               O contentor cria uma nova instância sempre que o serviço é solicitado. Útil para objetos que mantêm estado temporário.
             </p>
          </div>
        </div>
      </section>

      <!-- 2. AUTOWIRING -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Autowiring: Inteligência via Reflection</h3>
        <p class="text-sm leading-relaxed">
          O <button>Autowiring</button> é a capacidade do contentor ler o construtor da classe via <button>Reflection API</button>, identificar os tipos dos argumentos e injetar as dependências automaticamente, sem configuração manual.
        </p>

        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-primary text-xs mb-4 uppercase">Exemplo de Resolução Automática</h4>
           <pre><code class="language-php">
class EventDispatcher {
    // O DIC olha para os tipos e injeta as instâncias corretas
    public function __construct(
        private EventStore $repository,
        private LoggerInterface $logger
    ) {}
}

// O Engenheiro Master apenas pede o Dispatcher:
$dispatcher = $container->get(EventDispatcher::class);
           </code></pre>
        </div>
      </section>

      <!-- 3. INTERFACE BINDING -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Interface Binding e Polimorfismo</h3>
        <p class="text-sm leading-relaxed">
          Para respeitar a <button>Arquitetura Hexagonal</button>, o teu código deve depender de <button>Interfaces</button> (Portas). O contentor é onde defines qual <button>Adapter</button> concreto deve ser injetado para cada interface.
        </p>
        
        <pre><code class="language-php">
// Configuração do Container (Config Layer)
$container->set(EventStore::class, function() {
    return new PostgreSQLAdapter(dsn: $_ENV['DB_DSN']);
});
        </code></pre>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Porquê é Vital para Testes?
        </h4>
        <p class="text-sm leading-relaxed">
          Ao usar um <button>DIC</button>, podes instruir o contentor a injetar um <button>Mock</button> ou um <button>Stub</button> durante os testes unitários. Isto permite testar a lógica de negócio sem precisar de uma base de dados real ou de uma conexão de rede ativa.
        </p>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Arquiteto Master</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "A classe não deve saber como as suas dependências são criadas. Ela deve apenas declarar o que precisa para trabalhar. O <button>Dependency Injection</button> é o lubrificante que permite que as engrenagens de um sistema complexo girem sem atrito."
        </p>
      </section>
    </div>
  `
};
