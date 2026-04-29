import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "web-p4-css",
  language: "html",
  title: "Laboratório: Barra de Navegação Flexível",
  description: "Construa um header responsivo usando Flexbox.",
  statement: "Crie uma barra de navegação onde o logotipo fique à esquerda e os links à direita, com espaçamento automático entre eles.",
  template: `<!-- Arquiteto: Construa a estrutura e o estilo -->
<header class="navbar">
  <div class="logo">CODWORKS</div>
  <nav class="links">
    <a href="#">Home</a>
    <a href="#">Módulos</a>
  </nav>
</header>

<style>
  .navbar {
    /* Ative o flex e alinhe os itens */
    
  }
</style>`,
  youtubeVideoId: "u044iM9xsTM",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">↔️ Distribuição de Espaço</h3>
      <p>A missão é usar o <strong>Flexbox</strong> para separar o Logo dos Links. Em vez de usar margens manuais, vamos usar a inteligência do motor flex.</p>
      <div class="bg-muted p-4 rounded-xl border border-primary/20">
        <p class="text-xs font-bold mb-2">A Ferramenta do Dia:</p>
        <code class="text-[10px]">justify-content: space-between;</code>
      </div>
      <p class="text-xs">
        <strong>Instruções:</strong>
        <br/>1. No seletor <code>.navbar</code>, use <code>display: flex;</code>.
        <br/>2. Use <code>justify-content: space-between;</code> para empurrar os itens para as pontas.
        <br/>3. Use <code>align-items: center;</code> para alinhar verticalmente.
      </p>
    </div>
  `,
  objectives: [
    {
      id: "display_flex",
      description: "Ativar display: flex na navbar.",
      test: "display: flex"
    },
    {
      id: "justify",
      description: "Usar space-between para separar os blocos.",
      test: "justify-content: space-between"
    },
    {
      id: "align",
      description: "Alinhar itens verticalmente ao centro.",
      test: "align-items: center"
    }
  ]
};
