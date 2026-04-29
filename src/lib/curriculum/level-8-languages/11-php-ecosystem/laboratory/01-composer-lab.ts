import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-eco-p1",
  language: "php",
  title: "Projeto Master: Otimização Industrial de Autoload",
  description: "Configure o carregamento de classes para performance de elite e resiliência.",
  statement: "Utilize a configuração de otimização de autoloader no composer.json simulado para garantir o estado 'authoritative'.",
  isProjectPart: true,
  template: `{
  "name": "cwm/event-server",
  "description": "High-Scale Event Dispatcher",
  "config": {
    "optimize-autoloader": true,
    "classmap-authoritative": 
  }
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">⚙️ Tuning de Produção: Autoloader Master</h3>
      <p class="text-sm">O objetivo é garantir que o PHP nunca mais faça um <code>file_exists</code> para encontrar uma classe. Isto reduz a latência de arranque da aplicação drasticamente e protege o servidor.</p>
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold text-yellow-500">Missão:</p>
        <p class="text-[10px]">No campo <code>"classmap-authoritative"</code>, define o valor booleano correto para ativar esta proteção em produção.</p>
      </div>
    </div>
  `,
  objectives: [
    { 
      id: "opt_auth", 
      description: "Ativar classmap-authoritative definindo como true.", 
      test: "\"classmap-authoritative\": true" 
    }
  ]
};
