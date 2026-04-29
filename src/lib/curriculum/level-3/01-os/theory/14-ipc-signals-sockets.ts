
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t14",
  title: "IPC: Comunicação entre Processos e Sinais",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">🗣️ O Diálogo entre Isolados</h2>
        <p class="text-lg">Como dois processos com memórias separadas conseguem trocar dados? O <strong>IPC (Inter-Process Communication)</strong> fornece as pontes seguras geridas pelo Kernel.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
          <h4 class="font-bold text-accent mb-3">Mecanismos de Dados</h4>
          <ul class="text-xs space-y-2 opacity-80">
            <li><strong>Pipes:</strong> Fluxo unidirecional (Ex: <code>ls | grep</code>).</li>
            <li><strong>Message Queues:</strong> Filas de mensagens estruturadas.</li>
            <li><strong>Shared Memory:</strong> O método mais rápido. Ambos os processos mapeiam o mesmo frame físico.</li>
          </ul>
        </div>
        <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
          <h4 class="font-bold text-accent mb-3">Mecanismos de Sinais</h4>
          <p class="text-xs">Sinais são notificações assíncronas. Ex: <code>SIGKILL (9)</code> força a paragem, <code>SIGTERM (15)</code> pede gentilmente que o processo feche.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "os-q14"
};
