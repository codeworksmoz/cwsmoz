import type { TheoryLesson } from '../../types';
import { lesson as l1 } from './theory/01-php8-attributes';
import { lesson as l2 } from './theory/02-strong-typing-union-types';
import { lesson as l3 } from './theory/03-constructor-promotion';
import { lesson as l4 } from './theory/04-enums-adt';
import { lesson as l5 } from './theory/05-zend-vm';
import { lesson as l6 } from './theory/06-memory-management';
import { lesson as l7 } from './theory/07-pdo-advanced';
import { lesson as l8 } from './theory/08-swoole-concurrency';
import { lesson as l9 } from './theory/09-reflection-metaprogramming';
import { lesson as l10 } from './theory/10-fibers';
import { lesson as l11 } from './theory/11-roadrunner';
import { lesson as l12 } from './theory/12-sockets';
import { lesson as l13 } from './theory/13-ffi';
import { lesson as l14 } from './theory/14-generators';
import { lesson as l18 } from './theory/18-jit-compilation';
import { lesson as l19 } from './theory/19-security';
import { lesson as l20 } from './theory/20-grpc';
import { lesson as l21 } from './theory/21-capstone';

const phpMasterTitles = [
  "Fase 1: PHP 8 Attributes: Metadados Nativos",
  "Fase 1: Sistema de Tipos: Union, Intersection e DNF",
  "Fase 1: Constructor Promotion e Imutabilidade Readonly",
  "Fase 1: Enums e Algebraic Data Types (ADT)",
  "Fase 2: Zend Engine: Opcodes, AST e Lifecycle",
  "Fase 2: Memória: Refcounting e Cycle Collection",
  "Fase 2: WeakMaps e Gestão Avançada de Memória",
  "Fase 2: PDO e Segurança: Prepared Statements e ACID",
  "Fase 2: Reflection API e Metaprogramação",
  "Fase 3: Fibers e Concorrência Cooperativa",
  "Fase 3: Swoole: Servidores Reativos de Alta Performance",
  "Fase 3: RoadRunner: PHP residente com Workers em Go",
  "Fase 3: Sockets e Streams: Comunicação Low-level",
  "Fase 3: PHP Streams: Wrappers e Filtros customizados",
  "Fase 3: FFI: Chamando Funções C nativamente",
  "Fase 4: Generators e Iteração Massiva O(1)",
  "Fase 4: JIT: Otimização de Silício e Benchmarking",
  "Fase 4: Segurança I: RCE e Desserialização Insegura",
  "Fase 4: Segurança II: OWASP, XSS, CSRF e SQLi",
  "Fase 4: gRPC e Protocolos Binários de Redes",
  "Fase 4: Capstone I: Auditoria de Performance do Motor"
];

const sourceMap: Record<number, any> = {
  0: l1, 1: l2, 2: l3, 3: l4, 4: l5, 5: l6, 7: l7, 8: l9, 9: l10, 10: l8, 11: l11, 12: l12, 14: l13, 15: l14, 16: l18, 17: l19, 19: l20, 20: l21
};

export const lessons: TheoryLesson[] = phpMasterTitles.map((title, i) => {
  if (sourceMap[i]) {
    return {
      ...sourceMap[i],
      id: `php-m${i + 1}`,
      title: title,
      quizId: `php-mq${i + 1}`,
      enableInteractive: true
    };
  }

  return {
    id: `php-m${i + 1}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🐘 PHP Master: ${title}</h2><p>Exploração profunda dos internals e da performance do PHP moderno.</p></div>`,
    quizId: `php-mq${i + 1}`,
    enableInteractive: true
  };
});
