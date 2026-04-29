import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "web-p5-css",
  language: "html",
  title: "Laboratório: Dashboard Grid System",
  description: "Crie uma grelha de dashboard bidimensional.",
  statement: "Configure um container grid com 3 colunas de larguras específicas usando a unidade fr.",
  template: `<!-- Arquiteto: Construa o Dashboard -->
<main class="dashboard">
  <aside class="sidebar">Menu</aside>
  <section class="content">Principal</section>
  <aside class="ads">Publicidade</aside>
</main>

<style>
  .dashboard {
    /* Configure a grelha master aqui */
    
  }
</style>`,
  youtubeVideoId: "jV8B24w82CU",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🏁 Arquitetura de Colunas</h3>
      <p>O objetivo é criar um layout clássico de 3 colunas. A coluna central deve ser a maior, ocupando 2 frações do espaço, enquanto as laterais ocupam 1 fração cada.</p>
      <div class="bg-muted p-4 rounded-xl border border-primary/20">
        <p class="text-xs font-bold mb-2">A Ferramenta do Dia:</p>
        <code class="text-[10px]">grid-template-columns: 1fr 2fr 1fr;</code>
      </div>
      <p class="text-xs">
        <strong>Instruções:</strong>
        <br/>1. Defina <code>display: grid;</code> no container dashboard.
        <br/>2. Use <code>grid-template-columns</code> para criar as 3 colunas (1fr, 2fr, 1fr).
        <br/>3. Adicione um <code>gap: 20px;</code> para separar as secções.
      </p>
    </div>
  `,
  objectives: [
    {
      id: "grid_active",
      description: "Ativar display: grid no dashboard.",
      test: "display: grid"
    },
    {
      id: "columns",
      description: "Definir as colunas 1fr 2fr 1fr.",
      test: "1fr 2fr 1fr"
    },
    {
      id: "gap",
      description: "Adicionar espaçamento entre as células.",
      test: "gap: 20px"
    }
  ]
};
