import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "go-p10",
  language: "go",
  title: "Projeto Master: Operações Atómicas",
  description: "Sincronização de contadores de ultra-alta performance.",
  statement: "Substitua o Mutex do Lab 8 pela função 'atomic.AddInt64' para incrementar o contador de tarefas de forma mais eficiente.",
  isProjectPart: true,
  template: `package main

import "sync/atomic"

type FastEngine struct {
    TaskCount int64
}

func (e *FastEngine) Increment() {
    // Use atomic para incrementar aqui
}`,
  detailedExplanation: `
    <h3>⚛️ Primitivas de Hardware</h3>
    <p>Para contadores simples, as operações atómicas são muito mais rápidas que Mutexes, pois utilizam instruções diretas da CPU (como o LOCK XADD em x86), evitando o overhead de pausar e retomar threads.</p>
  `,
  objectives: [
    {
      id: "atomic_add",
      description: "Utilize atomic.AddInt64(&e.TaskCount, 1).",
      test: "atomic.AddInt64"
    }
  ]
};
