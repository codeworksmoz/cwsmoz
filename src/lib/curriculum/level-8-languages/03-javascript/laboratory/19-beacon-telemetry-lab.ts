import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p19",
  language: "html",
  title: "Projeto Master: Telemetria com Beacon API",
  description: "Envie dados de utilização de forma fiável antes da aba fechar.",
  statement: "Utilize navigator.sendBeacon para enviar um log de fecho de sessão para o servidor.",
  isProjectPart: true,
  template: `window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        const data = JSON.stringify({ event: 'exit', time: Date.now() });
        // Envie o beacon aqui
    }
});`,
  detailedExplanation: `
    <h3>📡 Sinais de Resgate</h3>
    <p>O <code>sendBeacon</code> é a forma correcta de enviar telemetria. Ao contrário de um <code>fetch</code> normal, o browser garante que o pedido é enviado mesmo que o utilizador feche a aba imediatamente, sem atrasar o encerramento da interface.</p>
  `,
  objectives: [
    {
      id: "send_beacon",
      description: "Chame navigator.sendBeacon('/log', data).",
      test: "navigator.sendBeacon"
    }
  ]
};
