
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p18",
  language: "html",
  title: "Projeto Master: Persistência de Nível Industrial",
  description: "Guarde o estado da aplicação localmente e garanta a durabilidade.",
  statement: "Utilize localStorage para guardar o tema e solicite persistência durável via API.",
  isProjectPart: true,
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <meta charset="UTF-8">
  <title>Codworks Master Studio</title>
</head>
<body>
  <header>
    <img src="hero.jpg" alt="Academia" fetchpriority="high">
    <nav aria-label="Menu Principal">
      <ul>
        <li><a href="#main-content">Home</a></li>
      </ul>
    </nav>
  </header>
  <main id="main-content" role="main">
    <section>
      <h1>Bem-vindo ao Nível Master</h1>
      <div class="user-card" id="profile-101" draggable="true">
        <p data-status="ready">Perfil Pronto</p>
      </div>
    </section>
  </main>
  <script>
    // Ação 1: Guarde o tema 'dark' no localStorage
    localStorage.setItem('cwm_theme', 'dark');

    // Ação 2: Solicite persistência durável
    if (navigator.storage && navigator.storage.persist) {
      navigator.storage.persist();
    }
  </script>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Web Storage</h3>
      <p class="text-sm">Use o armazém de chaves do browser e proteja os dados contra limpeza automática:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Use <code>localStorage.setItem('cwm_theme', 'dark');</code>.</p>
        <p><strong>Ação 2:</strong> Adicione a verificação <code>navigator.storage.persist()</code> dentro do script.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "ls_set", description: "Usar localStorage.setItem", test: "localStorage.setItem" },
    { id: "storage_persist", description: "Chamar navigator.storage.persist()", test: "storage.persist()" }
  ]
};
