import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "go-p16",
  language: "go",
  title: "Projeto Master: Escape Analysis e Performance",
  description: "Entenda onde os teus dados vivem na memória.",
  statement: "Identifique qual das funções abaixo faz a variável 'fugir' (escape) para o Heap. Escreva o nome da função ('A' ou 'B').",
  isProjectPart: true,
  template: `// Função A: Retorna o valor
func A() int {
    x := 10
    return x
}

// Função B: Retorna o endereço
func B() *int {
    x := 20
    return &x
}

const functionThatEscapes = "";`,
  detailedExplanation: `
    <h3>🧠 Stack vs Heap</h3>
    <p>O compilador do Go é inteligente. Se ele deteta que um dado é usado apenas dentro da função, coloca-o na <strong>Stack</strong> (limpeza automática, ultra-rápida). Se retornas o endereço (ponteiro), o dado deve viver no <strong>Heap</strong>, o que exige trabalho do Garbage Collector.</p>
  `,
  objectives: [
    {
      id: "escape_id",
      description: "Aponte a função B como a que escapa para o Heap.",
      test: "functionThatEscapes = \"B\""
    }
  ]
};
