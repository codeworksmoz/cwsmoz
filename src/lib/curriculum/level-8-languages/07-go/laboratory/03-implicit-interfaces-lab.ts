import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "go-p3",
  language: "go",
  title: "Projeto Master: Satisfação Implícita",
  description: "Desacople o motor de execução da implementação das tarefas.",
  statement: "Crie uma função 'RunTask' que aceite a interface 'Task' definida no Lab 1 e invoque o seu método 'Execute'.",
  isProjectPart: true,
  template: `package main

import "fmt"

func RunTask(t Task) {
    // Invoque o método Execute e trate o erro
    err := t.Execute()
    if err != nil {
        fmt.Println("Erro:", err)
    }
}`,
  detailedExplanation: `
    <h3>🔗 Duck Typing Estático</h3>
    <p>O segredo do Go é que tu não dizes que uma classe implementa uma interface. Se a struct tem os métodos, ela JÁ É aquela interface. Isto permite que o seu motor execute qualquer <code>Task</code> sem saber se é um email, um log ou um cálculo pesado.</p>
  `,
  objectives: [
    {
      id: "interface_usage",
      description: "A função deve aceitar o tipo 'Task' (interface).",
      test: "RunTask(t Task)"
    }
  ]
};
