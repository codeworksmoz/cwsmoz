import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t9",
  title: "Design Patterns II: Padrões Comportamentais (Behavioral)",
  enableInteractive: true,
  youtubeVideoId: "raf_id_behavioral_patterns",
  quizId: "php-eco-mq9",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🤝 Orquestrando o Comportamento do Sistema
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Enquanto os padrões de criação focam em "como nascem" os objetos, os <strong>Padrões Comportamentais</strong> focam em "como eles comunicam". No nível Master, utilizamos estes padrões para eliminar estruturas complexas de <code>if/else</code> e criar sistemas reativos onde as responsabilidades são distribuídas de forma clara e isolada.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Strategy: Algoritmos Intercambiáveis</h3>
        <p class="text-sm leading-relaxed">
          O padrão <button>Strategy</button> permite definir uma família de algoritmos, encapsulá-los e torná-los trocáveis em tempo de execução. No nosso servidor, podemos trocar a estratégia de <strong>Criptografia</strong> ou de <strong>Compressão</strong> de dados sem alterar o motor principal.
        </p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-primary text-xs mb-4 uppercase">Injeção de Estratégia</h4>
           <pre><code class="language-php">
interface CompressionStrategy {
    public function compress(string $data): string;
}

class GzipCompression implements CompressionStrategy {
    public function compress(string $data): string { return gzcompress($data); }
}

// O motor apenas pede uma 'CompressionStrategy'
class EventDispatcher {
    public function __construct(private CompressionStrategy $compressor) {}
}
           </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Observer: A Base da Reatividade</h3>
        <p class="text-sm leading-relaxed">
          Define uma dependência de um para muitos entre objetos. Quando o <strong>Sujeito</strong> (Event) muda de estado, todos os seus <strong>Observadores</strong> (Handlers) são notificados e atualizados automaticamente. É o coração de qualquer motor de eventos moderno.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">SplSubject e SplObserver</h4>
             <p class="text-xs opacity-70 leading-relaxed">
               O PHP fornece interfaces nativas (<button>SplSubject</button>) para implementar este padrão com performance otimizada, permitindo gerir listas de subscritores de forma eficiente na memória.
             </p>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Event Sourcing Link</h4>
             <p class="text-xs opacity-70 leading-relaxed">
               O <button>Observer</button> é o mecanismo que dispara as <button>Projections</button> no padrão <button>CQRS</button>, garantindo que o banco de leitura seja atualizado assim que um comando é processado.
             </p>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Chain of Responsibility: O Pipeline de Processamento</h3>
        <p class="text-sm leading-relaxed">
          Permite passar um pedido ao longo de uma cadeia de receptores. Cada receptor decide se processa o pedido ou o passa ao próximo na fila. É a arquitetura por trás dos <button>Middlewares</button> no Laravel e Symfony.
        </p>
        
        <pre><code class="language-php">
// Cadeia de Validação: Auth -> ACL -> RateLimit -> Action
$pipeline = new AuthMiddleware(
    new AclMiddleware(
        new RateLimitMiddleware()
    )
);
        </code></pre>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Command Pattern e Undo/Redo
        </h4>
        <p class="text-sm leading-relaxed">
          O padrão <button>Command</button> transforma um pedido num objeto independente. Isto permite enfileirar pedidos em <button>Message Queues</button> (como RabbitMQ), fazer o log de operações e implementar reversão de estado (Undo) de forma trivial, pois o comando guarda todo o contexto necessário para a execução.
        </p>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão do Arquiteto</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Padrões comportamentais reduzem a complexidade ciclomática. Se o seu código tem muitos <code>switch</code> ou <code>if</code> aninhados, você provavelmente precisa de um <button>State</button> ou <button>Strategy</button>. O objetivo Master é um código onde as classes são pequenas, focadas e comunicam através de contratos bem definidos."
        </p>
      </section>
    </div>
  `
};
