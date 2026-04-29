import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-eco-p6",
  language: "php",
  title: "Projeto Master: Implementação de Value Objects Imutáveis",
  description: "Crie a fundação de segurança de dados para o servidor de eventos.",
  statement: "Implemente o Value Object 'TraceId' garantindo que ele só aceite strings alfanuméricas e seja imutável via 'readonly'.",
  isProjectPart: true,
  template: `<?php

namespace App\Core\Domain;

use InvalidArgumentException;

// Ação 1: Defina a classe como readonly para garantir imutabilidade total
readonly class TraceId {
    public function __construct(
        public string $value
    ) {
        // Ação 2: Implemente a validação: o valor não pode estar vazio
        if (empty($this->value)) {
            throw new InvalidArgumentException("ID de rastreio obrigatório.");
        }
    }

    // Ação 3: Implemente um método de conveniência para comparação
    public function equals(TraceId $other): bool {
        return $this->value === $other->value;
    }
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🛡️ Criando Modelos de Domínio Sempre-Válidos</h3>
      <p class="text-sm leading-relaxed">
        No nosso servidor de eventos, o <code>TraceId</code> é vital para rastrear mensagens através de microserviços. Ele não pode ser qualquer string; ele deve seguir regras de negócio.
      </p>
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold text-yellow-500">Manual do Arquiteto:</p>
        <ul class="text-[10px] space-y-1 list-disc ml-4">
          <li><strong>Imutabilidade:</strong> Use a keyword <code>readonly class</code> do PHP 8.2.</li>
          <li><strong>Defesa:</strong> O construtor deve lançar uma <code>InvalidArgumentException</code> se o dado for inválido.</li>
          <li><strong>Identidade por Valor:</strong> O método <code>equals</code> deve comparar o conteúdo, não a instância.</li>
        </ul>
      </div>
    </div>
  `,
  objectives: [
    { id: "readonly_check", description: "Utilizar 'readonly class'.", test: "readonly class" },
    { id: "valid_check", description: "Implementar validação no construtor.", test: "throw new" },
    { id: "equals_check", description: "Implementar método de comparação equals().", test: "equals(TraceId" }
  ]
};
