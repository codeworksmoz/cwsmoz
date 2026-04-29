import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m12",
  title: "CI/CD para Pacotes PyPI e Automação",
  content: `
    <div class="space-y-8">
      <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-green-400">🚀 Pipeline de Lançamento</h2>
        <p class="text-lg">Automatizar o teste, build e publicação de um pacote no **PyPI** utilizando GitHub Actions e Twine.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">O Ciclo de Confiança</h3>
        <p>Um pipeline Master deve garantir que o código passa em testes unitários, linting (Ruff/Flake8) e verificação de tipos (MyPy) antes de gerar a <strong>Sdist</strong> (Source Distribution) e o <strong>Wheel</strong>.</p>
        
        <h3 class="text-xl font-bold font-headline text-primary">Segurança no Deploy</h3>
        <p>Utilize <strong>OIDC (OpenID Connect)</strong> para publicar no PyPI sem precisar de guardar senhas ou tokens permanentes nos segredos do GitHub, eliminando um vetor de ataque crítico.</p>
      </div>
    </div>
  `,
  quizId: "py-mq12"
};
