import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "go-p2",
  language: "go",
  title: "Projeto Master: Pointer Receivers e Estado",
  description: "Gerencie o estado interno da tarefa de forma eficiente.",
  statement: "Implemente um método 'SetStatus' na struct 'EmailTask' usando um ponteiro receiver para atualizar o campo 'Status'.",
  isProjectPart: true,
  template: `package main

type EmailTask struct {
    ID     string
    Status string
}

// Implemente o método SetStatus aqui
func (e *EmailTask) SetStatus(s string) {
    
}`,
  detailedExplanation: `
    <h3>📍 Semântica de Ponteiro</h3>
    <p>Em Go, se usares um receiver de valor, o método recebe uma cópia do objeto. Para alterar o estado interno da sua tarefa (como o Status), deves usar um <strong>Pointer Receiver</strong> (<code>*EmailTask</code>).</p>
  `,
  objectives: [
    {
      id: "pointer_receiver",
      description: "Use o asterisco (*) no receiver do método.",
      test: "func (e *EmailTask)"
    }
  ]
};
