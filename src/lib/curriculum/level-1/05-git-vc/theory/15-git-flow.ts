import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "git-t15",
  title: "Git Flow e Estratégias de Branching",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🌊 Fluxos de Trabalho em Equipa</h2>
        <p class="text-lg leading-relaxed">Não basta usar Git; é preciso ter uma estratégia. Um <strong>Workflow</strong> define como a equipa organiza as ramificações para garantir que o código em produção esteja sempre estável.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">O Modelo Git Flow Clássico</h3>
        <ul class="space-y-3">
          <li class="flex gap-4 p-3 bg-muted/20 rounded-xl">
            <span class="font-bold text-red-400 w-24">Main:</span> Código oficial em produção. 100% estável.
          </li>
          <li class="flex gap-4 p-3 bg-muted/20 rounded-xl">
            <span class="font-bold text-yellow-400 w-24">Develop:</span> Integração de novas funcionalidades. O "rascunho" da próxima versão.
          </li>
          <li class="flex gap-4 p-3 bg-muted/20 rounded-xl">
            <span class="font-bold text-blue-400 w-24">Feature:</span> Ramos temporários para cada nova tarefa. Nascem do develop.
          </li>
          <li class="flex gap-4 p-3 bg-muted/20 rounded-xl">
            <span class="font-bold text-orange-400 w-24">Hotfix:</span> Ramos urgentes para corrigir produção. Nascem da main.
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-2">🚀 GitHub Flow vs Git Flow</h3>
          <p class="text-sm">O <strong>GitHub Flow</strong> é mais simples e ágil: tudo o que está na <code>main</code> é publicável. Se queres mudar algo, crias um branch, fazes o PR, e dás o merge. Ideal para web e deploy contínuo.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "git-q15"
};