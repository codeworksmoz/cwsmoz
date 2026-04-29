import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-eco-p16",
  language: "php",
  title: "Projeto Master: Implementação de Cache-Aside com Redis",
  description: "Proteja a base de dados do servidor de eventos utilizando cache inteligente.",
  statement: "Implemente a lógica de verificação de cache antes de consultar a persistência.",
  isProjectPart: true,
  template: `<?php

namespace App\Core;

class EventService {
    public function getEvent(string $id): array {
        $cacheKey = "event:" . $id;
        
        // Ação 1: Verifique se o dado existe no Redis
        $data = $this->redis->get($cacheKey);
        
        if (!$data) {
            // Ação 2: Se não existir, busque na DB e salve no cache por 60s
            $data = $this->db->fetch($id);
            $this->redis->setex($cacheKey, 60, json_encode($data));
        }

        return json_decode($data, true);
    }
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">⚡ Otimizando a Latência</h3>
      <p class="text-sm">Nesta missão, vais implementar o padrão <strong>Cache-Aside</strong>. O objetivo é reduzir a carga no MySQL. Lembra-te de usar <code>setex</code> para garantir que o dado expire, evitando caches obsoletos (stale data).</p>
    </div>
  `,
  objectives: [
    { id: "cache_get", description: "Verificar o cache com redis->get().", test: "redis->get(" },
    { id: "cache_set", description: "Atualizar o cache com expiração (setex).", test: "setex(" }
  ]
};
