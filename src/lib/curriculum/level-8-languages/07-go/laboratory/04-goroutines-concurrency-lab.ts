import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "go-p4",
  language: "go",
  title: "Projeto Master: Goroutines e Paralelismo",
  description: "Execute tarefas sem bloquear o motor principal.",
  statement: "Utilize a keyword 'go' para executar a função 'RunTask' de forma assíncrona dentro de um loop.",
  isProjectPart: true,
  template: `package main

func StartEngine(tasks []Task) {
    for _, t := range tasks {
        // Lance cada tarefa numa goroutine
    }
}`,
  detailedExplanation: `
    <h3>⚡ Threads de Baixo Custo</h3>
    <p>As <strong>Goroutines</strong> são threads leves geridas pelo runtime do Go. Podes lançar milhares delas consumindo apenas alguns KB de memória cada, permitindo que o teu motor processe milhões de tarefas simultaneamente.</p>
  `,
  objectives: [
    {
      id: "go_keyword",
      description: "Utilize a palavra-chave 'go' antes da chamada da função.",
      test: "go RunTask"
    }
  ]
};
