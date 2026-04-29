import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "git-t13",
  title: "Git Rebase: Reescrevendo o Histórico",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🧹 Mantendo um Histórico Limpo</h2>
        <p class="text-lg leading-relaxed">
          O <strong>Rebase</strong> é uma alternativa ao Merge. Em vez de criar um commit de união, ele "move" o teu branch para o topo do branch de destino, criando um histórico linear e fácil de ler.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
          <h4 class="font-bold text-accent mb-2">Merge</h4>
          <p class="text-xs">Cria um histórico em forma de rede. Preserva a ordem cronológica exata, mas pode tornar-se confuso em equipas grandes.</p>
        </div>
        <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
          <h4 class="font-bold text-green-400 mb-2">Rebase</h4>
          <p class="text-xs">Reescreve o histórico para parecer que trabalhaste sempre na versão mais recente da 'main'. Gera um log linear e limpo.</p>
        </div>
      </div>

      <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/20 mt-6">
        <h4 class="font-bold text-red-400 mb-2">⚠️ A Regra de Ouro do Rebase</h4>
        <p class="text-sm">Nunca uses rebase em ramos públicos (ex: main). Como ele reescreve o histórico, vais causar conflitos impossíveis de resolver para os teus colegas. Usa rebase apenas no teu branch local antes do merge.</p>
      </div>
    </div>
  `,
  quizId: "git-q13"
};