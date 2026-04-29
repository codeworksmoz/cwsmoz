import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';

// Importação de Laboratórios Master
import { exercise as p1 } from './laboratory/01-kotlin-sync-init';
import { exercise as p2 } from './laboratory/02-extensions-delegates-lab';
import { exercise as p3 } from './laboratory/03-sealed-state-lab';
import { exercise as p4 } from './laboratory/04-functional-logic-lab';
import { exercise as p5 } from './laboratory/05-inline-performance-lab';
import { exercise as p6 } from './laboratory/06-coroutines-launch-lab';
import { exercise as p7 } from './laboratory/07-structured-concurrency-lab';
import { exercise as p8 } from './laboratory/08-flow-monitoring-lab';
import { exercise as p9 } from './laboratory/09-hot-streams-lab';
import { exercise as p10 } from './laboratory/10-channels-communication-lab';
import { exercise as p11 } from './laboratory/11-coroutine-exceptions-lab';
import { exercise as p12 } from './laboratory/12-kmp-expect-actual-lab';
import { exercise as p13 } from './laboratory/13-di-modular-engine-lab';
import { exercise as p14 } from './laboratory/14-serialization-packets-lab';
import { exercise as p15 } from './laboratory/15-ksp-codegen-lab';
import { exercise as p16 } from './laboratory/16-reflection-introspection-lab';
import { exercise as p17 } from './laboratory/17-memory-refs-lab';
import { exercise as p18 } from './laboratory/18-testing-engine-lab';
import { exercise as p19 } from './laboratory/19-api-dsl-lab';
import { exercise as p20 } from './laboratory/20-profiling-benchmarking-lab';
import { exercise as p21 } from './laboratory/21-capstone-sync-deploy-lab';

export const kotlinMaster: KnowledgeArea = {
  id: 'lang-kotlin-master',
  title: '06. Kotlin Master',
  description: 'Desenvolvimento moderno para Android e Backend robusto com Coroutines e KMP.',
  load: '45h',
  iconName: 'Smartphone',
  theory: lessons,
  practice: {
    kotlin: [
      p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,
      p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21
    ]
  },
  quizzes: quizzes
};