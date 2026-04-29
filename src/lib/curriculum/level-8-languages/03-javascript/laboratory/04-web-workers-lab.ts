import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p4",
  language: "html",
  title: "Projeto Master: Web Workers e Paralelismo",
  description: "Mova cálculos pesados para fora da thread principal da interface.",
  statement: "Implemente a inicialização de um Web Worker e o envio de uma mensagem de teste.",
  isProjectPart: true,
  template: `// No seu script master
if (window.Worker) {
    // Crie o worker apontando para 'worker.js'
    // Envie a mensagem "START_PROCESS"
}`,
  detailedExplanation: `
    <h3>🧵 Multithreading no Browser</h3>
    <p>JavaScript corre numa única thread. Se fizeres um cálculo de 2 segundos, o site "congela". Web Workers permitem correr código em paralelo, mantendo a interface suave a 60 FPS.</p>
  `,
  objectives: [
    {
      id: "worker_init",
      description: "Instancie a classe Worker.",
      hint: "const myWorker = new Worker('worker.js');",
      test: "new Worker"
    },
    {
      id: "worker_post",
      description: "Use o método postMessage() para enviar dados ao worker.",
      hint: "myWorker.postMessage('START_PROCESS')",
      test: "postMessage"
    }
  ]
};
