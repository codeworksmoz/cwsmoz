import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-eco-p18",
  language: "php",
  title: "Laboratório Master: Lógica de Sharding por Módulo",
  description: "Implemente um Shard Resolver simples para o motor de eventos.",
  statement: "Utilize o operador de módulo (%) para decidir qual conexão de banco usar baseado no ID do utilizador.",
  isProjectPart: true,
  template: `<?php

namespace App\Core;

class ShardResolver {
    public function getShardId(int $userId): int {
        // Ação: Se temos 4 servidores, calcule o ID do shard (0-3)
        return $userId % 4;
    }
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🏁 Arquitetura de Sharding</h3>
      <p class="text-sm">O motor de eventos vai processar milhões de utilizadores. Para não sobrecarregar um único MySQL, dividimos a carga. O <strong>Modulus Sharding</strong> é a forma mais simples e performática de garantir que o mesmo utilizador caia sempre no mesmo servidor.</p>
    </div>
  `,
  objectives: [
    { id: "shard_logic", description: "Implementar lógica de módulo para 4 servidores.", test: "% 4" }
  ]
};
