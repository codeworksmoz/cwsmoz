import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t13",
  title: "Segment Trees: Consultas por Intervalo e Lazy Propagation",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📊 Range Queries em O(log n)
        </h2>
        <p class="text-lg leading-relaxed">
          Como calcular a soma de elementos entre o índice 100 e 5000 num array que muda constantemente? A **Segment Tree** permite fazer estas consultas e atualizações de forma ultra-eficiente.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">1. A Estrutura de Intervalos</h3>
        <p class="text-sm">Cada nó da árvore guarda a informação (soma, min, max) de um intervalo específico do array original. O nó raiz guarda a info do array inteiro.</p>

        <h3 class="text-xl font-bold font-headline text-accent">2. Lazy Propagation: A Otimização Final</h3>
        <p class="text-sm">Se precisas de atualizar um milhão de elementos de uma vez, não atualizas um por um. Tu "marcas" o nó da árvore para ser atualizado apenas quando for realmente consultado, economizando processamento inútil.</p>
        
        <div class="bg-indigo-500/10 p-5 rounded-xl border border-indigo-500/20 mt-6 shadow-inner text-xs italic">
          Uso real: Processamento de sinais, motores de jogos e bases de dados temporais.
        </div>
      </div>
    </div>
  `,
  quizId: "ds-mq13"
};
