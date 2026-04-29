import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "net-t7",
  title: "UDP: Velocidade Pura e Protocolos de Baixa Latência",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🏎️ Sem Travões, Sem Garantias</h2>
        <p class="text-lg leading-relaxed">O **UDP (User Datagram Protocol)** é o oposto do TCP. Ele é um protocolo "dispare e esqueça". Não há handshakes, não há confirmações e não há retransmissão de dados perdidos. Isto torna-o imbatível em velocidade.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. O Cabeçalho Minimalista</h3>
        <p class="text-sm">Enquanto o TCP tem um cabeçalho de 20-60 bytes, o UDP tem apenas 8 bytes. Menos overhead significa mais espaço para os dados reais em cada pacote.</p>

        <h3 class="text-xl font-bold font-headline text-primary">2. Quando escolher o UDP?</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-accent">Real-time Apps:</strong> Jogos online, Chamadas de Voz (VoIP) e Streaming de vídeo. É preferível perder um frame de imagem do que parar o vídeo inteiro à espera de um re-envio (que já estaria atrasado).
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-accent">Queries Curtas:</strong> DNS utiliza UDP porque a resposta é tão pequena que o custo de abrir uma conexão TCP seria maior que os dados em si.
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 O Novo Híbrido: QUIC</h4>
          <p class="text-sm leading-relaxed">O protocolo <strong>QUIC</strong> (base do HTTP/3) corre sobre UDP, mas implementa a fiabilidade do TCP no nível da aplicação. É a engenharia master combinando a velocidade do UDP com a segurança do TCP.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "net-mq7"
};
