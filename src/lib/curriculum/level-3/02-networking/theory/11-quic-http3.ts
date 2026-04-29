import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "net-t11",
  title: "HTTP/3 e QUIC: Superando as limitações do TCP",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400">⚡ A Web sobre UDP</h2>
        <p class="text-lg">O HTTP/2 melhorou a performance, mas ainda sofria do <strong>Head-of-Line Blocking</strong> do TCP: se um pacote de imagem se perdesse, todo o site parava. O HTTP/3 resolve isto usando o protocolo **QUIC** sobre UDP.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. 0-RTT Handshake</h3>
        <p class="text-sm">QUIC combina o aperto de mão de conexão com o aperto de mão de criptografia (TLS 1.3). Se já visitaste o site antes, podes enviar dados no primeiro pacote, eliminando esperas inúteis.</p>

        <h3 class="text-xl font-bold font-headline">2. IP Mobility (Migração de Conexão)</h3>
        <p class="text-sm">No TCP, se o teu telemóvel muda de WiFi para 4G, a conexão cai. No QUIC, a conexão é ligada a um <strong>Connection ID</strong> único e não ao endereço IP, permitindo continuar o download sem interrupção durante a mudança de rede.</p>
        
        <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-yellow-500 mb-2">🚀 Porquê HTTP/3 agora?</h4>
          <p class="text-sm leading-relaxed">Com o aumento massivo de redes móveis instáveis, o HTTP/3 oferece uma resiliência e velocidade que o TCP simplesmente não consegue atingir fisicamente.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "net-mq11"
};
