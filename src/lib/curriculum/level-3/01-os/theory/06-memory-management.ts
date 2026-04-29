import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t6",
  title: "Gestão de Memória: Espaços de Endereço",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🧠 Organizando a RAM</h2>
      <p>O SO deve garantir que cada processo tem a sua própria memória protegida e mapear endereços lógicos para físicos.</p>
      
      <div class="grid gap-4">
        <div class="p-4 bg-primary/5 border rounded-xl">
          <strong>MMU (Memory Management Unit):</strong> Hardware que faz a tradução de endereços em tempo real.
        </div>
        <div class="p-4 bg-accent/5 border rounded-xl">
          <strong>Fragmentação:</strong> Memória livre desperdiçada em pequenos blocos (Externa) ou dentro de alocações (Interna).
        </div>
      </div>
    </div>
  `,
  quizId: "os-q6"
};