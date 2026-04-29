
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "go-m1",
  title: "Interfaces Implícitas e Tipagem Estrutural",
  content: `
    <div class="space-y-6">
      <div class="bg-cyan-500/10 p-6 rounded-2xl border border-cyan-500/20">
        <h2 class="text-2xl font-bold mb-4">🚀 Pilar 1: Paradigma - Satisfação Implícita</h2>
        <p class="text-lg">Em Go, uma interface é satisfeita simplesmente implementando os seus métodos. Não existe a keyword 'implements'.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Vantagens Técnicas</h3>
        <p>Isto permite desacoplamento total. Podes definir uma interface no teu pacote para consumir um tipo definido noutro pacote que nem sabe que a tua interface existe.</p>
      </div>
    </div>
  `,
  quizId: "go-mq1"
};
