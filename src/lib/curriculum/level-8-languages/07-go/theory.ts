import type { TheoryLesson } from '../../types';
import { lesson as l1 } from './theory/01-interfaces-master';
import { lesson as l2 } from './theory/02-goroutines-scheduler';
import { lesson as l10 } from './theory/10-gmp-scheduler';
import { lesson as l15 } from './theory/15-escape-analysis';

const goTitles = [
  "Fase 1: Interfaces Implícitas e o Desacoplamento de Elite",
  "Fase 1: Goroutines e o Escalonador GMP Internals",
  "Fase 1: Canais (Channels) e o Modelo CSP de Comunicação",
  "Fase 1: Select e Multiplexação de Sinais Assíncronos",
  "Fase 2: Context Package: Propagação e Cancelamento",
  "Fase 2: Sincronização: Mutex e WaitGroups de Alta Escala",
  "Fase 2: Operações Atómicas e Primitivas de Hardware",
  "Fase 2: Internals: Slices, Maps e Layout de Memória",
  "Fase 2: Error Handling: Wrapping e Diagnóstico de Erros",
  "Fase 2: Generics (Go 1.18+): Constraints e Tipagem Forte",
  "Fase 3: Defer, Panic e Recover: Padrões de Resiliência",
  "Fase 3: Escape Analysis e Gestão de Memória na Stack",
  "Fase 3: Profiling Industrial com Pprof e Trace",
  "Fase 3: Reflection e Struct Tags para Automação",
  "Fase 3: Testing: Table-driven, Benchmarks e Fuzzing",
  "Fase 3: Otimização de Compilador e Inlining",
  "Fase 4: Networking: Sockets TCP e Protocolos Binários",
  "Fase 4: API Design: Servidores HTTP e Middlewares",
  "Fase 4: CGO: Interoperabilidade com Bibliotecas C/Rust",
  "Fase 4: Cloud Native: Observabilidade e Health Checks",
  "Fase 4: Capstone: Deploy de Distributed Task Engine"
];

const sourceMap: Record<number, any> = {
  0: l1, 1: l2, 9: l10, 11: l15
};

export const lessons: TheoryLesson[] = goTitles.map((title, i) => {
  if (sourceMap[i]) {
    return {
      ...sourceMap[i],
      id: `go-m${i + 1}`,
      title: title,
      quizId: `go-mq${i + 1}`,
      enableInteractive: true
    };
  }

  return {
    id: `go-m${i + 1}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🐹 Go Master: ${title}</h2><p>Estudo aprofundado da linguagem para engenharia de sistemas, cloud native e infraestrutura escalável.</p></div>`,
    quizId: `go-mq${i + 1}`,
    enableInteractive: true
  };
});
