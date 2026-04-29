import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "web-p9-sem",
  language: "html",
  title: "Laboratório Master: Refatoração Semântica",
  description: "Transforme uma estrutura genérica numa arquitetura HTML5 profissional.",
  statement: "Refatorize o código substituindo as divs genéricas pelas tags semânticas apropriadas: <header>, <nav>, <main> e <footer>.",
  isProjectPart: true,
  template: `<!-- Refatorize a estrutura abaixo -->
<div id="header">
  <div id="menu">Links de Navegação</div>
</div>

<div id="principal">
  <h1>Título do Projeto</h1>
  <p>Conteúdo da missão...</p>
</div>

<div id="rodape">
  <p>2024 Codworks Moz</p>
</div>`,
  youtubeVideoId: "8ME9u065vD4",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🧹 Limpando o Documento</h3>
      <p>A tua missão é eliminar o uso de IDs para estruturação básica e utilizar as tags nativas do HTML5. Isso melhora o SEO e a acessibilidade instantaneamente.</p>
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold text-yellow-500">Mapeamento:</p>
        <ul class="text-[10px] space-y-1 list-disc ml-4">
          <li><code>#header</code> -> <code>&lt;header&gt;</code></li>
          <li><code>#menu</code> -> <code>&lt;nav&gt;</code></li>
          <li><code>#principal</code> -> <code>&lt;main&gt;</code></li>
          <li><code>#rodape</code> -> <code>&lt;footer&gt;</code></li>
        </ul>
      </div>
    </div>
  `,
  objectives: [
    {
      id: "header_tag",
      description: "Utilizar a tag <header> no topo.",
      test: "<header>"
    },
    {
      id: "nav_tag",
      description: "Utilizar a tag <nav> para o menu.",
      test: "<nav>"
    },
    {
      id: "main_tag",
      description: "Utilizar a tag <main> para o conteúdo central.",
      test: "<main>"
    },
    {
      id: "footer_tag",
      description: "Utilizar a tag <footer> no final.",
      test: "<footer>"
    }
  ]
};
