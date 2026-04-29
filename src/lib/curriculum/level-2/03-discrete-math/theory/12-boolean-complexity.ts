import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t12",
  title: "Álgebra Booleana Avançada e Lattices",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">⚡ Otimização do Fluxo de Bits</h2>
        <p class="text-lg leading-relaxed">
          Além do simples AND/OR, a Álgebra Booleana estuda estruturas chamadas <strong>Lattices</strong> que definem como os sistemas de segurança e tipos de dados se comportam em compiladores modernos.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Formas Normais Canónicas</h3>
        <p class="text-sm">Toda a função booleana pode ser escrita de duas formas universais, fundamentais para a síntese de hardware:</p>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong>DNF (Disjunctive Normal Form):</strong> Soma de produtos. Ideal para detecção de padrões.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong>CNF (Conjunctive Normal Form):</strong> Produto de somas. Usado em algoritmos de <strong>SAT Solvers</strong> para resolver problemas NP-Hard.
          </li>
        </ul>
      </div>
    </div>
  `,
  quizId: "math-q12"
};
