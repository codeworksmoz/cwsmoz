import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p13",
  language: "html",
  title: "Projeto Master: Drag and Drop de Elite",
  description: "Crie interfaces interativas para organização de elementos.",
  statement: "Implemente o evento 'dragstart' para transferir o ID de um card quando ele for arrastado.",
  isProjectPart: true,
  template: `const card = document.querySelector('.user-card');

card.addEventListener('dragstart', (e) => {
    // Configure os dados de transferência aqui
});`,
  detailedExplanation: `
    <h3>🖱️ Interatividade Direta</h3>
    <p>A API de <strong>Drag and Drop</strong> nativa é poderosa mas complexa. O segredo é usar o objeto <code>dataTransfer</code> para passar informação entre o elemento arrastado e o alvo de largada (drop zone).</p>
  `,
  objectives: [
    {
      id: "set_data",
      description: "Use e.dataTransfer.setData('text/plain', card.id).",
      test: "dataTransfer.setData"
    }
  ]
};
