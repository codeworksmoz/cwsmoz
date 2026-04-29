import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t2",
  title: "Heurísticas de Nielsen: As 10 Regras de Ouro",
  content: `
    <div class="space-y-6">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400">📏 Padrões Universais de Usabilidade</h2>
        <p class="text-lg">Jakob Nielsen definiu 10 princípios gerais para o design de interface de utilizador. São chamados de "heurísticas" porque são regras amplas e não diretivas rígidas.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-card border rounded-xl border-white/5">
          <h4 class="font-bold text-primary mb-1">1. Visibilidade do Estado</h4>
          <p class="text-xs text-muted-foreground">O sistema deve sempre informar o utilizador sobre o que está a acontecer (ex: barras de progresso).</p>
        </div>
        <div class="p-4 bg-card border rounded-xl border-white/5">
          <h4 class="font-bold text-primary mb-1">2. Mapeamento com o Mundo Real</h4>
          <p class="text-xs text-muted-foreground">Use termos e conceitos familiares ao utilizador, não jargão técnico do sistema.</p>
        </div>
        <div class="p-4 bg-card border rounded-xl border-white/5">
          <h4 class="font-bold text-primary mb-1">3. Controlo e Liberdade</h4>
          <p class="text-xs text-muted-foreground">Ofereça sempre uma "saída de emergência" (Undo/Redo) para ações feitas por engano.</p>
        </div>
        <div class="p-4 bg-card border rounded-xl border-white/5">
          <h4 class="font-bold text-primary mb-1">4. Consistência e Padrões</h4>
          <p class="text-xs text-muted-foreground">Não obrigue o utilizador a adivinhar que palavras ou ações diferentes significam a mesma coisa.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "hci-q2"
};