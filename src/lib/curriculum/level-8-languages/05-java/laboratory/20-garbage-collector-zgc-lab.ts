import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p20",
  language: "java",
  title: "Projeto Master Java: Low-Latency com ZGC",
  description: "Elimine as pausas 'Stop the World' do seu banco.",
  statement: "Indique o parâmetro da JVM para ativar o coletor ZGC em modo geracional. Escreva o parâmetro correto.",
  isProjectPart: true,
  template: `java -XX:+Use ;`,
  detailedExplanation: `
    <h3>⏱️ Latência Sub-milissegundo</h3>
    <p>O ZGC (Z Garbage Collector) é capaz de limpar Terabytes de memória com pausas inferiores a 1ms, garantindo que as transações do banco nunca sofram atrasos por causa da JVM.</p>
  `,
  objectives: [
    {
      id: "use_zgc",
      description: "Utilize o valor 'ZGC'.",
      test: "ZGC"
    }
  ]
};