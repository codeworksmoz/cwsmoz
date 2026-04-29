import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "go-p7",
  language: "go",
  title: "Projeto Master: Context e Cancelamento",
  description: "Propague sinais de paragem por toda a árvore de execução.",
  statement: "Implemente a verificação de cancelamento dentro da função 'Execute' usando 'ctx.Done()'.",
  isProjectPart: true,
  template: `package main

import "context"

func ExecuteWithContext(ctx context.Context) error {
    select {
    case <-ctx.Done():
        return ctx.Err()
    default:
        // Continua execução
        return nil
    }
}`,
  detailedExplanation: `
    <h3>🛡️ Propagação de Sinais</h3>
    <p>O pacote <code>context</code> é o padrão em Go para gerir cancelamentos e deadlines. Ele garante que, se um utilizador cancelar um pedido, todas as goroutines filhas parem de trabalhar imediatamente, poupando recursos.</p>
  `,
  objectives: [
    {
      id: "ctx_done",
      description: "Verifique o canal Done() do contexto.",
      test: "case <-ctx.Done()"
    }
  ]
};
