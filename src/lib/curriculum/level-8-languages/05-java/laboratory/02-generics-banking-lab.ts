import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p2",
  language: "java",
  title: "Projeto Master Java: Generics e Transaction Processors",
  description: "Crie processadores de transações genéricos e flexíveis.",
  statement: "Implemente uma interface genérica 'Processor<T extends Transaction>' que aceite qualquer tipo de transação bancária.",
  isProjectPart: true,
  template: `public interface Processor<T extends Transaction> {
    void process(T transaction);
}`,
  detailedExplanation: `
    <h3>🧩 Generics de Elite</h3>
    <p>O uso de <code>Bounded Wildcards</code> e tipos genéricos permite que o seu sistema bancário processe diferentes tipos de transações (Pix, TED, Cartão) usando a mesma infraestrutura base, garantindo segurança de tipos em tempo de compilação.</p>
  `,
  objectives: [
    {
      id: "generics",
      description: "A interface deve usar o parâmetro genérico T estendendo Transaction.",
      test: "T extends Transaction"
    }
  ]
};