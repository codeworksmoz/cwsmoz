import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "go-p1",
  language: "go",
  title: "Projeto Master Go: Distributed Task Engine",
  description: "Inicie um motor de tarefas distribuídas.",
  statement: "Defina uma interface 'Task' com um método 'Execute() error' e uma struct 'EmailTask' que a implemente.",
  isProjectPart: true,
  template: `package main

// Defina a interface e a struct aqui
type Task interface {
    
}

type EmailTask struct {
    ID string
}

func (e EmailTask) Execute() error {
    return nil
}`,
  detailedExplanation: `
    <h3>🚀 Cloud Native Engineering</h3>
    <p>Vais construir um motor de execução de tarefas em larga escala. Usar interfaces permite que o teu motor execute qualquer tipo de trabalho (Email, Log, DB) sem conhecer os detalhes de implementação de cada um.</p>
  `,
  objectives: [
    {
      id: "interface_def",
      description: "Defina o método Execute() error na interface Task.",
      hint: "Execute() error",
      test: "Execute() error"
    }
  ]
};
