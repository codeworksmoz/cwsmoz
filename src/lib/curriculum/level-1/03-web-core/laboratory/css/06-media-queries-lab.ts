import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "web-p6-css",
  language: "html",
  title: "Laboratório: Layout Responsivo Adaptável",
  description: "Crie um card que muda de coluna para linha conforme o espaço.",
  statement: "Utilize uma Media Query para transformar o layout de coluna (base) em duas colunas quando o ecrã for maior que 768px.",
  template: `<!-- Arquiteto: O HTML já está pronto, foque no CSS Master -->
<div class="grid-container">
  <div class="box">Bloco A</div>
  <div class="box">Bloco B</div>
</div>

<style>
  .grid-container {
    display: grid;
    /* 1. Defina a coluna base aqui (Mobile First) */
    grid-template-columns: ;
    gap: 20px;
  }

  /* 2. Crie a Media Query para 768px abaixo */
  
</style>`,
  youtubeVideoId: "jV8B24w82CU",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🏁 Engenharia de Layouts Adaptáveis</h3>
      <p>A tua missão é garantir que o site não quebre em telemóveis. Seguindo a regra <strong>Mobile-First</strong>, o teu estilo fora da media query deve ser o do telemóvel (1 coluna).</p>
      <div class="bg-muted p-4 rounded-xl border border-primary/20">
        <p class="text-xs font-bold mb-2">A Ferramenta do Dia:</p>
        <code class="text-[10px]">@media (min-width: 768px) { ... }</code>
      </div>
      <p class="text-xs">
        <strong>Instruções:</strong>
        <br/>1. Define <code>grid-template-columns: 1fr;</code> para o mobile.
        <br/>2. Cria a media query <code>@media (min-width: 768px)</code>.
        <br/>3. Dentro dela, muda o <code>.grid-container</code> para ter 2 colunas: <code>1fr 1fr</code>.
      </p>
    </div>
  `,
  objectives: [
    {
      id: "mobile_base",
      description: "Definir 1 coluna como base no grid.",
      test: "grid-template-columns: 1fr"
    },
    {
      id: "media_query",
      description: "Implementar a regra @media (min-width: 768px).",
      test: "@media (min-width: 768px)"
    },
    {
      id: "desktop_layout",
      description: "Mudar para 2 colunas dentro da Media Query.",
      test: "1fr 1fr"
    }
  ]
};
