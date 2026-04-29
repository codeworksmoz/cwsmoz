import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "des-p2",
  language: "typescript",
  title: "Laboratório: Nomes Semânticos e Funções Puras",
  description: "Transforme código 'obscuro' em código auto-documentado.",
  statement: "Refatorize a função de cálculo de juros para usar nomes profissionais e evitar efeitos colaterais.",
  isProjectPart: true,
  template: `// CÓDIGO AMADOR (Code Smell: Nomes Genéricos e Mutação)
let b = 1000;
function calc(v: number) {
    b = b + (v * 0.05); // Mutação de variável global!
    return b;
}

// CÓDIGO MASTER (Implemente abaixo):
const MOZ_TAX_RATE = 0.05;

function calculateFinalBalance(currentBalance: number, transactionValue: number): number {
    const interest = transactionValue * MOZ_TAX_RATE;
    return currentBalance + transactionValue + interest;
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🧹 Operação Clean Code</h3>
      <p>Um engenheiro master não usa <code>a, b, c</code>. Ele usa nomes que explicam o <strong>domínio do negócio</strong>. Além disso, evitamos mudar variáveis fora da função (Efeitos Colaterais).</p>
      <div class="bg-muted p-4 rounded-xl border border-primary/20">
        <p class="text-xs font-bold text-yellow-500">Regras de Ouro:</p>
        <ul class="text-[10px] list-disc ml-4 space-y-1">
          <li><strong>Imutabilidade:</strong> Retorne um valor novo em vez de mudar o antigo.</li>
          <li><strong>Semântica:</strong> Use nomes como <code>currentBalance</code> ou <code>transactionValue</code>.</li>
          <li><strong>Constantes:</strong> Use <code>const</code> para valores que não mudam (Taxas).</li>
        </ul>
      </div>
    </div>
  `,
  objectives: [
    {
      id: "semantic_names",
      description: "Use o nome 'currentBalance' nos parâmetros.",
      test: "currentBalance:"
    },
    {
      id: "pure_function",
      description: "A função não deve alterar variáveis externas; use apenas o return.",
      test: "return currentBalance +"
    },
    {
      id: "const_usage",
      description: "Utilize uma constante para a taxa de juros.",
      test: "const interest ="
    }
  ]
};
