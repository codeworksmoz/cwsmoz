import { lesson as l1 } from './theory/01-selectors';
import { lesson as l2 } from './theory/02-cascade-layers';
import { lesson as l3 } from './theory/03-custom-properties';
import { lesson as l4 } from './theory/04-logical-properties';
import { lesson as l5 } from './theory/05-flexbox-mastery';
import { lesson as l6 } from './theory/06-grid-master';
import { lesson as l7 } from './theory/07-container-queries';
import { lesson as l8 } from './theory/08-css-math';
import { lesson as l9 } from './theory/09-variable-fonts';
import { lesson as l10 } from './theory/10-perf-animations';
import { lesson as l11 } from './theory/11-compositing-blending';
import { lesson as l12 } from './theory/12-glassmorphism-filters';
import { lesson as l13 } from './theory/13-color-spaces-oklch';
import { lesson as l14 } from './theory/14-css-architectures';
import { lesson as l15 } from './theory/15-postcss-tooling';
import { lesson as l16 } from './theory/16-performance-audits';
import { lesson as l17 } from './theory/17-houdini-api';
import { lesson as l18 } from './theory/18-pseudo-elements-advanced';
import { lesson as l19 } from './theory/19-scroll-animations';
import { lesson as l20 } from './theory/20-anchor-positioning';
import { lesson as l21 } from './theory/21-capstone-final';

import type { TheoryLesson } from '../../types';

const sourceMap: Record<number, any> = {
  1: l1, 2: l2, 3: l3, 4: l4, 5: l5, 6: l6, 7: l7, 8: l8, 9: l9, 10: l10,
  11: l11, 12: l12, 13: l13, 14: l14, 15: l15, 16: l16, 17: l17, 18: l18, 19: l19, 20: l20, 21: l21
};

export const lessons: TheoryLesson[] = Array.from({ length: 21 }, (_, i) => {
  const idNum = i + 1;
  const baseLesson = sourceMap[idNum];

  return {
    ...baseLesson,
    id: `css-m${idNum}`,
    quizId: `css-mq${idNum}`,
    enableInteractive: true
  };
});