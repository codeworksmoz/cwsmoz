
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m1",
  title: "Duck Typing & Protocolos",
  content: `
    <div class="space-y-6">
      <div class="bg-yellow-500/10 p-6 rounded-2xl border border-yellow-500/20">
        <h2 class="text-2xl font-bold mb-4">🦆 Se anda como um pato...</h2>
        <p class="text-lg">Python foca no <strong>comportamento</strong> do objeto e não no seu tipo explícito. Isto é o Duck Typing.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Protocolos e ABCs</h3>
        <p>Através de Abstract Base Classes (ABCs) e Protocolos (PEP 544), podemos definir interfaces estruturais que garantem que um objeto possui os métodos necessários sem herança rígida.</p>
      </div>
    </div>
  `,
  quizId: "py-mq1"
};
