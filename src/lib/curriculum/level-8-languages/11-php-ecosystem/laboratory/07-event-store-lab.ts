import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-eco-p7",
  language: "php",
  title: "Projeto Master: Implementação de um Event Store Resiliente",
  description: "Construa o motor de persistência para o rasto de eventos imutável.",
  statement: "Implemente o método 'appendToStream' que persiste um evento e garante a consistência sequencial.",
  isProjectPart: true,
  template: `<?php

namespace App\Core\Infrastructure;

use App\Core\Domain\Event;

class EventStore {
    private array $storage = [];

    public function appendToStream(string $streamId, Event $event, int $expectedVersion): void {
        // Ação 1: Valide se o stream existe e se a versão coincide
        // Ação 2: Adicione o evento ao array de storage
        
        $this->storage[$streamId][] = [
            'version' => $expectedVersion + 1,
            'payload' => $event,
            'recorded_at' => new \DateTimeImmutable()
        ];
        
        echo "Evento persistido no stream: " . $streamId;
    }
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">💾 O Coração da História</h3>
      <p class="text-sm leading-relaxed">
        O seu servidor de eventos agora precisa de memória infinita. O <strong>Event Store</strong> é onde todos os segredos são guardados. Diferente de uma tabela comum, aqui os dados são <strong>Apenas-Inserção (Append-only)</strong>.
      </p>
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold text-yellow-500">Requisitos do Laboratório:</p>
        <ul class="text-[10px] space-y-1 list-disc ml-4">
          <li><strong>Consistência:</strong> Use o <code>expectedVersion</code> para garantir que dois processos não tentem atualizar o mesmo agregado ao mesmo tempo (Optimistic Concurrency).</li>
          <li><strong>Imutabilidade:</strong> Uma vez inserido, o evento nunca é editado.</li>
          <li><strong>Metadata:</strong> Grave sempre o <code>recorded_at</code> para auditoria temporal.</li>
        </ul>
      </div>
    </div>
  `,
  objectives: [
    { id: "append_logic", description: "Implementar a lógica de adição ao stream.", test: "appendToStream" },
    { id: "version_check", description: "Gerir a versão do stream para evitar conflitos.", test: "expectedVersion" },
    { id: "time_audit", description: "Gravar o timestamp de auditoria imutável.", test: "DateTimeImmutable" }
  ]
};
