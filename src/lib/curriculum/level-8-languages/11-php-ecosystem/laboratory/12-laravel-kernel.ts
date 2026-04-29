import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-eco-p12",
  language: "process",
  title: "Laboratório Master: Auditoria do Laravel Request Lifecycle",
  description: "Diagnostique a ordem de execução do framework.",
  statement: "Identifique qual componente é responsável por carregar os ficheiros de rota do projeto. Escreva 'RouteServiceProvider'.",
  isProjectPart: true,
  template: "let component_name = '';",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔬 Engenharia de Framework</h3>
      <p class="text-sm leading-relaxed">
        Como um Engenheiro Master, deves saber que as rotas não surgem por magia. Existe um Provider específico que lê os ficheiros em <code>routes/*.php</code> e os registra no Router global durante o boot do Kernel.
      </p>
    </div>
  `,
  objectives: [
    { id: "provider", description: "Identificar o Service Provider de Rotas.", test: "RouteServiceProvider" }
  ]
};
