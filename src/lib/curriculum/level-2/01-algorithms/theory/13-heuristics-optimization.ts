import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "alg-t13",
  title: "Heurísticas e Algoritmos de Aproximação",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📐 Soluções "Suficientemente Boas"</h2>
        <p class="text-lg leading-relaxed">
          Muitos problemas reais (como rotas de entrega) são impossíveis de resolver de forma perfeita em tempo útil. Usamos <strong>Heurísticas</strong> para encontrar soluções próximas da ideal em milissegundos.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Estratégias Comuns</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-card border rounded-xl">
            <strong class="text-accent">Hill Climbing:</strong> Começa numa solução e tenta melhorá-la em passos pequenos. Se parar de melhorar, atingiste um cume (pode ser um ótimo local).
          </li>
          <li class="p-4 bg-card border rounded-xl">
            <strong class="text-accent">Simulated Annealing:</strong> Inspirado na metalurgia, aceita soluções piores no início para "saltar" de vales e encontrar o pico global mais tarde.
          </li>
          <li class="p-4 bg-card border rounded-xl">
            <strong class="text-accent">Algoritmos Genéticos:</strong> Evoluem soluções através de mutação e cruzamento, simulando a seleção natural.
          </li>
        </ul>
      </div>
    </div>
  `,
  quizId: "alg-q13"
};
