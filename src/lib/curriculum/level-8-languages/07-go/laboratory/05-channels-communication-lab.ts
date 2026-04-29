import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "go-p5",
  language: "go",
  title: "Projeto Master: Canais de Comunicação",
  description: "Passe resultados de tarefas de volta para o motor de forma segura.",
  statement: "Crie um canal de strings (chan string) e envie o ID da tarefa concluída para ele.",
  isProjectPart: true,
  template: `package main

func Worker(t Task, results chan string) {
    t.Execute()
    // Envie o ID "DONE" para o canal
}`,
  detailedExplanation: `
    <h3>📦 Pipes Seguros</h3>
    <p>Em Go, não partilhamos memória para comunicar; comunicamos para partilhar memória. Os <strong>Channels</strong> são os túneis seguros que permitem mover dados entre goroutines sem locks manuais complexos.</p>
  `,
  objectives: [
    {
      id: "chan_send",
      description: "Use o operador de seta (<-) para enviar dados ao canal.",
      test: "results <-"
    }
  ]
};
