import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p13",
  language: "java",
  title: "Projeto Master Java: Resilience4j e Fallbacks",
  description: "Crie sistemas resilientes que não propagam falhas.",
  statement: "Implemente uma lógica de 'fallback' que retorne um saldo de cache caso o serviço principal de base de dados falhe.",
  isProjectPart: true,
  template: `public class ResilientService {
    public double getBalance(String id) {
        try {
            return callDatabase(id);
        } catch (Exception e) {
            return getFromCache(id);
        }
    }

    private double callDatabase(String id) { throw new RuntimeException(); }
    private double getFromCache(String id) { return 100.0; }
}`,
  detailedExplanation: `
    <h3>🔌 Disjuntores de Software</h3>
    <p>O padrão Circuit Breaker impede que o seu banco "morra" completamente se um serviço secundário (como o de notificações) estiver lento ou offline.</p>
  `,
  objectives: [
    {
      id: "fallback_logic",
      description: "Retorne o valor do cache no bloco catch.",
      test: "getFromCache"
    }
  ]
};