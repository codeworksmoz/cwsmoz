import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p1-js",
  language: "javascript",
  title: "Lab JS: Variáveis e Tipos",
  description: "Prática fundamental de armazenamento de dados.",
  statement: "Crie uma variável 'nome' (string) e uma 'idade' (number).",
  template: "let nome = '';\nlet idade = 0;",
  detailedExplanation: "<h3>📦 Caixas de Memória</h3><p>Use 'let' para variáveis que mudam e entenda a diferença entre aspas para texto e números puros.</p>",
  objectives: [
    { id: "obj1", description: "Definir nome", test: "nome =" },
    { id: "obj2", description: "Definir idade", test: "idade =" }
  ]
};