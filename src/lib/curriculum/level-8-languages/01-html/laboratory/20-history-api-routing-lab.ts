
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p20",
  language: "html",
  title: "Projeto Master: Roteamento com History API",
  description: "Simule a navegação de uma SPA sem recarregar a página.",
  statement: "Implemente a mudança de URL e o tratamento do botão voltar.",
  isProjectPart: true,
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <meta charset="UTF-8">
  <title>Codworks Master Studio</title>
</head>
<body>
  <nav>
    <button id="btn-settings">Definições</button>
  </nav>
  <main id="app-view">Home</main>
  <script>
    // Ação 1: Mude a URL ao clicar no botão
    document.getElementById('btn-settings').onclick = () => {
      history.pushState({ page: 'settings' }, '', '/settings');
    };

    // Ação 2: Ouça o evento popstate
    window.onpopstate = (event) => {
      console.log("Navegando...");
    };
  </script>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Router Nativo</h3>
      <p class="text-sm">Controle o histórico do browser:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Use <code>history.pushState({ page: 'settings' }, '', '/settings');</code>.</p>
        <p><strong>Ação 2:</strong> Implemente o listener <code>window.onpopstate</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "push_state", description: "Chamar history.pushState", test: "pushState" },
    { id: "popstate", description: "Ouvir o evento popstate", test: "onpopstate" }
  ]
};
