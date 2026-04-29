import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p15",
  language: "html",
  title: "Projeto Master: Ponte WebAssembly",
  description: "Instancie módulos binários de alta performance diretamente do HTML.",
  statement: "Implemente o carregamento de um módulo Wasm fictício utilizando a API nativa WebAssembly.instantiateStreaming.",
  isProjectPart: true,
  template: `// No seu script de inicialização
async function initWasm() {
    const response = await fetch('logic.wasm');
    // Carregue o módulo binário aqui
}`,
  detailedExplanation: `
    <h3>⚙️ O Binário na Web</h3>
    <p>WebAssembly (Wasm) permite que tragas algoritmos complexos escritos em C ou Rust para o browser. O HTML master serve como o 'orquestrador' que baixa e ativa este motor binário.</p>
  `,
  objectives: [
    {
      id: "wasm_init",
      description: "Utilize o método WebAssembly.instantiate no seu script.",
      hint: "WebAssembly.instantiate(response)",
      test: "WebAssembly.instantiate"
    }
  ]
};
