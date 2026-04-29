import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "git-t18",
  title: "Git Hooks e Automação de Workflow",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🤖 Automatizando a Qualidade
        </h2>
        <p class="text-lg">Git Hooks são scripts que correm automaticamente antes ou depois de eventos do Git (como commit ou push). Eles garantem que código "sujo" nunca saia da tua máquina.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Hooks Populares</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent">pre-commit:</strong> Corre o Linter e os testes unitários. Se algo falhar, o commit é cancelado.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent">pre-push:</strong> Verifica se a documentação está atualizada ou se as variáveis de ambiente estão seguras.
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">Husky: Hooks Amigáveis</h3>
          <p class="text-sm">Em projetos Node.js, usamos a ferramenta <strong>Husky</strong> para gerir estes scripts de forma fácil e partilhável entre toda a equipa.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "git-q18"
};