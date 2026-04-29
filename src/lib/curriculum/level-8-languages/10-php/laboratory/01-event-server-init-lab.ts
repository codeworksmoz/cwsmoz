import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-p1",
  language: "php",
  title: "Projeto Master: Atributos e a Fundação do Servidor",
  description: "Configure o motor de descoberta de eventos usando metadados nativos.",
  statement: "Defina o atributo 'EventHandler' e aplique-o à classe 'WelcomeHandler' com o tópico 'user.signup'.",
  isProjectPart: true,
  template: `<?php

namespace App\Core;

use Attribute;

// 1. Defina o atributo aqui para aceitar classes
#[Attribute]
class EventHandler {
    public function __construct(public string $topic) {}
}

// 2. Aplique o atributo à classe abaixo com o tópico "user.signup"
#[EventHandler(topic: "user.signup")]
readonly class WelcomeHandler {
    public function handle(array $data): void {
        echo "Bem-vindo, " . $data['name'];
    }
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Missão: Descoberta Automática</h3>
      <p class="text-sm">Um sistema de alta escala não deve ter um ficheiro <code>config.php</code> gigante. Ele deve ser capaz de ler as classes e saber qual evento cada uma trata.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold text-yellow-500">Instruções Técnicas:</p>
        <ul class="text-[10px] space-y-1 list-disc ml-4">
          <li><strong>Atributo:</strong> Adicione <code>#[Attribute]</code> antes da classe <code>EventHandler</code>.</li>
          <li><strong>Aplicação:</strong> No topo da classe <code>WelcomeHandler</code>, use a sintaxe <code>#[EventHandler(topic: "user.signup")]</code>.</li>
        </ul>
      </div>
      <p class="text-xs italic">O motor de auditoria da Codworks verificará a presença do atributo nativo e a string do tópico.</p>
    </div>
  `,
  objectives: [
    {
      id: "attr_def",
      description: "Declarar a classe de atributo usando #[Attribute].",
      test: "#[Attribute]"
    },
    {
      id: "attr_apply",
      description: "Aplicar o atributo EventHandler à classe WelcomeHandler.",
      test: "#[EventHandler"
    },
    {
      id: "topic_match",
      description: "Definir o tópico como 'user.signup'.",
      test: "user.signup"
    }
  ]
};
