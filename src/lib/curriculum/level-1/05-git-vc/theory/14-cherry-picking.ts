import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "git-t14",
  title: "Cherry-picking: Movendo Commits Específicos",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🍒 Escolha a Dedo
        </h2>
        <p class="text-lg">O <strong>Cherry-picking</strong> permite aplicar um commit específico de um branch noutro, sem precisar de fazer o merge do branch inteiro. É a ferramenta ideal para correções rápidas (hotfixes).</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Como usar:</h3>
        <p>1. Descobre o hash (ID) do commit que queres no outro branch (via <code>git log</code>).</p>
        <p>2. Muda para o branch onde queres aplicar a mudança.</p>
        <p>3. Executa:</p>
        <div class="bg-black/40 p-4 rounded-xl border font-code text-sm text-accent">
          git cherry-pick <span class="text-primary">abc1234</span>
        </div>
        
        <h3 class="text-xl font-bold font-headline text-accent">Quando evitar?</h3>
        <p class="text-sm">Evite abusar do cherry-pick para funcionalidades grandes, pois ele duplica o commit no histórico, o que pode causar confusão durante merges futuros. Use-o para emergências ou correções isoladas.</p>
      </div>
    </div>
  `,
  quizId: "git-q14"
};