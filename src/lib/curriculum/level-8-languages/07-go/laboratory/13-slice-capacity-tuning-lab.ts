import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "go-p13",
  language: "go",
  title: "Projeto Master: Otimização de Slices e Cap",
  description: "Poupe alocações de memória ao processar lotes massivos.",
  statement: "Utilize o comando 'make' com capacidade pré-alocada para criar o slice de resultados.",
  isProjectPart: true,
  template: `package main

func PreallocateResults(total int) []string {
    // Crie um slice com tamanho 0 e capacidade 'total'
    return nil
}`,
  detailedExplanation: `
    <h3>📊 Memória de Elite</h3>
    <p>Se não pré-alocares a capacidade (cap), o Go terá de criar novos arrays e copiar todos os dados cada vez que o slice crescer, causando picos de uso de CPU e pressão no Garbage Collector. Pré-alocar é uma regra de ouro em sistemas de alta performance.</p>
  `,
  objectives: [
    {
      id: "make_cap",
      description: "Utilize make([]string, 0, total).",
      test: "make([]string, 0, total)"
    }
  ]
};
