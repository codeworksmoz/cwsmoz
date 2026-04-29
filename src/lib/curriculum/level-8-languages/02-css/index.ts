
/**
 * @fileOverview MÓDULO: CSS MASTER
 * 
 * GUIA DE MANUTENÇÃO:
 * - A ordem das lições em 'theory' dita a sequência da trilha.
 * - Use 'htmlTemplate' nos exercícios práticos para fornecer o HTML base.
 * - 'isProjectPart: true' garante que o aluno continue a estilizar o projeto iniciado.
 */

import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';

// Importação de Laboratórios Master
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
import { exercise as p13 } from './laboratory/13-oklch-colors-lab';
import { exercise as p14 } from './laboratory/14-anchor-positioning-lab';
import { exercise as p15 } from './laboratory/15-houdini-paint-lab';
import { exercise as p16 } from './laboratory/16-aspect-ratio-master-lab';
import { exercise as p17 } from './laboratory/17-motion-path-lab';
import { exercise as p18 } from './laboratory/18-color-mix-lab';
import { exercise as p19 } from './laboratory/19-shape-outside-lab';
import { exercise as p20 } from './laboratory/20-nesting-at-rule-lab';
import { exercise as p21 } from './laboratory/21-final-audit-lab';

export const cssKA: KnowledgeArea = {
  id: 'lang-css',
  title: '02. CSS Master',
  description: 'Engenharia de estilos, Design Systems e animações de alta performance.',
  load: '40h',
  iconName: 'Palette',
  theory: lessons,
  practice: {
    html: [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21]
  },
  quizzes: quizzes
};
