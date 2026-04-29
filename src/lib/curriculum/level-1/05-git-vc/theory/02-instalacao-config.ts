import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "git-t2",
  title: "Instalação e Configuração: O Teu Bilhete de Identidade",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">⚙️ Configurando o Git</h2>
        <p>Antes de começares a registar o código, o Git precisa de saber QUEM és tu. Isto é importante para que todos na equipa saibam quem fez cada alteração.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Comandos de Identidade</h3>
        <pre class="bg-card p-4 rounded-lg border font-code">
git config --global user.name "Teu Nome"
git config --global user.email "teu@email.com"</pre>
      </div>
    </div>
  `,
  quizId: "git-t2-quiz"
};
