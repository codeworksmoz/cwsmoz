import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-eco-p9",
  language: "php",
  title: "Projeto Master: Implementação de Strategy para Logs Industriais",
  description: "Crie um sistema de logs flexível que se adapta ao ambiente.",
  statement: "Implemente a interface 'LoggerStrategy' e utilize-a no motor para alternar entre 'FileLog' e 'CloudLog'.",
  isProjectPart: true,
  template: `<?php

namespace App\Core\Log;

// 1. Defina a interface da Estratégia
interface LoggerStrategy {
    public function write(string $message): void;
}

class FileLog implements LoggerStrategy {
    public function write(string $message): void { echo "Gravando em disco: " . $message; }
}

class CloudLog implements LoggerStrategy {
    public function write(string $message): void { echo "Enviando para Nuvem: " . $message; }
}

// 2. Implemente o Motor que utiliza a estratégia
class EventEngine {
    private LoggerStrategy $logger;

    public function setLogger(LoggerStrategy $logger): void {
        $this->logger = $logger;
    }

    public function audit(string $msg): void {
        // Ação: Invoque o logger aqui
        $this->logger->write($msg);
    }
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">⚙️ Flexibilidade de Runtime</h3>
      <p class="text-sm leading-relaxed">
        O seu servidor de eventos precisa de logs. Mas em <strong>Desenvolvimento</strong>, queres ver no ficheiro local. Em <strong>Produção</strong>, queres enviar para um serviço de telemetria.
      </p>
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold text-yellow-500">Missão Técnica:</p>
        <ul class="text-[10px] space-y-1 list-disc ml-4">
          <li><strong>Intercambialidade:</strong> O motor não deve saber qual logger está a usar.</li>
          <li><strong>Ponteiro:</strong> Utilize <code>$this->logger->write()</code> dentro do método <code>audit()</code>.</li>
        </ul>
      </div>
    </div>
  `,
  objectives: [
    { id: "strategy_bound", description: "O motor deve depender apenas da interface LoggerStrategy.", test: "LoggerStrategy $logger" },
    { id: "delegate_call", description: "Chamar o método write da estratégia ativa.", test: "->logger->write(" }
  ]
};
