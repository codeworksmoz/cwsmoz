
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p19",
  language: "html",
  title: "Projeto Master: Paralelismo com Workers",
  description: "Desonere a thread principal de tarefas pesadas.",
  statement: "Instancie um Worker e envie o comando de inicialização.",
  isProjectPart: true,
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <meta charset="UTF-8">
  <title>Codworks Master Studio</title>
</head>
<body>
  <main id="main-content" role="main">
    <section>
      <h1>Processamento Master</h1>
    </section>
  </main>
  <script>
    // Ação 1: Instancie o worker aqui
    const worker = new Worker('engine.js');
    
    // Ação 2: Envie mensagem 'INIT'
    worker.postMessage('INIT');
  </script>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Workers</h3>
      <p class="text-sm">Ligue o motor paralelo para não travar a interface:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Use <code>const worker = new Worker('engine.js');</code>.</p>
        <p><strong>Ação 2:</strong> Use <code>worker.postMessage('INIT');</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "new_worker", description: "Instanciar classe Worker", test: "new Worker" },
    { id: "post_msg", description: "Enviar mensagem via postMessage", test: "postMessage" }
  ]
};
