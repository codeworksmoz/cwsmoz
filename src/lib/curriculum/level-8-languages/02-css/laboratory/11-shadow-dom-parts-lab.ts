
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p11",
  language: "html",
  title: "Projeto Master: Estilizando Shadow DOM com ::part",
  description: "Fure a barreira do encapsulamento de forma segura.",
  statement: "No seu CSS global, estilize o componente de perfil usando o pseudo-elemento ::part(action-button).",
  isProjectPart: true,
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <style>
    /* Ação 1: Estilize a 'part' exportada pelo componente */
    cwm-profile::part(action-button) {
      background: #ef4444;
      border-radius: 20px;
    }
  </style>
</head>
<body>
  <!-- Componente com Shadow DOM interno -->
  <cwm-profile></cwm-profile>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🌑 Atravessando a Sombra</h3>
      <p class="text-sm">O <code>::part</code> permite que o autor de um Web Component exponha partes específicas para serem estilizadas externamente.</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Use o seletor <code>cwm-profile::part(action-button)</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "part_css", description: "Utilizar pseudo-elemento ::part", test: "::part(action-button)" }
  ]
};
