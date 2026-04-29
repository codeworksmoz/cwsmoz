import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "go-p9",
  language: "go",
  title: "Projeto Master: WaitGroups e Sincronia de Grupo",
  description: "Aguarde pela conclusão de um lote de tarefas.",
  statement: "Utilize 'sync.WaitGroup' para garantir que a função principal não termine antes de todas as tarefas do lote serem processadas.",
  isProjectPart: true,
  template: `package main

import "sync"

func ProcessBatch(tasks []Task) {
    var wg sync.WaitGroup
    for _, t := range tasks {
        wg.Add(1)
        go func(tk Task) {
            defer wg.Done()
            tk.Execute()
        }(t)
    }
    // Aguarde aqui
}`,
  detailedExplanation: `
    <h3>🤝 Barreiras de Sincronização</h3>
    <p>O <strong>WaitGroup</strong> é um contador que permite bloquear a execução até que um conjunto de goroutines termine o seu trabalho. É essencial para fechar canais ou consolidar resultados de um processamento paralelo.</p>
  `,
  objectives: [
    {
      id: "wg_wait",
      description: "Chame o método Wait() após o loop.",
      test: "wg.Wait()"
    }
  ]
};
