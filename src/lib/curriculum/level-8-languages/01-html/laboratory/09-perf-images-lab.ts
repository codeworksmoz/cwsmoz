import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p9",
  language: "html",
  title: "Projeto Master: Performance e Imagens Responsivas",
  description: "Implemente a entrega inteligente de imagens.",
  statement: "Adicione a Hero Image do portal com suporte a alta densidade de pixels.",
  isProjectPart: true,
  youtubeVideoId: "v4cd1O4zkGw",
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Codworks Master Studio</title>
  </head>
  <body>
    <header>
      <!-- Ação 1: Adicione a imagem aqui -->
    </header>
    <main role="main">
      <section>
        <h1>Bem-vindo ao Nível Master</h1>
      </section>
    </main>
  </body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Imagem de Elite</h3>
      <p class="text-sm">No <code>&lt;header&gt;</code>, adicione o banner principal:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Use <code>&lt;img src="hero.jpg" alt="Academia"&gt;</code>.</p>
        <p><strong>Ação 2:</strong> Adicione <code>srcset="hero.jpg 1x, hero-2x.jpg 2x"</code>.</p>
        <p><strong>Ação 3:</strong> Ative a prioridade máxima com <code>fetchpriority="high"</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "srcset", description: "Usar o atributo srcset", test: "srcset=" },
    { id: "fetch_priority", description: "Usar fetchpriority='high'", test: "fetchpriority=\"high\"" }
  ]
};