import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p18",
  language: "html",
  title: "Projeto Master: Offline Shell",
  description: "Garanta que o seu projeto carrega mesmo sem sinal de rede.",
  statement: "No seu script principal, implemente o registo do Service Worker para ativar as capacidades de PWA.",
  isProjectPart: true,
  template: `// Registo do motor de cache
if ('serviceWorker' in navigator) {
    // Registe aqui
}`,
  detailedExplanation: `
    <h3>📶 Resiliência Master</h3>
    <p>O registo do Service Worker é o primeiro passo para criar uma Web App Progressiva (PWA). Ele permite que controles cada pedido de rede e sirvas ficheiros do cache local quando estiveres offline.</p>
  `,
  objectives: [
    {
      id: "sw_register",
      description: "Use navigator.serviceWorker.register('sw.js') no seu código.",
      hint: "navigator.serviceWorker.register('sw.js')",
      test: "serviceWorker.register"
    }
  ]
};
