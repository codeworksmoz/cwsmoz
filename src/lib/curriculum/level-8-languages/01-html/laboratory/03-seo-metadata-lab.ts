import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p3",
  language: "html",
  title: "Projeto Master: SEO Técnico e Autoridade",
  description: "Prepare o seu projeto para ser uma autoridade nos motores de busca.",
  statement: "Adicione os metadados de visibilidade na seção <head>.",
  isProjectPart: true,
  youtubeVideoId: "v4cd1O4zkGw",
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Visibilidade</h3>
      <p class="text-sm">Utilizando a estrutura semântica da aula anterior, vamos trabalhar no <code>&lt;head&gt;</code>:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Abaixo da meta viewport, adicione <code>&lt;meta name="description" content="A academia de engenharia de elite de Moçambique."&gt;</code>.</p>
        <p><strong>Ação 2:</strong> Abaixo da description, adicione <code>&lt;meta name="author" content="Seu Nome"&gt;</code>.</p>
        <p><strong>Ação 3:</strong> Adicione o link canonical: <code>&lt;link rel="canonical" href="https://codworks.mz"&gt;</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "meta_desc", description: "Meta description configurada", test: "name=\"description\"" },
    { id: "meta_author", description: "Meta author configurada", test: "name=\"author\"" },
    { id: "canonical", description: "Link rel='canonical' presente", test: "rel=\"canonical\"" }
  ]
};