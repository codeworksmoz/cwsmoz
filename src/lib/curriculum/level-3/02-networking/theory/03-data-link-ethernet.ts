import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "net-t3",
  title: "Camada de Enlace: Ethernet, Switching e VLANs",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🔗 A Entrega Local (Hop-to-Hop)</h2>
        <p class="text-lg">A Camada 2 resolve o problema de como dois computadores no mesmo cabo (ou WiFi) trocam mensagens sem se atropelarem. Aqui, o identificador real é o <strong>MAC Address</strong>.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. O Frame Ethernet</h3>
        <p class="text-sm">O dado é empacotado num <strong>Frame</strong>. Ele contém o endereço de destino físico, o de origem e um CRC (Cyclic Redundancy Check) para detetar se algum bit foi corrompido no cabo.</p>

        <h3 class="text-xl font-bold font-headline">2. Switching e Tabelas CAM</h3>
        <p class="text-sm">Um Switch é um dispositivo inteligente de Camada 2. Ele aprende quais endereços MAC estão em cada porta e constrói uma <strong>Tabela CAM</strong>. Diferente de um HUB (burro), o Switch envia o dado apenas para a porta correta, eliminando colisões.</p>
        
        <h3 class="text-xl font-bold font-headline text-accent">3. VLANs (Virtual LANs)</h3>
        <p class="text-sm leading-relaxed">Permitem segmentar uma rede física em múltiplas redes lógicas. É a base da segurança interna: o departamento Financeiro não consegue "ver" o tráfego da rede de Convidados, mesmo estando no mesmo switch físico.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">⚡ Spanning Tree Protocol (STP)</h4>
          <p class="text-sm leading-relaxed">Loops na Camada 2 são fatais. Se ligares dois cabos entre dois switches, a rede morre em segundos devido a uma <i>Broadcast Storm</i>. O STP deteta e bloqueia loops automaticamente, garantindo uma topologia sem ciclos.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "net-mq3"
};
