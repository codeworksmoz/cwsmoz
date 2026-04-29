import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m14",
  title: "Fase 3: Networking: Sockets e Protocolos Binários",
  youtubeVideoId: "8ME9u065vD4",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📡 Comunicação de Baixo Nível
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Dominar o módulo <code>socket</code> permite criar os seus próprios protocolos sobre TCP ou UDP. No nosso <strong>Monitor de Sistema</strong>, isto é vital para enviar telemetria em tempo real para um servidor central com o mínimo de overhead possível.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Ciclo de Conexão</h3>
        <p class="text-sm">O ciclo master envolve criar o socket, ligar ao endereço (bind), escutar (listen) e aceitar conexões.</p>
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm text-accent shadow-inner">
          <pre><code class="language-python">
import socket

# Criar um socket TCP/IPv4
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind(('0.0.0.0', 9000))
s.listen(5)

while True:
    conn, addr = s.accept()
    data = conn.recv(1024)
    if not data: break
    conn.sendall(data)
          </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Serialização Binária (struct)</h3>
        <p class="text-sm leading-relaxed">Enviar JSON pela rede é lento e gasta banda. Engenheiros master usam o módulo <code>struct</code> para empacotar dados em binário puro, economizando até 70% de tráfego.</p>
        <pre><code class="language-python">
import struct

# Empacota um inteiro e um float em 8 bytes binários
packed_data = struct.pack('if', 1, 99.5)
        </code></pre>
      </section>
    </div>
  `
};
