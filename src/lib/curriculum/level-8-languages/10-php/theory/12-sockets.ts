import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m12",
  title: "Fase 3: Sockets e Streams: Comunicação de Baixo Nível",
  enableInteractive: true,
  youtubeVideoId: "dQw4w9WgXcQ",
  quizId: "php-mq12",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🔌 Engenharia de Rede Nativa
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Para construir servidores de alto desempenho como o <button>RoadRunner</button> ou o <button>Swoole</button>, um Engenheiro Master deve dominar a comunicação por <button>Sockets</button>. O PHP fornece acesso direto às chamadas de sistema do Unix, permitindo que cries os teus próprios protocolos sobre <button>TCP</button> ou <button>UDP</button>.
        </p>
      </div>

      <!-- 1. CREATION AND BINDING -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Anatomia do Socket: Criação e Escuta</h3>
        <p class="text-sm leading-relaxed">
          O processo inicia-se com o <button>socket_create()</button>. Deves definir o domínio (ex: <button>AF_INET</button> para rede), o tipo (ex: <button>SOCK_STREAM</button> para TCP) e o protocolo.
        </p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-primary text-xs mb-4 uppercase">Exemplo: Servidor TCP Master</h4>
           <pre><code class="language-php">
// 1. Criar o socket (IPv4, TCP)
$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

// 2. Ligar a uma porta (Bind)
socket_bind($socket, '0.0.0.0', 9000);

// 3. Colocar em modo de escuta
socket_listen($socket, 5);

echo "Aguardando conexões na porta 9000...";
           </code></pre>
        </div>
      </section>

      <!-- 2. NON-BLOCKING IO -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. I/O Não-Bloqueante e Performance</h3>
        <p class="text-sm leading-relaxed">
          Por padrão, o <button>socket_accept()</button> faz o PHP parar e esperar até que alguém se ligue. Em sistemas de alta escala, isto é inaceitável. Usamos <button>socket_set_nonblock()</button> para que o motor retorne imediatamente, permitindo que a <button>CPU</button> processe outras tarefas enquanto a rede trabalha.
        </p>

        <div class="p-5 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 shadow-inner">
           <h4 class="font-bold text-indigo-400 mb-2">🚀 Multiplexação com socket_select()</h4>
           <p class="text-xs leading-relaxed">
             Como saber qual dos 1000 clientes enviou dados? O <button>socket_select()</button> é a função master que monitoriza um array de sockets e avisa quais estão prontos para leitura, escrita ou erro, sem consumir 100% de CPU com loops vazios.
           </p>
        </div>
      </section>

      <!-- 3. STREAMS API -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Streams API: Abstração e Segurança TLS</h3>
        <p class="text-sm leading-relaxed">
          As <button>Streams</button> são uma camada de conveniência em cima dos sockets crus. Elas permitem usar funções familiares como <button>fread()</button> e <button>fwrite()</button> e facilitam a implementação de criptografia nativa.
        </p>
        
        <pre><code class="language-php">
$context = stream_context_create([
    'ssl' => ['local_cert' => 'server.pem']
]);

// Cria um servidor seguro com um único comando
$server = stream_socket_server("ssl://0.0.0.0:443", $errno, $errstr, STREAM_SERVER_BIND|STREAM_SERVER_LISTEN, $context);
        </code></pre>
      </section>

      <!-- 4. UNIX DOMAIN SOCKETS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Performance Local: Unix Domain Sockets</h3>
        <p class="text-sm leading-relaxed">
          Se o teu servidor de eventos comunica com uma base de dados no mesmo computador, não uses <button>TCP</button> (rede). Use <button>AF_UNIX</button>. Isto ignora todo o overhead do stack <button>TCP/IP</button>, reduzindo a latência em até 40%.
        </p>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Visão de Engenheiro de Redes</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Entender <button>Sockets</button> é o que permite que tu deixes de ser um consumidor de ferramentas e passes a ser um criador. No nosso servidor de eventos, a camada de sockets é o que garante que a telemetria chegue em tempo real com o mínimo de latência possível."
        </p>
      </section>
    </div>
  `,
};
