import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-eco-p10",
  language: "process",
  title: "Laboratório Master: Auditoria de Conformidade PSR",
  description: "Valide se a arquitetura do seu servidor respeita os padrões da indústria.",
  statement: "Identifique qual PSR é violada se o seu motor de eventos exigir uma classe concreta de Logger em vez de uma interface. Escreva 'PSR-3'.",
  isProjectPart: true,
  template: "let violated_psr = '';",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">⚖️ Auditoria de Padrões</h3>
      <p class="text-sm leading-relaxed">
        O seu motor de eventos utiliza o componente <strong>Monolog</strong>. Para que possas trocar o Monolog por qualquer outro sistema de log no futuro sem reescrever o motor, deves depender apenas da <code>LoggerInterface</code>.
      </p>
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold text-yellow-500">Missão:</p>
        <p class="text-[10px]">Identifique o número da Recomendação Padrão do PHP (PSR) que define esta interface de log universal.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "psr_audit", description: "Identificar a PSR de Logging.", test: "PSR-3" }
  ]
};
