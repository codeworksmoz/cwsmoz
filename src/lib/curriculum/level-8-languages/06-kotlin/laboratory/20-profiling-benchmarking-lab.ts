import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "kt-p20",
  language: "kotlin",
  title: "Projeto Master: Benchmarking de Micro-operações",
  description: "Identifique gargalos no processamento de pacotes.",
  statement: "Indique o nome da biblioteca oficial do Kotlin para realizar micro-benchmarks precisos na JVM. Escreva 'JMH'.",
  isProjectPart: true,
  template: `// Para medir a performance real de uma função:
// Use a ferramenta: ;`,
  detailedExplanation: `
    <h3>🔍 Ciência da Performance</h3>
    <p>Um engenheiro de elite não confia na intuição. O <strong>JMH (Java Microbenchmark Harness)</strong> lida com o aquecimento do JIT e otimizações do compilador para dar números reais de performance ao seu motor.</p>
  `,
  objectives: [
    {
      id: "bench_tool",
      description: "Identifique a ferramenta oficial de benchmark.",
      test: "JMH"
    }
  ]
};