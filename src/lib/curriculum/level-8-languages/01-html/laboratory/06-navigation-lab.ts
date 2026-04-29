import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p6",
  language: "html",
  title: "Projeto Master: Navegação Semântica",
  description: "Construa o fluxo de navegação do portal utilizando marcos de acessibilidade.",
  statement: "Adicione o bloco de navegação dentro do cabeçalho do projeto.",
  isProjectPart: true,
  youtubeVideoId: "u044iM9xsTM",
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
    <header>
      <!-- Ação 1: Adicione o <nav> aqui -->
    </header>
    <main role="main">
      <section>
        <h1>Bem-vindo ao Nível Master</h1>
        <p>A estrutura está validada.</p>
        <h2>Sobre o Motor</h2>
      </section>
      <section>
        <h2>Módulos de Elite</h2>
        <h3>Frontend</h3>
        <h3>Backend</h3>
        <h3>DevOps</h3>
      </section>
    </main>
    <footer>
      <p>&copy; 2024 Codworks Moz</p>
    </footer>
  </body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Fluxo de Navegação</h3>
      <p class="text-sm">Vá para dentro da tag <code>&lt;header&gt;</code> e implemente o menu:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Adicione a tag <code>&lt;nav aria-label="Menu Principal"&gt;</code>.</p>
        <p><strong>Ação 2:</strong> Dentro do nav, crie uma lista não-ordenada <code>&lt;ul&gt;</code>.</p>
        <p><strong>Ação 3:</strong> Adicione 3 itens <code>&lt;li&gt;</code> com links <code>&lt;a href="#"&gt;</code> para: "Home", "Treinos" e "Perfil".</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "nav_tag", description: "Usar a tag <nav>", test: "<nav" },
    { id: "aria_nav", description: "Adicionar aria-label no nav", test: "aria-label=\"Menu Principal\"" },
    { id: "links_count", description: "Mínimo 3 links de navegação", test: "</a>" }
  ]
};