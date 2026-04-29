
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p1",
  language: "java",
  title: "Laboratório: Análise de Heap",
  description: "Entenda a alocação de objetos em Java.",
  statement: "Utilize os parâmetros da JVM para definir o tamanho máximo do Heap como 512MB. Escreva o parâmetro correto.",
  template: "java -Xmx ;",
  detailedExplanation: `
    <h3>🚀 JVM Performance Tuning</h3>
    <p>O parâmetro <code>-Xmx</code> define o limite máximo de memória que a tua aplicação pode consumir. Configurá-lo corretamente evita erros de <em>OutOfMemoryError</em>.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Definir Heap Máximo como 512MB",
      test: "512m"
    }
  ]
};
