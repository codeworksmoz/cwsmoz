import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-eco-p14",
  language: "php",
  title: "Projeto Master: PHP 8.4 Property Hooks",
  description: "Elimine getters e setters manuais com a nova sintaxe do PHP 8.4.",
  statement: "Implemente um gancho de escrita (set) na propriedade 'email' que converta o valor para minúsculas automaticamente.",
  isProjectPart: true,
  template: `<?php

namespace App\Core;

class User {
    // Ação 1: Defina a propriedade com hook de escrita (set)
    public string $email {
        set => strtolower($value);
    }
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">⚡ O Futuro: Hooks Nativos</h3>
      <p class="text-sm">No PHP 8.4, as propriedades ganharam cérebro. Podes definir lógica de validação ou transformação diretamente na declaração, eliminando centenas de linhas de código repetitivo.</p>
    </div>
  `,
  objectives: [
    { id: "set_hook", description: "Utilizar o hook 'set' na propriedade.", test: "set =>" }
  ]
};
