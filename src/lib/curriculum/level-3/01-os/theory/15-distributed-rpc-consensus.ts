
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t15",
  title: "Sistemas Distribuídos: RPC e Consenso de Rede",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🌍 O Sistema é a Rede</h2>
        <p class="text-lg leading-relaxed">Sistemas operativos modernos estendem-se por múltiplos nós. O <strong>RPC (Remote Procedure Call)</strong> permite que um processo invoque uma função noutra máquina como se fosse local.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. Marshalling e Proxies</h3>
        <p class="text-sm">Para enviar dados pela rede, o RPC deve serializar (Marshall) os objetos em bytes e enviá-los via rede (gRPC/Protocol Buffers).</p>

        <h3 class="text-xl font-bold font-headline">2. Consenso (Raft / Paxos)</h3>
        <p class="text-sm">Como é que 10 computadores concordam com o valor de uma variável se as mensagens podem atrasar ou falhar? Algoritmos de consenso garantem a <strong>Consistência</strong> do sistema mesmo com falhas parciais.</p>
      </div>
    </div>
  `,
  quizId: "os-q15"
};
