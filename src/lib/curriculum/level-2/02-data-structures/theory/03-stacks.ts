import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t3",
  title: "Stacks: A Lógica LIFO e a Gestão de Chamadas",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📚 Last-In, First-Out (LIFO)
        </h2>
        <p class="text-lg leading-relaxed">
          A Pilha é uma estrutura linear onde a inserção e remoção acontecem apenas numa extremidade: o **Topo**. É a base para a execução de quase todo o software moderno através da **Call Stack**.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Operações Atómicas</h3>
        <ul class="space-y-2 text-sm font-mono">
          <li><b class="text-accent">Push:</b> Adiciona ao topo O(1).</li>
          <li><b class="text-accent">Pop:</b> Remove do topo O(1).</li>
          <li><b class="text-accent">Peek:</b> Visualiza o topo sem remover O(1).</li>
        </ul>

        <h3 class="text-xl font-bold font-headline">2. Aplicações de Engenharia</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-muted/20 border-l-4 border-primary rounded-r-xl">
            <strong class="text-primary">Recursão:</strong> Cada chamada de função guarda o seu estado numa stack na memória.
          </div>
          <div class="p-4 bg-muted/20 border-l-4 border-primary rounded-r-xl">
            <strong class="text-primary">Parsing:</strong> Compiladores usam stacks para validar parênteses e avaliar expressões matemáticas.
          </div>
        </div>
      </div>
    </div>
  `,
  quizId: "ds-mq3"
};
