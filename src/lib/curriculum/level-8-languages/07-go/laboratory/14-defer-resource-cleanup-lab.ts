import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "go-p14",
  language: "go",
  title: "Projeto Master: Defer e Gestão de Recursos",
  description: "Garanta o fecho de logs e conexões.",
  statement: "Utilize 'defer' para garantir que o ficheiro de log é fechado, independentemente de erros durante a execução.",
  isProjectPart: true,
  template: `package main

import "os"

func LogTask(id string) {
    f, _ := os.OpenFile("task.log", os.O_APPEND, 0666)
    // Agende o fecho do ficheiro aqui
    
    f.WriteString("Processando: " + id)
}`,
  detailedExplanation: `
    <h3>🧹 Limpeza Garantida</h3>
    <p>O <code>defer</code> agenda uma função para ser executada no exato momento em que o método atual retorna. É a forma mais robusta de garantir que ficheiros, sockets e mutexes são libertados, prevenindo fugas de recursos (leaks).</p>
  `,
  objectives: [
    {
      id: "defer_call",
      description: "Utilize defer f.Close().",
      test: "defer f.Close()"
    }
  ]
};
