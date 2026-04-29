import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p9",
  language: "java",
  title: "Projeto Master Java: JMX e Monitorização",
  description: "Exponha métricas de saúde do seu banco para o mundo exterior.",
  statement: "Crie um MBean que exponha o número total de transações processadas para ferramentas como o JConsole.",
  isProjectPart: true,
  template: `public interface BankingMonitorMBean {
    int getProcessedTransactions();
}

public class BankingMonitor implements BankingMonitorMBean {
    private int count = 0;
    public int getProcessedTransactions() { return count; }
}`,
  detailedExplanation: `
    <h3>📊 Observabilidade Nativa</h3>
    <p>JMX (Java Management Extensions) é o padrão para monitorizar aplicações Java. Ele permite que você altere configurações do banco em tempo de execução sem reiniciar o servidor.</p>
  `,
  objectives: [
    {
      id: "mbean_interface",
      description: "Defina uma interface que termine com 'MBean'.",
      test: "MBean"
    }
  ]
};