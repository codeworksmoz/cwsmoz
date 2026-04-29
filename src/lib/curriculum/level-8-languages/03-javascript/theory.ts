import type { TheoryLesson } from '../../types';
import { lesson as l1 } from './theory/01-prototypal-inheritance';
import { lesson as l2 } from './theory/02-event-loop-internals';
import { lesson as l3 } from './theory/03-closures-memory';
import { lesson as l4 } from './theory/04-proxies-metaprogramming';
import { lesson as l5 } from './theory/05-abort-signals';
import { lesson as l6 } from './theory/06-esm-tree-shaking';
import { lesson as l7 } from './theory/07-web-workers';
import { lesson as l8 } from './theory/08-observers-apis';
import { lesson as l9 } from './theory/09-debouncing-throttling';
import { lesson as l10 } from './theory/10-promises-internals';
import { lesson as l11 } from './theory/11-v8-engines';
import { lesson as l12 } from './theory/12-functional-currying';
import { lesson as l13 } from './theory/13-web-crypto-security';
import { lesson as l14 } from './theory/14-streams-api';
import { lesson as l15 } from './theory/15-sanitization-xss';
import { lesson as l16 } from './theory/16-service-workers';
import { lesson as l17 } from './theory/17-shadow-dom-events';
import { lesson as l18 } from './theory/18-custom-events';
import { lesson as l19 } from './theory/19-intl-api';
import { lesson as l20 } from './theory/20-history-api-routing';
import { lesson as l21 } from './theory/21-capstone-audit';

const sourceMap: Record<number, any> = {
  0: l1, 1: l2, 2: l3, 3: l4, 4: l5, 5: l6, 6: l7, 7: l8, 8: l9, 9: l10,
  10: l11, 11: l12, 12: l13, 13: l14, 14: l15, 15: l16, 16: l17, 17: l18, 
  18: l19, 19: l20, 20: l21
};

export const lessons: TheoryLesson[] = Array.from({ length: 21 }, (_, i) => {
  const baseLesson = sourceMap[i];
  return {
    ...baseLesson,
    id: `js-m${i + 1}`,
    quizId: `js-mq${i + 1}`,
    enableInteractive: true
  };
});
