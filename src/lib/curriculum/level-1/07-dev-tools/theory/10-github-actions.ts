import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t10",
  title: "GitHub Actions: O Pipeline de CI/CD Industrial",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🤖 Engenharia Automática
        </h2>
        <p class="text-lg">O <strong>GitHub Actions</strong> permite automatizar fluxos de trabalho diretamente no repositório. Sempre que fazes um <i>push</i>, o servidor do GitHub pode testar e publicar o teu código sozinho.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. Workflows e Jobs</h3>
        <p class="text-sm">Configuramos tudo num ficheiro <strong>YAML</strong>. Um workflow pode conter vários <i>Jobs</i> que correm em paralelo ou em sequência em servidores virtuais (Runners).</p>

        <h3 class="text-xl font-bold font-headline text-accent">2. Segredos (Secrets)</h3>
        <p class="text-sm">Nunca coloques senhas de base de dados ou chaves de API no teu código! O GitHub Actions possui uma área segura para guardar estes dados e injetá-los no pipeline de forma encriptada.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Continuous Integration (CI)</h4>
          <p class="text-sm leading-relaxed">A regra de ouro: ninguém faz merge para a <code>main</code> se os testes automáticos no GitHub Actions estiverem a falhar. Isto garante que o projeto nunca quebra para o resto da equipa.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q10"
};