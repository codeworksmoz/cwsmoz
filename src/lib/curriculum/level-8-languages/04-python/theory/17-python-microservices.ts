import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m17",
  title: "Fase 4: Microserviços e gRPC com Python",
  youtubeVideoId: "dQw4w9WgXcQ",
  enableInteractive: true,
  quizId: "py-mq17",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📡 Comunicação Binária de Alta Escala
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Em arquiteturas de microserviços, o overhead do JSON e HTTP/1.1 pode tornar-se o principal gargalo. O <strong>gRPC</strong> utiliza o protocolo binário <strong>Protocol Buffers (Protobuf)</strong> sobre HTTP/2 para atingir latências ultra-baixas e tipagem forte entre serviços Python e o resto da infraestrutura.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Definindo o Contrato (Protobuf)</h3>
        <p class="text-sm leading-relaxed">
          No gRPC, o contrato de dados é obrigatório e definido num ficheiro <code>.proto</code>. Isto gera código Python tipado automaticamente, eliminando erros de serialização.
        </p>
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-protobuf">
syntax = "proto3";

service Monitor {
  rpc SendMetrics (MetricRequest) returns (StatusResponse) {}
}

message MetricRequest {
  string cpu = 1;
  float value = 2;
}
           </code></pre>
        </div>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Porquê gRPC no nosso Motor?
        </h4>
        <p class="text-sm leading-relaxed">
          O nosso **System Monitor** vai enviar telemetria em tempo real. Usar gRPC permite-nos manter streams persistentes e enviar dados binários comprimidos, reduzindo o tráfego de rede em até 60% comparado ao REST tradicional.
        </p>
      </section>
    </div>
  `
};
