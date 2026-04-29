
import type { TheoryLesson } from '../../types';
import { lesson as l1 } from './theory/01-ownership-semantics';
import { lesson as l2 } from './theory/02-borrow-checker-lifetimes';

const rustTitles = [
  "Fase 1: Ownership System: As Regras de Posse de Memória",
  "Fase 1: Borrowing, Referências e o Vigilante (Borrow Checker)",
  "Fase 1: Lifetimes: Garantindo a Validade das Referências",
  "Fase 1: Structs, Enums e Pattern Matching Poderoso",
  "Fase 2: Traits: O Sistema de Polimorfismo de Custo Zero",
  "Fase 2: Generics, Monomorphization e Const Generics",
  "Fase 2: Error Handling de Elite: Result, Option e o Operador ?",
  "Fase 2: Collections Internals: Vec, String e HashMap",
  "Fase 2: Iteradores e Closures: Performance Funcional",
  "Fase 3: Smart Pointers I: Box, Rc e a Gestão de Heap",
  "Fase 3: Smart Pointers II: Arc, RefCell e Mutabilidade Interior",
  "Fase 3: Concorrência Segura: Threads, Mutex e Canais (CSP)",
  "Fase 3: Async/Await e o Ecossistema do Runtime Tokio",
  "Fase 3: Unsafe Rust: Fronteiras, Raw Pointers e FFI",
  "Fase 4: Metaprogramação: Macros Declarativas e Procedurais",
  "Fase 4: Rust Internals: MIR, LLVM e Layout de Memória",
  "Fase 4: Otimização Industrial: LTO e SIMD em Rust",
  "Fase 4: Networking: Sockets TCP/UDP e gRPC com Tonic",
  "Fase 4: Web Dev de Alta Performance: Actix e Rocket",
  "Fase 4: Embedded Rust e WebAssembly (WASM)",
  "Fase 4: Capstone: Deploy de High-Perf Storage Engine"
];

const sourceMap: Record<number, any> = {
  0: l1, 1: l2
};

export const lessons: TheoryLesson[] = rustTitles.map((title, i) => {
  if (sourceMap[i]) {
    return {
      ...sourceMap[i],
      id: `rs-m${i + 1}`,
      title: title,
      quizId: `rs-mq${i + 1}`,
      enableInteractive: true
    };
  }

  return {
    id: `rs-m${i + 1}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🦀 Rust Master: ${title}</h2><p>Estudo aprofundado da linguagem Rust para engenharia de sistemas, infraestrutura crítica e performance nativa.</p></div>`,
    quizId: `rs-mq${i + 1}`,
    enableInteractive: true
  };
});
