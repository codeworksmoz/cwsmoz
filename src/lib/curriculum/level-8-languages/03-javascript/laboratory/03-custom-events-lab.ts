
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p3",
  language: "html",
  title: "Projeto Master: Comunicação por Custom Events",
  description: "Desacople os componentes do seu portal usando eventos personalizados.",
  statement: "Utilize o objeto CustomEvent para disparar um sinal 'cwm:ready' com um payload de dados.",
  isProjectPart: true,
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <meta charset="UTF-8">
  <title>Codworks Master Studio</title>
</head>
<body>
  <div id="status-area">Aguardando...</div>
  <script>
    const status = document.getElementById('status-area');
    
    // Ação 1: Crie o CustomEvent com a propriedade 'detail'
    const readyEvent = new CustomEvent('cwm:ready', {
      detail: { timestamp: Date.now(), version: "1.0" }
    });

    // Ação 2: Adicione um ouvinte para esse novo evento
    window.addEventListener('cwm:ready', (e) => {
      status.textContent = "Sistema Master Pronto: " + e.detail.timestamp;
    });

    // Ação 3: Dispare o evento na janela global
    window.dispatchEvent(readyEvent);
  </script>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">📡 Arquitetura Baseada em Eventos</h3>
      <p class="text-sm">Em sistemas de alta escala, os componentes não devem conhecer os detalhes uns dos outros. Usamos <strong>Custom Events</strong> para avisar que algo aconteceu, permitindo que outros módulos reajam de forma independente.</p>
    </div>
  `,
  objectives: [
    { id: "custom_init", description: "Instanciar CustomEvent com 'detail'", test: "new CustomEvent" },
    { id: "dispatch", description: "Disparar o evento via dispatchEvent", test: "dispatchEvent" }
  ]
};
