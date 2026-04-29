import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "net-t5",
  title: "IPv6: A Nova Era de Endereçamento Infinito",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">♾️ Um IP para cada átomo</h2>
        <p class="text-lg">O IPv4 esgotou os seus 4 mil milhões de endereços. O **IPv6** utiliza 128 bits, permitindo 340 undeciliões de endereços únicos, eliminando a necessidade de NAT e restaurando a conectividade ponta-a-ponta original da Internet.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. Sintaxe Hexadecimal</h3>
        <p class="text-sm">Endereços IPv6 são escritos em 8 grupos de 4 dígitos hexadecimais, separados por dois pontos (:). <br/>Ex: <code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code>.</p>

        <h3 class="text-xl font-bold font-headline">2. Inovações de Performance</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent">Header Simplificado:</strong> Routers processam pacotes IPv6 muito mais rápido porque o cabeçalho é fixo e removeu o checksum (que agora é responsabilidade das pontas).
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent">SLAAC:</strong> Autoconfiguração sem necessidade de um servidor DHCP. O dispositivo "inventa" o seu próprio IP baseado no prefixo da rede e no seu MAC address.
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 O Fim do NAT</h4>
          <p class="text-sm leading-relaxed">No IPv4, o teu router faz NAT para esconder múltiplos aparelhos sob um único IP público. No IPv6, cada telemóvel ou lâmpada inteligente pode ter um <strong>IP Público Global</strong>, facilitando conexões P2P e IoT de alta performance.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "net-mq5"
};
