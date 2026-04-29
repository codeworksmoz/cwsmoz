import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "go-p15",
  language: "go",
  title: "Projeto Master: Panic e Recover - Motor Imune",
  description: "Evite que o motor vá abaixo por causa de uma tarefa mal comportada.",
  statement: "Implemente um mecanismo de 'recover' dentro da goroutine do worker para capturar panics inesperados.",
  isProjectPart: true,
  template: `package main

import "fmt"

func SafeWorker(t Task) {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recuperado de erro fatal:", r)
        }
    }()
    
    t.Execute()
}`,
  detailedExplanation: `
    <h3>🛡️ Resiliência Master</h3>
    <p>Um <code>panic</code> em Go para todo o programa. No entanto, o <code>recover</code> permite-nos "voltar dos mortos". Num motor de tarefas, deves usar isto para garantir que um erro de memória numa tarefa não mate todo o cluster de processamento.</p>
  `,
  objectives: [
    {
      id: "recover_call",
      description: "Utilize o método recover() dentro de um bloco defer.",
      test: "recover()"
    }
  ]
};
