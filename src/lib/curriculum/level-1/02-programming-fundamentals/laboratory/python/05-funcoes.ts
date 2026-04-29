import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p5-py",
  language: "python",
  title: "Lab Python: Definindo Funções",
  description: "Uso da palavra-chave def e indentação.",
  statement: "Cria uma função 'somar' que recebe 'a' e 'b' e retorna a soma deles.",
  template: `# Define a função somar abaixo
def somar(a, b):
    pass`,
  detailedExplanation: `
    <h3>🐍 Funções em Python</h3>
    <p>Em Python, usamos <code>def</code> para definir funções. A indentação (4 espaços) é obrigatória para definir o que está dentro da função.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "A função deve retornar 15 para as entradas 10 e 5",
      hint: "return a + b",
      test: "somar(10, 5) == 15"
    }
  ]
};