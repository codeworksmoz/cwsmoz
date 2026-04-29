import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-eco-p2",
  language: "php",
  title: "Projeto Master: Mocking de Repositórios e Falhas de Rede",
  description: "Garanta que o motor de eventos lida corretamente com falhas de infraestrutura.",
  statement: "Implemente um teste unitário que utilize um Mock para simular uma falha de conexão na base de dados.",
  isProjectPart: true,
  template: `<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Core\Ports\EventStore;
use App\Core\EventEngine;

class EventEngineTest extends TestCase {
    public function test_engine_handles_database_failure(): void {
        // Ação 1: Crie o Mock da interface EventStore
        $store = $this->createMock(EventStore::class);

        // Ação 2: Configure o mock para lançar uma Exception ao chamar save()
        $store->method('save')->willThrowException(new \Exception("DB Offline"));

        // Ação 3: Valide que o motor captura o erro e não crasha o servidor
        $engine = new EventEngine($store);
        $this->expectOutputString("Log: DB Offline");
        $engine->process();
    }
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🛡️ Testando o Improvável</h3>
      <p class="text-sm leading-relaxed">
        Num ambiente de elite, testamos não apenas o "caminho feliz", mas também as catástrofes. Nesta missão, vais simular que o banco de dados moçambicano está offline.
      </p>
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold text-yellow-500">Requisitos Técnicos:</p>
        <ul class="text-[10px] space-y-1 list-disc ml-4">
          <li><strong>Mock:</strong> Use <code>$this->createMock()</code> para a interface.</li>
          <li><strong>Exception:</strong> Use <code>willThrowException</code> para simular a falha.</li>
          <li><strong>Asserção:</strong> Garanta que a aplicação reporta o erro corretamente sem interromper o serviço.</li>
        </ul>
      </div>
    </div>
  `,
  objectives: [
    { id: "mock_create", description: "Utilizar createMock() para isolar a infraestrutura.", test: "createMock(" },
    { id: "mock_fail", description: "Configurar o mock para lançar uma Exception.", test: "willThrowException" },
    { id: "test_logic", description: "Utilizar expectOutputString para validar a resiliência.", test: "expectOutputString" }
  ]
};
