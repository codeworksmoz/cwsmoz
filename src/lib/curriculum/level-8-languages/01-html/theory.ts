import { lesson as l1 } from './theory/01-structure';
import { lesson as l2 } from './theory/02-meta-seo';
import { lesson as l3 } from './theory/03-semantics-accessibility';
import { lesson as l4 } from './theory/04-text-hierarchy-navigation';
import { lesson as l5 } from './theory/05-identity-attributes';
import { lesson as l6 } from './theory/06-responsive-images';
import { lesson as l7 } from './theory/07-tables-data';
import { lesson as l8 } from './theory/08-forms-master';
import { lesson as l9 } from './theory/09-constraint-validation';
import { lesson as l10 } from './theory/10-multimedia-vtt';
import { lesson as l11 } from './theory/11-svg-optimization';
import { lesson as l12 } from './theory/12-aria-deep-dive';
import { lesson as l13 } from './theory/13-microdata-jsonld';
import { lesson as l14 } from './theory/14-canvas-engineering';
import { lesson as l15 } from './theory/15-web-components-master';
import { lesson as l16 } from './theory/16-shadow-dom';
import { lesson as l17 } from './theory/17-drag-drop-api';
import { lesson as l18 } from './theory/18-storage-persistence';
import { lesson as l19 } from './theory/19-web-workers';
import { lesson as l20 } from './theory/20-history-api-routing';
import { lesson as l21 } from './theory/21-security-storage';

import type { TheoryLesson } from '../../../types';

const sourceMap: Record<number, any> = {
  1: l1, 2: l2, 3: l3, 4: l4, 5: l5, 6: l6, 7: l7, 8: l8, 9: l9, 10: l10,
  11: l11, 12: l12, 13: l13, 14: l14, 15: l15, 16: l16, 17: l17, 18: l18, 19: l19, 20: l20, 21: l21
};

export const lessons: TheoryLesson[] = Array.from({ length: 21 }, (_, i) => {
  const idNum = i + 1;
  return {
    ...sourceMap[idNum],
    id: `html-m${idNum}`,
    quizId: `html-mq${idNum}`,
    enableInteractive: true
  };
});
