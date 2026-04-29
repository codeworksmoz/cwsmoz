import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t25",
  title: "Redes de Computadores: Como a Internet Funciona",
  youtubeVideoId: "E18Qv2bTkRU",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          A Maior Máquina do Mundo
        </h2>
        <p class="text-lg leading-relaxed">
          A Internet não é uma nuvem mágica — é um sistema de protocolos empilhados que permite que dois computadores troquem dados de forma confiável através de milhares de quilómetros de cabos, fibra e ondas de rádio.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Modelos de Rede</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-card p-5 rounded-xl border">
            <h4 class="font-bold text-blue-400 mb-2">Modelo OSI (7 camadas)</h4>
            <ol class="text-[10px] space-y-0.5 text-gray-400">
              <li>7. Aplicação (HTTP, DNS, SMTP)</li>
              <li>6. Apresentação (SSL/TLS, JPEG)</li>
              <li>5. Sessão (NetBIOS, RPC)</li>
              <li>4. Transporte (TCP, UDP)</li>
              <li>3. Rede (IP, ICMP)</li>
              <li>2. Ligação (Ethernet, MAC, ARP)</li>
              <li>1. Física (Cabos, Wi-Fi, fibra)</li>
            </ol>
          </div>
          <div class="bg-card p-5 rounded-xl border">
            <h4 class="font-bold text-green-400 mb-2">Modelo TCP/IP (4 camadas)</h4>
            <ol class="text-[10px] space-y-0.5 text-gray-400">
              <li>4. Aplicação (HTTP, FTP, DNS)</li>
              <li>3. Transporte (TCP, UDP)</li>
              <li>2. Internet (IP, Roteamento)</li>
              <li>1. Rede (Ethernet, Wi-Fi, DSL)</li>
            </ol>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">2. TCP vs UDP</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
            <h4 class="font-bold text-blue-400">TCP (Transmission Control Protocol)</h4>
            <ul class="text-xs space-y-1 text-gray-400 mt-2">
              <li>• <strong>Garantido:</strong> pacotes chegam na ordem certa</li>
              <li>• <strong>3-Way Handshake:</strong> SYN → SYN-ACK → ACK</li>
              <li>• Ideal para: Web, Email, FTP, SSH</li>
            </ul>
          </div>
          <div class="bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20">
            <h4 class="font-bold text-yellow-400">UDP (User Datagram Protocol)</h4>
            <ul class="text-xs space-y-1 text-gray-400 mt-2">
              <li>• <strong>Sem garantia:</strong> pacotes podem perder-se ou chegar fora de ordem</li>
              <li>• <strong>Sem handshake:</strong> mais rápido que TCP</li>
              <li>• Ideal para: Streaming, VoIP, Jogos, DNS</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">3. Protocolos Essenciais</h3>
        <div class="space-y-3 text-sm">
          <p><strong class="text-purple-400">DNS (Domain Name System):</strong> Traduz "google.com" → 142.250.200.14. Usa UDP porta 53. Hierárquico: root → TLD → domínio.</p>
          <p><strong class="text-green-400">HTTP/HTTPS:</strong> HyperText Transfer Protocol. HTTPS = HTTP + TLS (encriptação). HTTP/2 = multiplexação. HTTP/3 = QUIC (UDP em vez de TCP).</p>
          <p><strong class="text-yellow-400">WebSocket:</strong> Conexão persistente bidirecional sobre TCP. Ideal para chat, jogos em tempo real, notificações.</p>
          <p><strong class="text-cyan-400">REST vs GraphQL:</strong> REST usa endpoints fixos com métodos HTTP. GraphQL permite ao cliente especificar exatamente que dados quer.</p>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">4. Endereçamento e Roteamento</h3>
        <div class="grid md:grid-cols-2 gap-4 text-xs">
          <div class="bg-card p-4 rounded-xl border">
            <span class="font-bold text-blue-400">IPv4: 32 bits</span>
            <p class="text-gray-400 mt-1">192.168.1.1 / Máscara: 255.255.255.0</p>
            <p class="text-gray-400">NAT: múltiplos dispositivos partilham 1 IP público</p>
          </div>
          <div class="bg-card p-4 rounded-xl border">
            <span class="font-bold text-green-400">IPv6: 128 bits</span>
            <p class="text-gray-400 mt-1">2001:db8::1 — endereços para cada átomo do planeta</p>
            <p class="text-gray-400">Sem NAT: cada dispositivo tem IP público</p>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-5 rounded-xl border border-indigo-500/20 mt-4">
          <h4 class="font-bold text-indigo-400 text-sm">Como um pedido viaja na Internet:</h4>
          <p class="text-xs text-gray-400 mt-2">Browser → DNS → TCP Handshake → TLS Handshake → HTTP Request → Server → HTTP Response → Browser renderiza. <strong>Tudo em milissegundos!</strong></p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-q25"
};