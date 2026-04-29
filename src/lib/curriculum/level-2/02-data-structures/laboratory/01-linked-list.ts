import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "ds-p1",
  language: "javascript",
  title: "Laboratório: Construindo o Nó",
  description: "Crie a base de uma Lista Ligada.",
  statement: "Complete a classe Node para aceitar um 'valor' e inicializar o ponteiro 'proximo' como null.",
  template: `class Node {
  constructor(valor) {
    this.valor = ;
    this.proximo = ;
  }
}`,
  detailedExplanation: `<h3>🔗 Anatomia do Nó</h3><p>Um nó é um objeto que contém o dado e uma referência (ponteiro) para o próximo elemento na sequência.</p>`,
  objectives: [
    { id: "obj1", description: "Atribuir o valor ao nó", test: "this.valor = valor" },
    { id: "obj2", description: "Inicializar o próximo como null", test: "this.proximo = null" }
  ]
};
