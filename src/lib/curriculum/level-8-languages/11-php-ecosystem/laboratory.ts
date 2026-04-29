import type { PracticeExercise } from '../../types';
import { exercise as p1 } from './laboratory/01-composer-lab';
import { exercise as p2 } from './laboratory/02-phpunit-mocks-lab';
import { exercise as p4 } from './laboratory/04-mutation-testing-lab';
import { exercise as p5 } from './laboratory/05-ddd-strategic-lab';
import { exercise as p6 } from './laboratory/06-ddd-tactical-lab';
import { exercise as p7 } from './laboratory/07-event-store-lab';
import { exercise as p8 } from './laboratory/08-factory-method-lab';
import { exercise as p9 } from './laboratory/09-strategy-pattern-lab';
import { exercise as p10 } from './laboratory/10-psr-compliance-lab';
import { exercise as p11 } from './laboratory/11-dependency-injection';
import { exercise as p12 } from './laboratory/12-laravel-kernel';
import { exercise as p13 } from './laboratory/13-symfony-kernel';
import { exercise as p14 } from './laboratory/14-property-hooks-lab';
import { exercise as p15 } from './laboratory/15-profiling-lab';
import { exercise as p16 } from './laboratory/16-caching-lab';
import { exercise as p17 } from './laboratory/17-varnish-lab';
import { exercise as p18 } from './laboratory/18-sharding-lab';
import { exercise as p19 } from './laboratory/19-queues-lab';
import { exercise as p20 } from './laboratory/20-php84-lab';
import { exercise as p21 } from './laboratory/21-capstone-lab';

export const practice = {
  php: [
    p1, p2, 
    { id: "php-eco-p3", title: "Pest Tests", language: "php", description: "...", statement: "...", isProjectPart: true, template: "<?php", detailedExplanation: "...", objectives: [{ id: "obj", description: "...", test: "expect" }] },
    p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21
  ]
};
