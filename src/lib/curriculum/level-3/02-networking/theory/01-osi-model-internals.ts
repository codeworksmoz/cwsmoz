import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "net-t1",
  title: "Arquitetura de Redes: Modelo OSI e a Abstração em Camadas",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🌐 A Hierarquia da Comunicação
        </h2>
        <p class="text-lg leading-relaxed">
          O **Modelo OSI** (Open Systems Interconnection) não é apenas um guia teórico; é o mapa mental que um engenheiro de elite usa para isolar e diagnosticar falhas. Cada uma das 7 camadas resolve um problema específico, protegendo as camadas superiores da complexidade do hardware.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. O Fluxo de Encapsulamento</h3>
        <p class="text-sm">Sempre que envias um dado, ele sofre um processo de <strong>Encapsulamento</strong>: cada camada adiciona um cabeçalho (Header) com metadados vitais para a camada equivalente no destino.</p>
        
        <div class="bg-black/40 p-6 rounded-xl border font-code text-xs text-accent shadow-inner">
          [DATA] -> Segment (L4) -> Packet (L3) -> Frame (L2) -> Bits (L1)
        </div>

        <h3 class="text-xl font-bold font-headline">2. As 7 Camadas Master</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-primary">Camadas 1-3 (Hardware/Rede):</strong> Físico, Enlace (Ethernet) e Rede (IP). Resolvem a entrega física e o roteamento global.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-primary">Camada 4 (Transporte):</strong> TCP/UDP. Resolve a integridade e o controlo de fluxo (Ponta-a-Ponta).
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-primary">Camadas 5-7 (Software):</strong> Sessão, Apresentação (TLS/SSL) e Aplicação (HTTP/DNS). Onde vive a inteligência do negócio.
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">💎 Visão de Elite: O Modelo TCP/IP</h4>
          <p class="text-sm leading-relaxed">
            Embora o OSI seja o modelo de estudo, a Internet corre sobre o **Modelo TCP/IP**, que condensa as camadas superiores numa única camada de Aplicação. Como engenheiro, deves saber traduzir mentalmente entre os dois em milissegundos.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "net-mq1"
};
