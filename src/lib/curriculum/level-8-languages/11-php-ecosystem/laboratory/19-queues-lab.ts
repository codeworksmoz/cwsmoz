import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-eco-p19",
  language: "php",
  title: "Projeto Master: Consumidor Resiliente com Retentativas",
  description: "Implemente a lógica de retry para o processamento de eventos.",
  statement: "Crie um loop de processamento que tente 3 vezes antes de enviar para a DLQ.",
  isProjectPart: true,
  template: `<?php

namespace App\Core;

class ResilientConsumer {
    public function consume(array $msg): void {
        $attempts = 0;
        while ($attempts < 3) {
            try {
                $this->process($msg);
                return;
            } catch (\Exception $e) {
                $attempts++;
                if ($attempts === 3) {
                    $this->moveToDLQ($msg);
                }
            }
        }
    }
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🛡️ Engenharia de Falhas</h3>
      <p class="text-sm">A rede falha. O banco falha. O seu consumidor deve ser <strong>Resiliente</strong>. Implementar uma lógica de retentativas com limite protege o sistema contra falhas temporárias.</p>
    </div>
  `,
  objectives: [
    { id: "retry_loop", description: "Implementar loop de até 3 tentativas.", test: "attempts < 3" },
    { id: "dlq_call", description: "Chamar o método moveToDLQ na falha final.", test: "moveToDLQ" }
  ]
};
