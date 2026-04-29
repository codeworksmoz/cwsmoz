import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "des-p4",
  language: "typescript",
  title: "Laboratório Master: Adapter Pattern",
  description: "Ligue sistemas incompatíveis usando uma ponte técnica.",
  statement: "Crie um adaptador para que o 'LegacyPaymentSDK' possa ser usado através da interface moderna 'PaymentProcessor'.",
  isProjectPart: true,
  template: `// INTERFACE MODERNA DO SISTEMA
interface PaymentProcessor {
    process(amount: number): void;
}

// SDK ANTIGO (Não pode ser alterado)
class LegacyPaymentSDK {
    executeTransaction(value: string) {
        console.log("Legacy processing: " + value);
    }
}

// ARQUITETURA MASTER (Implemente o Adaptador abaixo):
class PaymentAdapter implements PaymentProcessor {
    private legacySDK: LegacyPaymentSDK;

    constructor() {
        this.legacySDK = new LegacyPaymentSDK();
    }

    process(amount: number): void {
        // Converta o número para string e chame o SDK antigo
        const stringValue = amount.toString();
        this.legacySDK.executeTransaction(stringValue);
    }
}`,
  detailedExplanation: `
    <h3>🔌 A Tomada Universal</h3>
    <p>O <strong>Adapter</strong> permite que classes com interfaces incompatíveis trabalhem juntas. É muito comum quando precisas de usar bibliotecas externas ou código antigo (Legacy) que não segue os padrões atuais da tua aplicação.</p>
    <div class="bg-indigo-500/10 p-4 rounded-xl border border-indigo-500/20 mt-4">
        <p class="text-xs"><strong>Missão:</strong> O teu sistema moderno usa <code>process(number)</code>, mas o SDK antigo exige <code>executeTransaction(string)</code>. Implementa a conversão e a chamada dentro do adaptador.</p>
    </div>
  `,
  objectives: [
    {
      id: "implements_interface",
      description: "A classe PaymentAdapter deve implementar PaymentProcessor.",
      test: "implements PaymentProcessor"
    },
    {
      id: "conversion_logic",
      description: "Converter o valor numérico para string.",
      test: "toString()"
    },
    {
      id: "call_legacy",
      description: "Invocar o método executeTransaction do SDK legado.",
      test: "this.legacySDK.executeTransaction"
    }
  ]
};