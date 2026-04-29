import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "cs-p4",
  language: "concept",
  title: "Laboratório: Ciclo de Instrução",
  description: "Entenda como a CPU processa uma ordem.",
  statement: "Qual a primeira fase do ciclo de instrução? Escreva 'Fetch'.",
  template: `let primeiraFase = "";`,
  detailedExplanation: `<h3>🔄 O Ciclo de Vida</h3><p>A CPU funciona em ciclos: Busca (Fetch), Descodifica (Decode) e Executa (Execute).</p>`,
  objectives: [
    {
      id: "obj1",
      description: "Identificar a fase inicial",
      test: "primeiraFase = \"Fetch\""
    }
  ]
};