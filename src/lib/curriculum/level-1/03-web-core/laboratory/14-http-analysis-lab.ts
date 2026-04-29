import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "web-p14",
  language: "html",
  title: "Laboratório: Analista de Protocolo",
  description: "Diagnostique o estado da comunicação web.",
  statement: "Simule a análise de uma resposta do servidor identificando o Status Code de sucesso.",
  template: `<!-- ANALISADOR DE RESPOSTA HTTP -->
<div id="inspector">
  <p>Método: GET</p>
  <p>URL: /api/v1/user</p>
  <p>Status: </p> <!-- Escreva o código de sucesso total aqui -->
</div>`,
  youtubeVideoId: "8aGhZQkoFbQ",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🕵️ Inspecionando o Tráfego</h3>
      <p>Um Engenheiro de Elite deve saber ler os sinais do servidor. O objetivo deste lab é validar o teu conhecimento sobre os códigos de estado universais.</p>
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold text-yellow-500">Missão:</p>
        <p class="text-[10px]">No campo 'Status', digita o código numérico que representa 'OK' (Sucesso total) para completar o diagnóstico.</p>
      </div>
    </div>
  `,
  objectives: [
    {
      id: "status_200",
      description: "Identificar o código de sucesso 200.",
      test: "Status: 200"
    }
  ]
};
