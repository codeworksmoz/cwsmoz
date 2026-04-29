import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p7",
  language: "java",
  title: "Projeto Master Java: ReentrantLock e Atomicidade",
  description: "Garanta a consistência de saldos em ambientes multi-thread.",
  statement: "Implemente um método de depósito que utilize ReentrantLock para evitar condições de corrida.",
  isProjectPart: true,
  template: `import java.util.concurrent.locks.ReentrantLock;

public class Account {
    private double balance;
    private final ReentrantLock lock = new ReentrantLock();

    public void deposit(double amount) {
        // Garanta que o saldo é atualizado de forma segura
    }
}`,
  detailedExplanation: `
    <h3>🔒 Sincronização de Alta Performance</h3>
    <p>Diferente do <code>synchronized</code>, o <code>ReentrantLock</code> oferece mais controlo, como o <code>tryLock()</code> com timeout, essencial para evitar travamentos em sistemas financeiros complexos.</p>
  `,
  objectives: [
    {
      id: "lock_call",
      description: "Chame lock.lock() antes da operação.",
      test: "lock.lock()"
    },
    {
      id: "unlock_finally",
      description: "Sempre utilize lock.unlock() dentro de um bloco finally.",
      test: "finally"
    }
  ]
};