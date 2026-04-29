import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-p4",
  language: "php",
  title: "Projeto Master: Máquina de Estados com Enums",
  description: "Implemente o controle de ciclo de vida dos eventos.",
  statement: "Crie o Backed Enum 'EventStatus' e implemente um método que retorne uma cor hexadecimal para cada estado.",
  isProjectPart: true,
  template: `<?php

namespace App\Core;

// Ação 1: Defina o Backed Enum de string 'EventStatus'
// Casos: PENDING = 'P', DISPATCHED = 'D', FAILED = 'F'
enum EventStatus: string {
    case PENDING = 'P';
    case DISPATCHED = 'D';
    case FAILED = 'F';

    // Ação 2: Crie o método color() -> string
    public function color(): string {
        return match($this) {
            self::PENDING => '#fbbf24',
            self::DISPATCHED => '#22c55e',
            self::FAILED => '#ef4444',
        };
    }
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🛡️ Protegendo a Lógica de Estado</h3>
      <p class="text-sm">No nosso servidor, um evento não pode ter um estado aleatório. Ele deve seguir o contrato do <code>EventStatus</code>. Ao usar um <strong>Backed Enum</strong>, facilitamos a gravação no banco (apenas um caractere) mantendo a semântica rica no código.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-primary/20">
        <p class="text-xs font-bold text-yellow-500">Manual do Arquiteto:</p>
        <ul class="text-[10px] space-y-1 list-disc ml-4">
          <li><strong>Identidade:</strong> Use a keyword <code>enum Name: string</code>.</li>
          <li><strong>Casos:</strong> Use maiúsculas para os nomes dos casos (padrão industrial).</li>
          <li><strong>Match:</strong> O método <code>color()</code> deve retornar a cor correta para cada caso.</li>
        </ul>
      </div>
    </div>
  `,
  objectives: [
    {
      id: "enum_type",
      description: "Definir o enum como backed string.",
      test: "enum EventStatus: string"
    },
    {
      id: "match_logic",
      description: "Implementar o método color() usando match.",
      test: "match($this)"
    },
    {
      id: "status_cases",
      description: "Incluir os casos PENDING, DISPATCHED e FAILED.",
      test: "case FAILED"
    }
  ]
};
