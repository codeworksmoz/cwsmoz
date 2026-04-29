
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p1",
  language: "html",
  title: "Projeto Master: Injetando Interatividade",
  description: "Dê vida ao portal de engenharia construído nos módulos anteriores.",
  statement: "Adicione um script para capturar cliques no botão de inscrição.",
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
  <div id="status-area" style="margin-top: 20px; color: #94a3b8;">Aguardando comando...</div>

  <script>
    // Ação 1: Selecione o botão e a área de status
    const btn = document.getElementById('main-btn');
    const status = document.getElementById('status-area');

    // Ação 2: Adicione o listener de clique
    btn.addEventListener('click', () => {
      status.textContent = "Missão Iniciada: Motor JS Ativo!";
    });
  </script>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">⚡ O Despertar do DOM</h3>
      <p class="text-sm">O objetivo é selecionar elementos via <code>getElementById</code> e usar <code>addEventListener</code> para reagir a eventos do utilizador.</p>
    </div>
  `,
  objectives: [
    { id: "select", description: "Selecionar o botão por ID", test: "getElementById('main-btn')" },
    { id: "event", description: "Adicionar click listener", test: "addEventListener('click'" }
  ]
};
