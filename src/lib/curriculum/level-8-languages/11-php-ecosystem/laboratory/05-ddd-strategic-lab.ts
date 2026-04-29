import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-eco-p5",
  language: "process",
  title: "Laboratório Master: Mapeamento de Contextos",
  description: "Desenhe as fronteiras lógicas do servidor de eventos.",
  statement: "Identifique qual componente atua como a fronteira de proteção do domínio. Escreva 'ACL'.",
  isProjectPart: true,
  template: "let component_name = '';",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">⬢ Engenharia de Fronteiras</h3>
      <p class="text-sm leading-relaxed">
        O seu servidor de eventos vai receber dados de um sistema de legado escrito em COBOL. Para que o nosso código limpo não seja contaminado pelos nomes de campos bizarros do sistema antigo, precisamos de criar uma <strong>Anti-Corruption Layer (ACL)</strong>.
      </p>
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold text-yellow-500">Missão:</p>
        <p class="text-[10px]">Identifique a sigla da camada de tradução que protege o domínio de corrupção externa para validar este marco arquitetural.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "acl_check", description: "Identificar a camada ACL.", test: "ACL" }
  ]
};
