
import type { PracticeExercise } from '../../types';
import { exercise as p1 } from './laboratory/01-selectors-lab';
import { exercise as p2 } from './laboratory/02-cascade-layers-lab';
import { exercise as p3 } from './laboratory/03-logical-properties-lab';
import { exercise as p4 } from './laboratory/04-intrinsic-sizing-lab';
import { exercise as p5 } from './laboratory/05-subgrid-master-lab';
import { exercise as p6 } from './laboratory/06-container-queries-lab';
import { exercise as p7 } from './laboratory/07-fluid-math-lab';
import { exercise as p8 } from './laboratory/08-variable-fonts-lab';
import { exercise as p9 } from './laboratory/09-perf-animations-lab';
import { exercise as p10 } from './laboratory/10-backdrop-filters-lab';
import { exercise as p11 } from './laboratory/11-shadow-dom-parts-lab';
import { exercise as p12 } from './laboratory/12-scroll-animations-lab';

export const practice = {
  html: [
    p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12,
    // Restantes labs como placeholders técnicos
    ...Array.from({ length: 9 }, (_, i) => ({
      id: `css-p${i + 13}`,
      language: "html",
      title: `Laboratório Master ${i + 13}`,
      description: "Evolução do Design System de Elite.",
      statement: "Aplique as propriedades avançadas solicitadas.",
      isProjectPart: true,
      template: "<!-- Snapshot anterior -->",
      detailedExplanation: "<h3>🏗️ Engenharia de Estilos</h3>",
      objectives: [{ id: "obj", description: "Validar estilo", test: ":" }]
    }))
  ]
};
