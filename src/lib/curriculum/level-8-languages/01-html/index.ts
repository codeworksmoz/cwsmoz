
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';

// Importação dos Laboratórios (1-21)
import { exercise as p1 } from './laboratory/01-structure-lab';
import { exercise as p2 } from './laboratory/02-landmarks-lab';
import { exercise as p3 } from './laboratory/03-seo-metadata-lab';
import { exercise as p4 } from './laboratory/04-social-meta-lab';
import { exercise as p5 } from './laboratory/05-text-hierarchy-lab';
import { exercise as p6 } from './laboratory/06-navigation-lab';
import { exercise as p7 } from './laboratory/07-identity-hooks-lab';
import { exercise as p8 } from './laboratory/08-responsive-images-lab';
import { exercise as p9 } from './laboratory/09-perf-images-lab';
import { exercise as p10 } from './laboratory/10-tables-data-lab';
import { exercise as p11 } from './laboratory/11-forms-grouping-lab';
import { exercise as p12 } from './laboratory/12-advanced-inputs-lab';
import { exercise as p13 } from './laboratory/13-constraint-validation-lab';
import { exercise as p14 } from './laboratory/14-video-vtt-lab';
import { exercise as p15 } from './laboratory/15-svg-master-lab';
import { exercise as p16 } from './laboratory/16-aria-patterns-lab';
import { exercise as p17 } from './laboratory/17-json-ld-lab';
import { exercise as p18 } from './laboratory/18-web-components-lab';
import { exercise as p19 } from './laboratory/19-shadow-dom-lab';
import { exercise as p20 } from './laboratory/20-web-workers-lab';
import { exercise as p21 } from './laboratory/21-security-audit-lab';

export const htmlKA: KnowledgeArea = {
  id: 'lang-html',
  title: '01. HTML Master',
  description: 'Arquitetura de documentos de alta complexidade e padrões de acessibilidade global.',
  load: '30h',
  iconName: 'Code',
  theory: lessons,
  practice: {
    html: [
      p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,
      p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21
    ]
  },
  quizzes: quizzes
};
