import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "go-p12",
  language: "go",
  title: "Projeto Master: Generics e Task Registry",
  description: "Crie coleções de tarefas com segurança de tipos.",
  statement: "Defina uma struct genérica 'TaskRegistry[T any]' que contenha um map de tarefas do tipo T.",
  isProjectPart: true,
  template: `package main

// Defina o registro genérico aqui
type TaskRegistry[T any] struct {
    Items map[string]T
}`,
  detailedExplanation: `
    <h3>🧩 Flexibilidade Estática</h3>
    <p>Com a introdução de <strong>Generics</strong> no Go 1.18, podemos criar componentes reutilizáveis (como registries, stacks ou listas ligadas) que funcionam com qualquer tipo, mantendo a performance do código compilado nativo.</p>
  `,
  objectives: [
    {
      id: "generics_syntax",
      description: "Utilize a sintaxe [T any] na definição da struct.",
      test: "[T any]"
    }
  ]
};
