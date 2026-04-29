import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p15",
  language: "html",
  title: "Projeto Master: Web Audio Feedback",
  description: "Crie sinais sonoros dinâmicos sem usar ficheiros de áudio externos.",
  statement: "Crie um AudioContext e inicialize um oscilador para emitir um 'beep' de sucesso no seu projeto.",
  isProjectPart: true,
  template: `function playSuccessSound() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // Configure o oscilador aqui
}`,
  detailedExplanation: `
    <h3>🔊 Engenharia de Som</h3>
    <p>A <strong>Web Audio API</strong> permite sintetizar sons em tempo real. Isso é muito mais performático do que carregar ficheiros MP3 para simples feedbacks de interface (UI Sounds). Podes controlar frequência, ganho e filtros programaticamente.</p>
  `,
  objectives: [
    {
      id: "audio_ctx",
      description: "Instancie o AudioContext.",
      test: "new AudioContext"
    },
    {
      id: "oscillator",
      description: "Crie um oscilador via audioCtx.createOscillator().",
      test: "createOscillator()"
    }
  ]
};
