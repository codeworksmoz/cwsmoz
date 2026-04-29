import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p18",
  language: "html",
  title: "Projeto Master: JavaScript/Wasm Interop",
  description: "Invoque funções de alto desempenho escritas em linguagens nativas.",
  statement: "Implemente a chamada de uma função exportada de um módulo WebAssembly já instanciado.",
  isProjectPart: true,
  template: `// Supondo que 'wasmInstance' foi carregado
function callNativeLogic(a, b) {
    // Chame a função 'fast_add' do módulo exportado
    return 0;
}`,
  detailedExplanation: `
    <h3>⚙️ A Ponte de Performance</h3>
    <p>O JavaScript master serve como a "cola" do sistema. Neste nível, aprendes a passar dados pela fronteira entre o JS e o Wasm, permitindo que a tua aplicação web tenha velocidade próxima do nativo para tarefas críticas.</p>
  `,
  objectives: [
    {
      id: "wasm_call",
      description: "Aceda à função através de wasmInstance.exports.fast_add().",
      test: "exports.fast_add"
    }
  ]
};
