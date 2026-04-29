import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "go-p18",
  language: "go",
  title: "Projeto Master: Reflection e Struct Tags",
  description: "Transforme metadados em comportamento dinâmico.",
  statement: "Adicione uma Struct Tag 'json' ao campo 'ID' para que ele apareça como 'task_id' na serialização.",
  isProjectPart: true,
  template: `package main

type TaskInfo struct {
    ID   string // Adicione a tag aqui
    Name string
}`,
  detailedExplanation: `
    <h3>🏷️ Metadados de Runtime</h3>
    <p>Struct Tags permitem anexar informação extra aos campos que podem ser lidos via <strong>Reflection</strong>. É assim que bibliotecas de JSON, ORM e validação funcionam no Go.</p>
  `,
  objectives: [
    {
      id: "json_tag",
      description: "Utilize a tag `json:\"task_id\"`.",
      test: "json:\"task_id\""
    }
  ]
};
