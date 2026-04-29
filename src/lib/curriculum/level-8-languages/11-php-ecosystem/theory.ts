import type { TheoryLesson } from '../../types';
import { lesson as l1 } from './theory/01-composer-master';
import { lesson as l2 } from './theory/02-phpunit-advanced';
import { lesson as l3 } from './theory/03-pest-php';
import { lesson as l4 } from './theory/04-mutation-testing';
import { lesson as l5 } from './theory/05-ddd-strategic';
import { lesson as l6 } from './theory/06-ddd-tactical';
import { lesson as l7 } from './theory/07-cqrs-event-sourcing';
import { lesson as l8 } from './theory/08-creational-patterns';
import { lesson as l9 } from './theory/09-behavioral-patterns';
import { lesson as l10 } from './theory/10-psr-standards';
import { lesson as l11 } from './theory/11-dependency-injection';
import { lesson as l12 } from './theory/12-laravel-kernel';
import { lesson as l13 } from './theory/13-symfony-kernel';
import { lesson as l14 } from './theory/14-property-hooks';
import { lesson as l15 } from './theory/15-profiling-industrial';
import { lesson as l16 } from './theory/16-caching-strategic';
import { lesson as l17 } from './theory/17-varnish-proxies';
import { lesson as l18 } from './theory/18-sharding-splitting';
import { lesson as l19 } from './theory/19-message-queues';
import { lesson as l20 } from './theory/20-php84-features';
import { lesson as l21 } from './theory/21-capstone-cloud';

const sourceMap: Record<number, any> = { 
  1: l1, 2: l2, 3: l3, 4: l4, 5: l5, 6: l6, 7: l7, 8: l8, 9: l9, 10: l10,
  11: l11, 12: l12, 13: l13, 14: l14, 15: l15, 16: l16, 17: l17, 18: l18, 
  19: l19, 20: l20, 21: l21
};

export const lessons: TheoryLesson[] = Array.from({ length: 21 }, (_, i) => {
  const idNum = i + 1;
  return {
    ...sourceMap[idNum],
    id: `php-eco-t${idNum}`,
    quizId: `php-eco-mq${idNum}`,
    enableInteractive: true
  };
});
