
import type { PracticeExercise } from '../../types';

export const exercise: PracticeExercise = {
  id: "dt-p1",
  language: "tool",
  title: "Laboratório: Produtividade no VS Code",
  description: "Aprende os atalhos essenciais.",
  statement: "Qual atalho é usado para comentar uma linha selecionada? Escreva 'Ctrl+/' ou 'Cmd+/'.",
  template: "let atalho = '';",
  detailedExplanation: `
    <h3>⚡ Atalhos de Teclado</h3>
    <p>Dominar atalhos permite que mantenhas as mãos no teclado e aumentes a tua velocidade de escrita de código.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Identificar o atalho de comentário",
      test: "atalho.includes('/')"
    }
  ]
};
