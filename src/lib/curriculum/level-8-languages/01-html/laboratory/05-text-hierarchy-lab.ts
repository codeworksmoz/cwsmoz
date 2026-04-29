import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p5",
  language: "html",
  title: "Projeto Master: Hierarquia e Seções",
  description: "Desenhe o mapa de leitura do seu conteúdo principal.",
  statement: "Estruture o interior da tag <main> usando seções e títulos hierárquicos.",
  isProjectPart: true,
  youtubeVideoId: "8ME9u065vD4",
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A academia de engenharia de elite de Moçambique.">
    <meta name="author" content="Master Engineer">
    <link rel="canonical" href="https://codworks.mz">
    <meta property="og:title" content="Codworks Master Project">
    <meta property="og:type" content="website">
    <meta property="og:image" content="cover.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <title>Codworks Master Studio</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header></header>
    <main role="main">
      <h1>Bem-vindo ao Nível Master</h1>
      <p>A estrutura está validada.</p>
    </main>
    <footer>
      <p>&copy; 2024 Codworks Moz</p>
    </footer>
  </body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Árvore de Títulos</h3>
      <p class="text-sm">Vá para dentro da tag <code>&lt;main&gt;</code> da sua solução anterior e organize o conteúdo:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Envolva o H1 e o P numa tag <code>&lt;section&gt;</code>.</p>
        <p><strong>Ação 2:</strong> Abaixo do <code>&lt;p&gt;</code>, adicione um <code>&lt;h2&gt;</code>: "Sobre o Motor".</p>
        <p><strong>Ação 3:</strong> Crie uma segunda <code>&lt;section&gt;</code> abaixo da primeira.</p>
        <p><strong>Ação 4:</strong> Na nova seção, adicione um <code>&lt;h2&gt;</code>: "Módulos de Elite".</p>
        <p><strong>Ação 5:</strong> Dentro dela, use <code>&lt;h3&gt;</code> para: "Frontend", "Backend" e "DevOps".</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "sections", description: "Mínimo 2 seções no main", test: "<section>" },
    { id: "h2_check", description: "Títulos H2 presentes", test: "<h2>" },
    { id: "h3_check", description: "Títulos H3 presentes", test: "<h3>" }
  ]
};