import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "web-p3-css",
  language: "css",
  title: "Missão Arquiteto: Domínio do Box Model",
  description: "Configure o espaçamento e contorno dos seus componentes.",
  statement: "Aplique paddings, bordas e margens para criar um card respirável e profissional.",
  isProjectPart: true,
  template: `/* Continue a construção do seu Design System */\n`,
  youtubeVideoId: "TQvD-Uq86oY",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">📦 A Ferramenta do Dia: Border-Box</h3>
      <p>A física do CSS pode ser traiçoeira. Para evitar que paddings e bordas aumentem o tamanho total do seu elemento, usamos o <strong>box-sizing</strong>.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">O Reset Obrigatório:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          * { box-sizing: border-box; }
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Aplica <code>box-sizing: border-box</code> ao seletor universal <code>*</code>.
        <br/>2. Adiciona um <code>padding</code> de <code>20px</code> à sua <code>div</code> principal.
        <br/>3. Adiciona uma <code>border</code> de <code>2px solid #333</code> a essa mesma div.
        <br/>4. Afasta o <code>h1</code> do parágrafo usando <code>margin-bottom: 30px</code>.
      </p>
    </div>
  `,
  objectives: [
    {
      id: "border_box",
      description: "Aplicar box-sizing: border-box ao seletor universal",
      test: "border-box"
    },
    {
      id: "div_spacing",
      description: "Aplicar padding e border à div",
      test: "padding: 20px"
    },
    {
      id: "h1_margin",
      description: "Aplicar margin-bottom ao h1",
      test: "margin-bottom: 30px"
    }
  ]
};