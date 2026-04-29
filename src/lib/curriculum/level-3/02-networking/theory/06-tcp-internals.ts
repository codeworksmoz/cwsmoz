import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "net-t6",
  title: "Transport Layer: TCP Internals, Handshakes e Estados",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🚚 Entrega Garantida</h2>
        <p class="text-lg">O **TCP (Transmission Control Protocol)** transforma uma rede de pacotes pouco confiável num fluxo de dados perfeito. Ele resolve perdas, duplicações e erros de ordem usando janelas deslizantes e números de sequência.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Three-way Handshake</h3>
        <p class="text-sm">Antes de enviar o primeiro byte, o cliente e o servidor devem sincronizar as suas expectativas.</p>
        <div class="bg-black/40 p-6 rounded-xl border font-code text-sm shadow-inner text-center space-y-2">
          <p class="text-primary">SYN -> (Sincronizar)</p>
          <p class="text-accent">SYN-ACK <- (Aceitar e Sincronizar)</p>
          <p class="text-primary">ACK -> (Confirmar)</p>
        </div>

        <h3 class="text-xl font-bold font-headline">2. Controlo de Congestionamento</h3>
        <p class="text-sm">O TCP é um protocolo "educado". Ele começa devagar (Slow Start) e aumenta a velocidade até detetar uma perda de pacote. Nesse momento, ele assume que a rede está cheia e reduz a velocidade para evitar o colapso do router.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">⏱️ O Problema da Latência (RTT)</h4>
          <p class="text-sm leading-relaxed">Como o TCP exige confirmação (ACK) para cada lote de dados, se a distância física entre os computadores for grande, a velocidade máxima é limitada pelo tempo que a luz leva a ir e vir (Round Trip Time), e não apenas pela banda do cabo.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "net-mq6"
};
