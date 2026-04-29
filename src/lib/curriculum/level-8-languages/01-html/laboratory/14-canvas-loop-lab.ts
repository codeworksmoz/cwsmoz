import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p14",
  language: "html",
  title: "Projeto Master: Engine Gráfica com Canvas",
  description: "Prepare o portal para visualização de dados em tempo real.",
  statement: "Adicione a superfície de desenho e o script de inicialização do motor.",
  isProjectPart: true,
  youtubeVideoId: "raf_id",
  template: `<!DOCTYPE html>
<html>
  <body>
    <main>
      <!-- Ação 1: Adicione o canvas aqui -->
    </main>
    <script>
      // Ação 2: Obtenha o contexto aqui
    </script>
  </body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Pincel Digital</h3>
      <p class="text-sm">Configure o ambiente gráfico do seu dashboard:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> No body, use <code>&lt;canvas id="stats-chart" width="400" height="200"&gt;&lt;/canvas&gt;</code>.</p>
        <p><strong>Ação 2:</strong> No script, use <code>const ctx = document.getElementById('stats-chart').getContext('2d');</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "canvas_id", description: "Canvas com ID 'stats-chart'", test: "id=\"stats-chart\"" },
    { id: "ctx_2d", description: "Obter contexto '2d' via JS", test: "getContext('2d')" }
  ]
};