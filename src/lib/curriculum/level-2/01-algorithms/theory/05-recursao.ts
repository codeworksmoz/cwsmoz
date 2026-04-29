import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "alg-t5",
  title: "Recursão e Estratégias Algorítmicas",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🔁 Pensando de Forma Recursiva</h2>
      <p>A recursão acontece quando uma função se chama a si própria para resolver uma versão menor do mesmo problema.</p>
      <div class="bg-card p-4 rounded-xl border font-code">
        fatorial(n) = n * fatorial(n-1)
      </div>
      <p class="text-sm text-muted-foreground italic">Cuidado: Sem um <strong>Caso Base</strong>, terás um estouro de memória (Stack Overflow)!</p>
    </div>
  `,
  quizId: "alg-q5"
};
