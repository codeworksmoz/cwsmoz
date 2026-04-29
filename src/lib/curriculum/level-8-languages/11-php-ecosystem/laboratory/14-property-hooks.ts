import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-eco-p14",
  language: "php",
  title: "Projeto Master: Implementação de Hooks e Visibilidade",
  description: "Refatorize os modelos de dados do motor para o padrão PHP 8.4.",
  statement: "Implemente a propriedade 'amount' com um hook de escrita que impeça valores negativos e uma visibilidade assimétrica.",
  isProjectPart: true,
  template: `<?php

namespace App\Core;

class Transaction {
    // Ação 1: Defina a propriedade amount como pública para leitura e privada para escrita
    // Ação 2: Adicione o hook 'set' para validar que o valor é maior que zero
    public private(set) float $amount {
        set {
            if ($value <= 0) throw new \InvalidArgumentException("Valor deve ser positivo");
            $this->amount = $value;
        }
    }

    public function __construct(float $value) {
        $this->amount = $value;
    }
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🛡️ Proteção Atómica de Dados</h3>
      <p class="text-sm leading-relaxed">
        No nosso servidor de eventos, os dados financeiros devem ser blindados. Utilizando <strong>Asymmetric Visibility</strong> e <strong>Property Hooks</strong>, garantimos que ninguém de fora consiga corromper o valor da transação, e que qualquer tentativa interna de definir um valor negativo seja bloqueada instantaneamente.
      </p>
    </div>
  `,
  objectives: [
    { id: "asym_vis", description: "Utilizar visibilidade assimétrica private(set).", test: "private(set)" },
    { id: "set_hook", description: "Implementar o hook 'set'.", test: "set {" },
    { id: "val_logic", description: "Lançar exceção para valores negativos.", test: "throw new" }
  ]
};
