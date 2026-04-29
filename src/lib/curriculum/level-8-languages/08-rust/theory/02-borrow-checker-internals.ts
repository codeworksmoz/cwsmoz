
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "rs-m2",
  title: "Borrow Checker: Referências e Empréstimos",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🔍 O Vigilante de Memória</h2>
      <p>O Borrow Checker garante que não existem <i>data races</i> através de regras de empréstimo estritas:</p>
      <ul class="list-disc ml-6 space-y-2">
        <li>Podes ter múltiplas referências imutáveis (&T).</li>
        <li>OU apenas uma referência mutável (&mut T) por vez.</li>
        <li>As referências devem ser sempre válidas.</li>
      </ul>
    </div>
  `,
  quizId: "rs-mq2"
};
