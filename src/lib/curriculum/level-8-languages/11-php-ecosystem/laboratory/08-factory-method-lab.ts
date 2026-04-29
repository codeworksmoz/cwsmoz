import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-eco-p8",
  language: "php",
  title: "Projeto Master: Implementação de Factory para Dispatchers",
  description: "Crie uma infraestrutura de criação de objetos desacoplada para o motor de eventos.",
  statement: "Implemente a classe 'DispatcherFactory' que decide entre um 'SyncDispatcher' ou 'AsyncDispatcher' baseado no ambiente de execução.",
  isProjectPart: true,
  template: `<?php

namespace App\Core\Factories;

interface DispatcherInterface {
    public function dispatch(string $event): void;
}

class SyncDispatcher implements DispatcherInterface {
    public function dispatch(string $event): void { echo "Sync: " . $event; }
}

class AsyncDispatcher implements DispatcherInterface {
    public function dispatch(string $event): void { echo "Async: " . $event; }
}

// ARQUITETURA MASTER - Implemente a Factory abaixo
class DispatcherFactory {
    public static function create(string $env): DispatcherInterface {
        // Ação 1: Se o env for 'prod', retorne o AsyncDispatcher
        // Ação 2: Caso contrário, retorne o SyncDispatcher
        return match($env) {
            'prod' => new AsyncDispatcher(),
            default => new SyncDispatcher()
        };
    }
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🏭 O Controle da Instanciação</h3>
      <p class="text-sm leading-relaxed">
        O seu servidor de eventos deve ser inteligente. Em <strong>Desenvolvimento</strong>, queremos logs imediatos (Sync). Em <strong>Produção</strong>, precisamos de performance (Async via Filas).
      </p>
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold text-yellow-500">Missão Técnica:</p>
        <p class="text-[10px]">Utilize a expressão <code>match</code> do PHP 8 para implementar a lógica da Factory. Garanta que o tipo de retorno seja a interface <code>DispatcherInterface</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "factory_logic", description: "Implementar a lógica de decisão baseada no ambiente.", test: "match($env)" },
    { id: "return_types", description: "Garantir o retorno de instâncias das classes de elite.", test: "new AsyncDispatcher" }
  ]
};