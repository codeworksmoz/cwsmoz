import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m15",
  title: "Networking: Sockets e Protocolos Low-level",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 font-headline">📡 Comunicação em Tempo Real</h2>
        <p class="text-lg leading-relaxed">Dominar o módulo <code>socket</code> permite criar os seus próprios protocolos sobre TCP ou UDP, a base de servidores como o Redis ou sistemas de jogos online.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Buffer Management</h3>
        <p>Como ler dados da rede sem perder pacotes ou causar bloqueios. O uso de <code>recv()</code> e a gestão manual de bytes para reconstruir mensagens fragmentadas.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-accent">
          import socket<br/>
          s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)<br/>
          s.connect(("cwm.mz", 80))<br/>
          s.sendall(b"GET / HTTP/1.1\\r\\nHost: cwm.mz\\r\\n\\r\\n")
        </div>
      </div>
    </div>
  `,
  quizId: "py-mq15"
};
