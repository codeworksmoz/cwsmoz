import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p17",
  language: "html",
  title: "Projeto Master: Shared Memory & Atomics",
  description: "Coordene a comunicação entre threads sem condições de corrida.",
  statement: "Utilize Atomics.add() para incrementar um valor num SharedArrayBuffer partilhado entre a thread principal e um Worker.",
  isProjectPart: true,
  template: `const buffer = new SharedArrayBuffer(1024);
const uint8 = new Uint8Array(buffer);

// Incremente o índice 0 de forma atómica
function incrementAtomic() {
    // Implemente aqui
}`,
  detailedExplanation: `
    <h3>☢️ Operações Atómicas</h3>
    <p>Quando múltiplas threads (Workers) acedem à mesma memória (SharedArrayBuffer), podem ocorrer conflitos. O objeto <strong>Atomics</strong> garante que as operações de leitura e escrita sejam indivisíveis, prevenindo corrupção de dados a nível de hardware.</p>
  `,
  objectives: [
    {
      id: "atomics_add",
      description: "Utilize o método Atomics.add(uint8, 0, 1).",
      test: "Atomics.add"
    }
  ]
};
