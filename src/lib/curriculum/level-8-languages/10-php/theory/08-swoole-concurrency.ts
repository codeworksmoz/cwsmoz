import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m8",
  title: "Fase 2: Swoole: Concorrência Real e Servidores Assíncronos",
  enableInteractive: true,
  quizId: "php-mq8",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🚀 O PHP na Velocidade do Go
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <button>Swoole</button> não é uma framework, mas uma extensão escrita em <button>C++</button> que altera fundamentalmente o runtime do PHP. Ele remove a necessidade do <button>Nginx</button> ou <button>Apache</button> para servir pedidos, transformando o PHP num servidor de rede de alta performance e baixa latência através de <button>Coroutines</button> e um <button>Event Loop</button> de alto nível.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Residência em Memória vs. Shared-Nothing</h3>
        <p class="text-sm leading-relaxed">
          No modelo clássico (<button>PHP-FPM</button>), o PHP "morre" ao fim de cada request. Todas as classes, variáveis e conexões são destruídas. No <button>Swoole</button>, o PHP mantém a aplicação na memória.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-4 bg-muted/20 border border-white/5 rounded-xl shadow-lg">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">O Ganho Master</h4>
             <p class="text-xs opacity-70 leading-relaxed">
               Como o código já está compilado no <button>OpCache</button> e as classes instanciadas, o tempo de resposta (TTFB) cai drasticamente. Conexões de base de dados são mantidas abertas num <button>Connection Pool</button>, eliminando o custo do <i>handshake</i> em cada acesso.
             </p>
          </div>
          <div class="p-4 bg-red-500/5 border border-red-500/10 rounded-xl shadow-lg">
             <h4 class="font-bold text-red-400 text-xs mb-3 uppercase tracking-widest">A Responsabilidade</h4>
             <p class="text-xs opacity-70 leading-relaxed">
               Variáveis globais ou estáticas persistem entre diferentes utilizadores. Isto exige uma gestão de memória rigorosa para evitar <button>Memory Leaks</button> e vazamento de dados privados.
             </p>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Coroutines: I/O Não-Bloqueante Nativo</h3>
        <p class="text-sm leading-relaxed">
          O segredo do <button>Swoole</button> são as <button>Coroutines</button>. Diferente de threads, elas são extremamente leves. Quando o seu código faz um pedido à base de dados, a coroutine é <strong>suspensa</strong> e o motor atende outro utilizador enquanto aguarda a resposta, sem nunca travar o processo principal.
        </p>

        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Exemplo: Servidor de Alta Escala</h4>
           <pre><code class="language-php">
use Swoole\Http\Server;
use Swoole\Http\Request;
use Swoole\Http\Response;

$server = new Server("0.0.0.0", 9501);

// O Swoole escala automaticamente o uso de CPU
$server->on("Request", function (Request $request, Response $response) {
    // ⚡ Esta chamada é assíncrona mas tem sintaxe síncrona
    $data = go_fetch_data_from_db(); 
    
    $response->header("Content-Type", "application/json");
    $response->end(json_encode(["status" => "OK"]));
});

$server->start();
           </code></pre>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Arquitetura de Processos Master</h3>
        <p class="text-sm leading-relaxed">
          O Swoole utiliza um modelo multi-processo de elite para garantir resiliência:
        </p>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong><button>Master Process</button>:</strong> O orquestrador principal que gere os sinais do SO.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong><button>Manager Process</button>:</strong> Gere os ciclos de vida dos Workers (se um worker morre, ele cria um novo).
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong><button>Worker Processes</button>:</strong> Onde o seu código real é executado. Podem ser configurados para realizar tarefas síncronas pesadas em background via <button>Task Workers</button>.
          </li>
        </ul>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão do Arquiteto Cloud</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Ao usar <button>Swoole</button>, você deixa de ser um desenvolvedor de scripts e torna-se um engenheiro de sistemas. O controlo sobre o <button>Event Loop</button> permite construir sistemas de tempo real, como chats, jogos e motores de trading, com a simplicidade do PHP e a performance do silício."
        </p>
      </section>
    </div>
  `
};
