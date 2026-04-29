import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-eco-p13",
  language: "php",
  title: "Projeto Master: Implementação de um Kernel Listener",
  description: "Intercete o ciclo de vida do framework para auditoria global.",
  statement: "Implemente um listener que adicione o cabeçalho 'X-Engine: CWM-MASTER' a todas as respostas do servidor.",
  isProjectPart: true,
  template: `<?php

namespace App\Core\EventListener;

use Symfony\Component\HttpKernel\Event\ResponseEvent;

class HeaderListener {
    public function onKernelResponse(ResponseEvent $event): void {
        // Ação 1: Obtenha o objeto Response do evento
        $response = $event->getResponse();

        // Ação 2: Adicione o cabeçalho personalizado
        $response->headers->set('X-Engine', 'CWM-MASTER');
    }
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🎻 Orquestração via Eventos</h3>
      <p class="text-sm leading-relaxed">
        No Symfony, não alteramos o motor do framework. Nós "ouvimos" o motor. Nesta missão, vais implementar um listener que reage ao evento <code>kernel.response</code>, garantindo que o seu servidor de eventos tenha uma assinatura técnica em todos os cabeçalhos HTTP.
      </p>
    </div>
  `,
  objectives: [
    { id: "event_type", description: "Utilizar o objeto ResponseEvent.", test: "ResponseEvent $event" },
    { id: "get_res", description: "Obter a resposta via getResponse().", test: "getResponse()" },
    { id: "set_header", description: "Definir o cabeçalho X-Engine.", test: "headers->set('X-Engine'" }
  ]
};
