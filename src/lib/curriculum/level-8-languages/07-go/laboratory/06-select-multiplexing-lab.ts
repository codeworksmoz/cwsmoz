import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "go-p6",
  language: "go",
  title: "Projeto Master: Select e Multiplexação",
  description: "Gerencie múltiplos canais e timeouts simultaneamente.",
  statement: "Utilize a estrutura 'select' para ler do canal 'results' ou disparar um timeout após 500ms.",
  isProjectPart: true,
  template: `package main

import (
    "fmt"
    "time"
)

func Monitor(results chan string) {
    select {
    case res := <-results:
        fmt.Println("Resultado:", res)
    // Adicione o caso de timeout aqui
    }
}`,
  detailedExplanation: `
    <h3>🚦 O Semáforo de Canais</h3>
    <p>O <code>select</code> permite que uma goroutine espere por múltiplas operações de comunicação. É a ferramenta definitiva para implementar timeouts e cancelamentos em sistemas distribuídos de nuvem.</p>
  `,
  objectives: [
    {
      id: "select_timeout",
      description: "Utilize time.After(500 * time.Millisecond) no select.",
      test: "case <-time.After"
    }
  ]
};
