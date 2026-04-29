import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-eco-p15",
  language: "process",
  title: "Laboratório Master: Diagnóstico de Hotspots",
  description: "Analise um perfil de performance e identifique o gargalo de I/O.",
  statement: "Identifique a métrica que indica o tempo total de espera do utilizador. Escreva 'Wall Time'.",
  isProjectPart: true,
  template: "let metric_name = '';",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔬 Auditoria de Performance</h3>
      <p class="text-sm leading-relaxed">
        Imagine que o seu servidor de eventos está a demorar 500ms para processar um dispatch. No perfil do Blackfire, vês que o <button>CPU Time</button> é de apenas 10ms.
      </p>
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold text-yellow-500">Missão:</p>
        <p class="text-[10px]">Identifique o nome técnico da métrica de tempo total de relógio para validar a sua capacidade de diagnóstico de I/O.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "metric", description: "Identificar a métrica Wall Time.", test: "Wall Time" }
  ]
};
