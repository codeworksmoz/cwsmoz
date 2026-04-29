import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "git-t17",
  title: "Pull Requests e Code Review de Qualidade",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🤝 O Cérebro Coletivo</h2>
        <p class="text-lg">O <strong>Pull Request (PR)</strong> não é apenas um pedido de merge; é uma conversa sobre a qualidade do código. É o local onde a equipa revê o teu trabalho antes dele chegar aos utilizadores.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">A Anatomia de um PR de Elite</h3>
        <ul class="list-disc ml-6 space-y-3 text-sm">
          <li><strong>Contexto:</strong> Explica "porquê" fizeste esta mudança, não apenas "o quê".</li>
          <li><strong>Screenshots:</strong> Se mudaste algo visual, mostra o antes e o depois.</li>
          <li><strong>Checklist:</strong> "Testes passaram?", "Seguiu o style guide?".</li>
        </ul>

        <h3 class="text-xl font-bold font-headline text-accent">Dicas para Reviewers</h3>
        <p class="text-sm leading-relaxed">
          Seja gentil e construtivo. O objetivo do Code Review é melhorar o produto e partilhar conhecimento, não encontrar culpados. Se vires algo errado, sugira a solução em vez de apenas criticar.
        </p>
      </div>
    </div>
  `,
  quizId: "git-q17"
};