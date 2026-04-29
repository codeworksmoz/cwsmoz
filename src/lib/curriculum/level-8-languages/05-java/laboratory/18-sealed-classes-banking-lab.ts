import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p18",
  language: "java",
  title: "Projeto Master Java: Sealed Hierarchies",
  description: "Controle rigorosamente os tipos de conta suportados.",
  statement: "Defina uma interface selada 'Account' que permita apenas as classes 'SavingsAccount' e 'CheckingAccount'.",
  isProjectPart: true,
  template: `// Defina a hierarquia selada aqui
public sealed interface Account permits SavingsAccount, CheckingAccount { }

public final class SavingsAccount implements Account { }
public final class CheckingAccount implements Account { }`,
  detailedExplanation: `
    <h3>🔒 Segurança Arquitetural</h3>
    <p>Sealed Classes impedem que terceiros estendam as suas classes sensíveis, garantindo que a lógica de negócio do banco seja exaustiva e protegida.</p>
  `,
  objectives: [
    {
      id: "sealed_keyword",
      description: "Utilize a keyword 'sealed' e a cláusula 'permits'.",
      test: "permits"
    }
  ]
};