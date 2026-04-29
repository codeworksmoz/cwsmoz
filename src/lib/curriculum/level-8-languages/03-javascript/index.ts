
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';

// Importação dos Laboratórios Reais (1-21)
import { exercise as p1 } from './laboratory/01-interactivity-lab';
import { exercise as p2 } from './laboratory/02-mutation-observer-lab';
import { exercise as p3 } from './laboratory/03-custom-events-lab';
import { exercise as p4 } from './laboratory/04-web-workers-lab';
import { exercise as p5 } from './laboratory/05-abort-controller-lab';
import { exercise as p6 } from './laboratory/06-proxy-validation-lab';
import { exercise as p7 } from './laboratory/07-intl-api-lab';
import { exercise as p8 } from './laboratory/08-intersection-observer-lab';
import { exercise as p9 } from './laboratory/09-sanitizer-api-lab';
import { exercise as p10 } from './laboratory/10-streams-api-lab';
import { exercise as p11 } from './laboratory/11-web-crypto-lab';
import { exercise as p12 } from './laboratory/12-navigation-state-lab';
import { exercise as p13 } from './laboratory/13-drag-drop-lab';
import { exercise as p14 } from './laboratory/14-hardware-apis-lab';
import { exercise as p15 } from './laboratory/15-web-audio-feedback-lab';
import { exercise as p16 } from './laboratory/16-permissions-api-lab';
import { exercise as p17 } from './laboratory/17-atomics-buffer-lab';
import { exercise as p18 } from './laboratory/18-wasm-interop-lab';
import { exercise as p19 } from './laboratory/19-beacon-telemetry-lab';
import { exercise as p20 } from './laboratory/20-trusted-types-lab';
import { exercise as p21 } from './laboratory/21-indexeddb-persistent-lab';

export const javascriptKA: KnowledgeArea = {
  id: 'lang-javascript',
  title: '03. JavaScript Master',
  description: 'Profundidade técnica na linguagem da web: de motores V8 a metaprogramação e segurança avançada.',
  load: '50h',
  iconName: 'Zap',
  theory: lessons,
  practice: {
    html: [
      p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,
      p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21
    ]
  },
  quizzes: quizzes
};
