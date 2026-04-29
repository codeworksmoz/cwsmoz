import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p3",
  language: "java",
  title: "Projeto Master Java: Streams e Agregação Financeira",
  description: "Calcule balanços em massa usando o paradigma funcional.",
  statement: "Utilize a API de Streams para somar o valor total de uma lista de transações.",
  isProjectPart: true,
  template: `import java.util.List;

public class BalanceService {
    public double calculateTotal(List<Transaction> transactions) {
        // Use streams para somar os valores
        return 0.0;
    }
}`,
  detailedExplanation: `
    <h3>λ Paradigma Funcional</h3>
    <p>A API de Streams do Java permite processar coleções de dados de forma declarativa e paralelizável. No sistema bancário, isto é essencial para gerar extratos e relatórios financeiros com performance e código limpo.</p>
  `,
  objectives: [
    {
      id: "stream_sum",
      description: "Utilize .stream().mapToDouble().sum() para calcular o total.",
      test: "sum()"
    }
  ]
};