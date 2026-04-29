import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "git-t19",
  title: "Bisect: Caça a Bugs no Histórico",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400 flex items-center gap-2">
          🕵️ O Detetive de Commits
        </h2>
        <p class="text-lg">O <strong>git bisect</strong> utiliza um algoritmo de busca binária no teu histórico de commits para encontrar exatamente qual alteração introduziu um bug.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">O Fluxo de Investigação</h3>
        <p class="text-sm">Tu marcas um commit onde o código estava BOM e o atual onde está MAU. O Git vai saltando pelo histórico e pergunta-te se aquela versão está boa ou má.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs text-accent space-y-1">
          <p>git bisect <span class="text-primary">start</span></p>
          <p>git bisect <span class="text-red-400">bad</span> <span class="text-muted-foreground">// Versão atual</span></p>
          <p>git bisect <span class="text-green-400">good</span> abc1234 <span class="text-muted-foreground">// Versão que funcionava</span></p>
        </div>

        <p class="text-sm italic">Em poucos passos, o Git aponta o dedo ao commit culpado!</p>
      </div>
    </div>
  `,
  quizId: "git-q19"
};