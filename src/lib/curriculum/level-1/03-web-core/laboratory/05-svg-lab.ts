import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "web-p10-svg",
  language: "html",
  title: "Laboratório: Construção Vetorial Nativa",
  description: "Crie o seu primeiro ícone usando matemática visual.",
  statement: "Crie um ícone de 'Alerta' composto por um círculo laranja e um retângulo branco centralizado.",
  template: `<!-- Arquiteto: Desenhe o ícone de Alerta abaixo -->
<svg viewBox="0 0 100 100" width="100">
  <!-- 1. Desenhe o círculo laranja aqui (cx=50, cy=50, r=45) -->
  
  <!-- 2. Desenhe o retângulo branco (o ponto de exclamação) -->
  
</svg>`,
  youtubeVideoId: "u044iM9xsTM",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Desenhando com Código</h3>
      <p>A tua missão é construir um sinal de aviso. O círculo servirá de fundo e o retângulo será a parte superior do ponto de exclamação.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold text-yellow-500">Dicas Técnicas:</p>
        <ul class="text-[10px] space-y-1 list-disc ml-4">
          <li><strong>Círculo:</strong> Use <code>&lt;circle&gt;</code> com <code>fill="orange"</code>.</li>
          <li><strong>Retângulo:</strong> Use <code>&lt;rect&gt;</code> com <code>x="45" y="20" width="10" height="40" fill="white"</code>.</li>
        </ul>
      </div>
      <p class="text-xs">Clique em <strong>EXECUTAR</strong> para validar a geometria e as cores no terminal.</p>
    </div>
  `,
  objectives: [
    {
      id: "svg_circle",
      description: "Adicionar o círculo laranja centralizado.",
      test: "<circle"
    },
    {
      id: "circle_color",
      description: "Definir a cor do círculo como orange.",
      test: "fill=\"orange\""
    },
    {
      id: "svg_rect",
      description: "Adicionar o retângulo branco.",
      test: "<rect"
    },
    {
      id: "rect_pos",
      description: "Posicionar o retângulo corretamente (x=45).",
      test: "x=\"45\""
    }
  ]
};
