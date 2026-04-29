import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t1",
  title: "Lógica Proposicional: A Base do Raciocínio",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">🏛️ O que é uma Proposição?</h2>
        <p class="text-lg leading-relaxed">
          Uma proposição é uma afirmação declarativa que é ou <strong>Verdadeira (V)</strong> ou <strong>Falsa (F)</strong>, mas nunca ambas ao mesmo tempo.
        </p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Conectores Lógicos</h3>
        <ul>
          <li><strong>Negação (¬):</strong> Inverte o valor de verdade.</li>
          <li><strong>Conjunção (∧):</strong> Verdade se AMBAS forem V. (AND)</li>
          <li><strong>Disjunção (∨):</strong> Verdade se PELO MENOS UMA for V. (OR)</li>
          <li><strong>Implicação (→):</strong> "Se P, então Q". Só é falsa se P for V e Q for F.</li>
          <li><strong>Bicondicional (↔):</strong> "P se e só se Q". Verdade se P e Q tiverem o mesmo valor.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "math-q1"
};
