import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';

// Importação dos Laboratórios Reais
import { exercise as p1 } from './laboratory/01-distributed-worker-init';
import { exercise as p2 } from './laboratory/02-method-receivers-lab';
import { exercise as p3 } from './laboratory/03-implicit-interfaces-lab';
import { exercise as p4 } from './laboratory/04-goroutines-concurrency-lab';
import { exercise as p5 } from './laboratory/05-channels-communication-lab';
import { exercise as p6 } from './laboratory/06-select-multiplexing-lab';
import { exercise as p7 } from './laboratory/07-context-cancellation-lab';
import { exercise as p8 } from './laboratory/08-mutex-sync-lab';
import { exercise as p9 } from './laboratory/09-waitgroups-coordination-lab';
import { exercise as p10 } from './laboratory/10-atomic-performance-lab';
import { exercise as p11 } from './laboratory/11-error-wrapping-lab';
import { exercise as p12 } from './laboratory/12-generics-engine-lab';
import { exercise as p13 } from './laboratory/13-slice-capacity-tuning-lab';
import { exercise as p14 } from './laboratory/14-defer-resource-cleanup-lab';
import { exercise as p15 } from './laboratory/15-panic-recover-resilience-lab';
import { exercise as p16 } from './laboratory/16-escape-analysis-stack-lab';
import { exercise as p17 } from './laboratory/17-pprof-bottleneck-lab';
import { exercise as p18 } from './laboratory/18-reflection-struct-tags-lab';
import { exercise as p19 } from './laboratory/19-tcp-server-low-level-lab';
import { exercise as p20 } from './laboratory/20-cgo-interop-lab';
import { exercise as p21 } from './laboratory/21-capstone-distributed-deploy-lab';

export const goMaster: KnowledgeArea = {
  id: 'lang-go-master',
  title: '07. Go Master',
  description: 'Simplicidade, concorrência nativa e sistemas de cloud de alta performance.',
  load: '40h',
  iconName: 'Cloud',
  theory: lessons,
  practice: {
    go: [
      p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,
      p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21
    ]
  },
  quizzes: quizzes
};
