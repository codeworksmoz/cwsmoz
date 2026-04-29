import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "des-p5",
  language: "typescript",
  title: "Laboratório Master: Strategy Pattern",
  description: "Torne os seus algoritmos intercambiáveis em tempo de execução.",
  statement: "Implemente um motor de cálculo de frete onde a estratégia (Normal ou Expresso) possa ser trocada dinamicamente.",
  isProjectPart: true,
  template: `// DEFINIÇÃO DA ESTRATÉGIA
interface ShippingStrategy {
    calculate(weight: number): number;
}

class NormalShipping implements ShippingStrategy {
    calculate(weight: number) { return weight * 5; }
}

class ExpressShipping implements ShippingStrategy {
    calculate(weight: number) { return weight * 20; }
}

// CONTEXTO MASTER (O Motor):
class ShippingCalculator {
    private strategy: ShippingStrategy;

    constructor(initialStrategy: ShippingStrategy) {
        this.strategy = initialStrategy;
    }

    setStrategy(newStrategy: ShippingStrategy) {
        this.strategy = newStrategy;
    }

    calculate(weight: number): number {
        return this.strategy.calculate(weight);
    }
}`,
  detailedExplanation: `
    <h3>🧠 Algoritmos Sob Demanda</h3>
    <p>O padrão <strong>Strategy</strong> elimina <code>if/else</code> gigantescos. Em vez de perguntar "se é expresso faça isso", tu simplesmente injetas a estratégia de "Expresso" no motor. Isto torna o sistema infinitamente extensível.</p>
  `,
  objectives: [
    {
      id: "interface_bound",
      description: "O motor deve depender apenas da interface ShippingStrategy.",
      test: "strategy: ShippingStrategy"
    },
    {
      id: "runtime_swap",
      description: "Implemente o método setStrategy para trocar o algoritmo em tempo de execução.",
      test: "setStrategy"
    },
    {
      id: "delegate",
      description: "O cálculo final deve delegar para a estratégia ativa.",
      test: "this.strategy.calculate(weight)"
    }
  ]
};