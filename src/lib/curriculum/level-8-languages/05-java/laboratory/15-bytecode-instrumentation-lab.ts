import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p15",
  language: "java",
  title: "Projeto Master Java: Bytecode e Java Agents",
  description: "Modifique o comportamento do banco em tempo de carregamento.",
  statement: "Defina o método 'premain' que é o ponto de entrada de um Java Agent para monitorização.",
  isProjectPart: true,
  template: `import java.lang.instrument.Instrumentation;

public class BankingAgent {
    public static void premain(String agentArgs, Instrumentation inst) {
        System.out.println("Agente de Monitorização Ativo!");
        // O código do banco será instrumentado aqui
    }
}`,
  detailedExplanation: `
    <h3>⚙️ Manipulação de Bytecode</h3>
    <p>Java Agents permitem alterar as instruções binárias das classes (.class) sem tocar no código fonte original. É assim que ferramentas como New Relic ou Dynatrace funcionam.</p>
  `,
  objectives: [
    {
      id: "premain",
      description: "Implemente o método public static void premain.",
      test: "premain"
    }
  ]
};