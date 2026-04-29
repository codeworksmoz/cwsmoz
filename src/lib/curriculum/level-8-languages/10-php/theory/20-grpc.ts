import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m20",
  title: "Fase 4: gRPC e Microserviços de Alta Disponibilidade",
  enableInteractive: true,
  quizId: "php-mq20",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📡 Comunicação Binária de Alta Performance
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Abandone o overhead do JSON e do HTTP/1.1 para a sua infraestrutura interna. O <strong>gRPC</strong> é o padrão da indústria para microserviços, utilizando o protocolo <button>HTTP/2</button> e a serialização binária <button>Protocol Buffers (Protobuf)</button> para atingir uma performance de silício puro na rede.
        </p>
      </div>

      <!-- 1. PROTOCOL BUFFERS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Protobuf: O Contrato de Dados</h3>
        <p class="text-sm leading-relaxed">
          Diferente do REST, onde o contrato é implícito, no gRPC ele é obrigatório e definido num ficheiro <button>.proto</button>. O <button>Protobuf</button> é um mecanismo de serialização binário, muito mais pequeno e rápido do que o XML ou JSON.
        </p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-primary text-xs mb-4 uppercase">Exemplo: Definindo a Task API</h4>
           <pre><code class="language-protobuf">
syntax = "proto3";

package event_server;

service TaskService {
  rpc Dispatch (TaskRequest) returns (TaskResponse) {}
}

message TaskRequest {
  string id = 1;
  string payload = 2;
}

message TaskResponse {
  bool success = 1;
}
           </code></pre>
        </div>
      </section>

      <!-- 2. HTTP/2 E MULTIPLEXING -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Porquê HTTP/2?</h3>
        <p class="text-sm leading-relaxed">O gRPC exige <button>HTTP/2</button> para tirar partido de funcionalidades master que o PHP tradicional (CGI) não conseguia lidar:</p>

        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary block mb-1">Binary Framing:</strong> Os dados viajam como binários, eliminando o parsing de texto pesado.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary block mb-1">Multiplexing:</strong> Envia múltiplos pedidos e respostas simultaneamente sobre a mesma conexão TCP, eliminando o bloqueio de cabeça de linha.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary block mb-1">Header Compression (HPACK):</strong> Reduz drasticamente o overhead dos cabeçalhos repetitivos.
          </li>
        </ul>
      </section>

      <!-- 3. IMPLEMENTAÇÃO EM PHP -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. PHP como Servidor gRPC</h3>
        <p class="text-sm leading-relaxed">
          Tradicionalmente, o PHP era apenas um cliente gRPC. No nível Master, utilizamos o <button>RoadRunner</button> ou o <button>Swoole</button> para atuar como um servidor gRPC real, mantendo os <button>Workers</button> vivos e prontos para processar os pedidos binários sem recarregar o script.
        </p>
        
        <pre><code class="language-php">
// O RoadRunner converte o Protobuf para interfaces PHP automáticas
class TaskHandler implements TaskServiceInterface {
    public function Dispatch(ContextInterface $ctx, TaskRequest $in): TaskResponse {
        // Lógica de negócio ultra-rápida
        return new TaskResponse(['success' => true]);
    }
}
        </code></pre>
      </section>

      <!-- 4. STREAMING -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Tipos de Comunicação gRPC</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl shadow-lg">
            <h4 class="font-bold text-accent mb-2">Unary</h4>
            <p class="text-[10px] opacity-70">Um pedido, uma resposta. Similar ao HTTP tradicional.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl shadow-lg">
            <h4 class="font-bold text-accent mb-2">Server Streaming</h4>
            <p class="text-[10px] opacity-70">O cliente pede e o servidor envia um fluxo contínuo de dados (ex: logs em tempo real).</p>
          </div>
          <div class="p-4 bg-card border rounded-xl shadow-lg">
            <h4 class="font-bold text-accent mb-2">Client Streaming</h4>
            <p class="text-[10px] opacity-70">O cliente envia um fluxo de dados e recebe uma resposta no final (ex: upload de ficheiro).</p>
          </div>
          <div class="p-4 bg-card border rounded-xl shadow-lg">
            <h4 class="font-bold text-accent mb-2">Bi-directional</h4>
            <p class="text-[10px] opacity-70">Ambos enviam e recebem dados simultaneamente de forma assíncrona.</p>
          </div>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão da Cloud Native</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "gRPC é o sistema circulatório dos microserviços modernos. No nosso **Event Server**, ele garante que a comunicação entre o motor e os consumidores de dados seja feita na velocidade do hardware, com tipagem forte e segurança garantida pelo protocolo."
        </p>
      </section>
    </div>
  `,
};
