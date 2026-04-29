import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-eco-p20",
  language: "php",
  title: "Laboratório: Benchmarking de Sintaxe 8.4",
  description: "Utilize as novas facilidades sintáticas do PHP 8.4.",
  statement: "Implemente a instanciação e chamada de método fluida sem parênteses extras.",
  isProjectPart: true,
  template: `<?php

namespace App\Core;

class Bench {
    public function run(): string {
        // Ação: Instancie e chame execute() em uma única linha estilo 8.4
        return new Logger()->execute();
    }
}`,
  detailedExplanation: `<h3>⚡ Código Enxuto</h3><p>O PHP 8.4 permite <code>new Class()->method()</code>. Isto reduz o ruído visual em factories e encadeamentos de métodos (chaining).</p>`,
  objectives: [{ id: "syntax", description: "Usar a nova sintaxe do PHP 8.4.", test: "new Logger()->" }]
};
