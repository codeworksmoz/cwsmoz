
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p2",
  language: "html",
  title: "Projeto Master: DOM Mutation Observer",
  description: "Monitorize mudanças no portal de forma programática.",
  statement: "Implemente um observador que detete quando o status muda.",
  isProjectPart: true,
  youtubeVideoId: "8ME9u065vD4",
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <meta charset="UTF-8">
  <title>Codworks Master Studio</title>
  <style>
    body { background: #0f172a; color: white; font-family: sans-serif; padding: 2rem; }
    .btn { background: #3b82f6; color: white; padding: 10px 20px; border-radius: 8px; border: none; cursor: pointer; }
  </style>
</head>
<body>
  <h1>Elite Dashboard</h1>
  <button id="main-btn" class="btn">Iniciar Missão</button>
  <div id="status-area">Aguardando comando...</div>

  <script>
    const btn = document.getElementById('main-btn');
    const status = document.getElementById('status-area');
    btn.addEventListener('click', () => { status.textContent = "Ativo"; });

    // Ação 1: Crie o MutationObserver
    const observer = new MutationObserver((mutations) => {
      console.log("Status alterado no DOM!");
    });

    // Ação 2: Comece a observar as mudanças de texto
    observer.observe(status, { characterData: true, subtree: true, childList: true });
  </script>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">👁️ Vigilância de Baixo Nível</h3>
      <p class="text-sm">O <code>MutationObserver</code> é mais eficiente que eventos disparados manualmente para monitorizar o estado da aplicação no DOM.</p>
    </div>
  `,
  objectives: [
    { id: "observer", description: "Instanciar MutationObserver", test: "new MutationObserver" },
    { id: "observe", description: "Chamar o método observe()", test: ".observe(status" }
  ]
};
