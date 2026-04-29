import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p1-py",
  language: "python",
  title: "Lab Python: Variáveis e Tipos",
  description: "Declaração dinâmica em Python.",
  statement: "Crie as variáveis 'nome' e 'idade' com valores apropriados.",
  template: "nome = ''\nidade = 0",
  detailedExplanation: "<h3>🐍 Pythonic Way</h3><p>Em Python não precisamos de palavras-chave como let ou var. A atribuição define o tipo.</p>",
  objectives: [
    { id: "obj1", description: "Variável nome", test: "nome =" },
    { id: "obj2", description: "Variável idade", test: "idade =" }
  ]
};