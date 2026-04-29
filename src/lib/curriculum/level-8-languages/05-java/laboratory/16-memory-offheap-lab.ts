import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p16",
  language: "java",
  title: "Projeto Master Java: Memória Off-heap e DirectBuffers",
  description: "Poupe o Garbage Collector de processar caches gigantes.",
  statement: "Aloque um ByteBuffer direto de 1024 bytes que reside fora do Heap gerido pela JVM.",
  isProjectPart: true,
  template: `import java.nio.ByteBuffer;

public class HighPerfCache {
    public void initCache() {
        // Aloque memória off-heap aqui
        ByteBuffer buffer = null;
    }
}`,
  detailedExplanation: `
    <h3>🧠 Memória de Baixo Nível</h3>
    <p>Memória Off-heap não é visível pelo Garbage Collector. Isto permite que o seu banco tenha caches de Gigabytes sem sofrer pausas de GC de vários segundos.</p>
  `,
  objectives: [
    {
      id: "allocate_direct",
      description: "Utilize ByteBuffer.allocateDirect(1024).",
      test: "allocateDirect(1024)"
    }
  ]
};