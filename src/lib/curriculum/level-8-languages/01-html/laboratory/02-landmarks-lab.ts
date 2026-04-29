import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p2",
  language: "html",
  title: "Projeto Master: Marcos Arquiteturais",
  description: "Organize as regiões principais do seu documento para acessibilidade industrial.",
  statement: "Adicione as tags de landmark dentro do seu body para estruturar o portal.",
  isProjectPart: true,
  youtubeVideoId: "8ME9u065vD4",
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Codworks Master Studio</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Bem-vindo ao Nível Master</h1>
    <p>A estrutura está validada.</p>
  </body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Marcos Semânticos</h3>
      <p class="text-sm">O código acima é a solução da aula anterior. Agora, evolua o <code>&lt;body&gt;</code>:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Adicione a tag <code>&lt;header&gt;</code> no topo do body.</p>
        <p><strong>Ação 2:</strong> Abaixo do header, adicione a tag <code>&lt;main role="main"&gt;</code>.</p>
        <p><strong>Ação 3:</strong> Mova o seu <code>&lt;h1&gt;</code> e <code>&lt;p&gt;</code> para DENTRO da tag <code>&lt;main&gt;</code>.</p>
        <p><strong>Ação 4:</strong> Antes de fechar o body, adicione a tag <code>&lt;footer&gt;</code> com: <code>&lt;p&gt;&copy; 2024 Codworks Moz&lt;/p&gt;</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "header", description: "Adicionar <header> no body", test: "<header>" },
    { id: "main", description: "Adicionar <main role=\"main\">", test: "<main role=\"main\">" },
    { id: "footer", description: "Adicionar <footer> no final", test: "<footer>" }
  ]
};