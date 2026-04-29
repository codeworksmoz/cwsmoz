import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p21",
  language: "html",
  title: "Projeto Master: Persistência com IndexedDB",
  description: "Construa uma base de dados local para grandes volumes de informação.",
  statement: "Abra uma ligação à base de dados 'CodworksDB' e crie um object store para as transações do seu projeto.",
  isProjectPart: true,
  template: `const request = indexedDB.open('CodworksDB', 1);

request.onupgradeneeded = (event) => {
    const db = event.target.result;
    // Crie o armazém de objetos aqui
};`,
  detailedExplanation: `
    <h3>🗄️ O Banco de Dados do Browser</h3>
    <p>Chegaste ao laboratório final do JavaScript Master. O <strong>IndexedDB</strong> é uma base de dados NoSQL transacional completa dentro do browser. Ela permite guardar Gigabytes de dados, pesquisar com índices e manter a aplicação funcional 100% offline.</p>
  `,
  objectives: [
    {
      id: "create_store",
      description: "Use db.createObjectStore('transactions', { keyPath: 'id' }).",
      test: "createObjectStore"
    }
  ]
};
