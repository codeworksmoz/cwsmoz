
import type { PracticeExercise } from '../../types';
import { exercise as p1 } from './laboratory/01-banking-init-lab';
import { exercise as p2 } from './laboratory/02-generics-banking-lab';
import { exercise as p3 } from './laboratory/03-functional-streams-lab';
import { exercise as p4 } from './laboratory/04-custom-annotations-lab';
import { exercise as p5 } from './laboratory/05-reflection-proxy-lab';
import { exercise as p6 } from './laboratory/06-nio-socket-server-lab';
import { exercise as p7 } from './laboratory/07-concurrency-locks-lab';
import { exercise as p8 } from './laboratory/08-virtual-threads-scaling-lab';
import { exercise as p9 } from './laboratory/09-jvm-profiling-jmx-lab';
import { exercise as p10 } from './laboratory/10-reactive-flux-lab';
import { exercise as p11 } from './laboratory/11-database-l2-cache-lab';
import { exercise as p12 } from './laboratory/12-spring-security-jwt-lab';
import { exercise as p13 } from './laboratory/13-microservices-circuit-breaker-lab';
import { exercise as p14 } from './laboratory/14-unit-testing-testcontainers-lab';
import { exercise as p15 } from './laboratory/15-bytecode-instrumentation-lab';
import { exercise as p16 } from './laboratory/16-memory-offheap-lab';
import { exercise as p17 } from './laboratory/17-native-image-reflection-config-lab';
import { exercise as p18 } from './laboratory/18-sealed-classes-banking-lab';
import { exercise as p19 } from './laboratory/19-foreign-function-api-lab';
import { exercise as p20 } from './laboratory/20-garbage-collector-zgc-lab';
import { exercise as p21 } from './laboratory/21-capstone-banking-deploy-lab';

export const practice = {
  java: [
    p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,
    p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21
  ]
};
