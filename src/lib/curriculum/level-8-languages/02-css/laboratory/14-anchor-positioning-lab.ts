
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p14",
  language: "html",
  title: "Projeto Master: Anchor Positioning",
  description: "Ligue elementos flutuantes a âncoras no documento.",
  statement: "Utilize 'anchor-name' e 'position-anchor' para ligar um tooltip ao botão.",
  isProjectPart: true,
  youtubeVideoId: "jV8B24w82CU",
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <style>
    .anchor-btn {
      anchor-name: --my-anchor;
    }
    .tooltip {
      position: absolute;
      position-anchor: --my-anchor;
      bottom: anchor(top);
      left: anchor(center);
      background: #333;
      color: white;
      padding: 5px;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <button class="anchor-btn">Passe o mouse</button>
  <div class="tooltip">Dica Master</div>
</body>
</html>`,
  detailedExplanation: `<h3>⚓ Posicionamento Inteligente</h3><p>O Anchor Positioning elimina bibliotecas pesadas de JS, permitindo que o browser faça o cálculo de posição de popovers e tooltips nativamente.</p>`,
  objectives: [
    { id: "aname", description: "Definir anchor-name no botão", test: "anchor-name: --" },
    { id: "panchor", description: "Definir position-anchor no tooltip", test: "position-anchor: --" }
  ]
};
