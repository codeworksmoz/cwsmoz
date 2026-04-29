import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "go-p8",
  language: "go",
  title: "Projeto Master: Mutex e Estado Partilhado",
  description: "Garanta a integridade do contador de tarefas.",
  statement: "Utilize um 'sync.Mutex' para proteger o incremento da variável 'TaskCount' em ambiente concorrente.",
  isProjectPart: true,
  template: `package main

import "sync"

type Engine struct {
    mu        sync.Mutex
    TaskCount int
}

func (e *Engine) Increment() {
    // Proteja o incremento aqui
    e.TaskCount++
}`,
  detailedExplanation: `
    <h3>🔒 Exclusão Mútua</h3>
    <p>Embora canais sejam preferíveis, às vezes precisamos de estado partilhado na memória. O <strong>Mutex</strong> garante que apenas uma goroutine aceda à variável por vez, prevenindo <i>Data Races</i> fatais.</p>
  `,
  objectives: [
    {
      id: "mutex_lock",
      description: "Chame mu.Lock() e mu.Unlock() (preferencialmente com defer).",
      test: "mu.Lock()"
    }
  ]
};
