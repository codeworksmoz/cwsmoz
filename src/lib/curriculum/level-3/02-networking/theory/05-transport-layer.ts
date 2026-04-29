import type { TheoryLesson } from '../../../types';
export const lesson: TheoryLesson = {
  id: "net-t5",
  title: "Camada de Transporte: TCP vs UDP",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🚚 Entrega de Dados Ponta-a-Ponta</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-primary/5 border rounded-xl">
          <h4 class="font-bold text-primary">TCP (Transmission Control Protocol)</h4>
          <p class="text-xs">Orientado à conexão, garante entrega, controlo de fluxo e congestionamento. Ex: Web, Email.</p>
        </div>
        <div class="p-4 bg-accent/5 border rounded-xl">
          <h4 class="font-bold text-accent">UDP (User Datagram Protocol)</h4>
          <p class="text-xs">Sem conexão, rápido, sem garantias. Ex: Streaming, Jogos, VoIP.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "net-q5"
};