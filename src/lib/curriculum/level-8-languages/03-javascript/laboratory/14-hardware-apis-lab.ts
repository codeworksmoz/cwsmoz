import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p14",
  language: "html",
  title: "Projeto Master: Adaptive UI com Hardware APIs",
  description: "Adapte o comportamento do site baseando-se no estado do dispositivo.",
  statement: "Utilize a Battery Status API para detetar se o dispositivo está a carregar e mude uma variável CSS no seu script.",
  isProjectPart: true,
  template: `async function checkBattery() {
    const battery = await navigator.getBattery();
    // Se battery.charging for true, mude a cor do tema
}`,
  detailedExplanation: `
    <h3>🔋 Consciência de Dispositivo</h3>
    <p>Engenheiros de elite criam sites que respeitam o hardware do utilizador. Se a bateria está baixa, podes desativar animações pesadas. Se o utilizador está em 'Data Saver' (Network Information API), podes carregar imagens de menor resolução.</p>
  `,
  objectives: [
    {
      id: "get_battery",
      description: "Chame navigator.getBattery().",
      test: "navigator.getBattery()"
    }
  ]
};
