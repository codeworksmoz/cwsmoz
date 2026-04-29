import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "go-p11",
  language: "go",
  title: "Projeto Master: Error Wrapping e Diagnóstico",
  description: "Crie erros informativos com contexto.",
  statement: "Utilize 'fmt.Errorf' com o verbo '%w' para adicionar contexto a um erro de rede no motor.",
  isProjectPart: true,
  template: `package main

import (
    "errors"
    "fmt"
)

var ErrNetwork = errors.New("falha de rede")

func FetchTask() error {
    // Retorne o ErrNetwork embrulhado com a mensagem "falha ao buscar"
    return nil
}`,
  detailedExplanation: `
    <h3>🎁 Embrulhando o Erro</h3>
    <p>Go 1.13+ introduziu o <strong>Error Wrapping</strong>. Usar <code>%w</code> permite que adiciones contexto técnico (ex: qual ID de tarefa falhou) enquanto permites que o código de nível superior ainda consiga identificar o tipo de erro original usando <code>errors.Is</code>.</p>
  `,
  objectives: [
    {
      id: "error_wrap",
      description: "Utilize fmt.Errorf(\"...: %w\", err).",
      test: "%w"
    }
  ]
};
