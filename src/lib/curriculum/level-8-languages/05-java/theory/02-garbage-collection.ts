import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "jv-m2",
  title: "Garbage Collection Tuning e Gestão de Memória",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🧠 Limpeza Automática e Performance</h2>
      <p>Entender como a JVM gere a memória (Heap e Stack) é crucial para sistemas de baixa latência.</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>G1GC:</strong> O coletor padrão moderno, focado em pausas previsíveis.</li>
        <li><strong>ZGC:</strong> Baixíssima latência para heaps massivos (Terabytes).</li>
        <li><strong>Young vs Old Generation:</strong> Onde os objetos vivem e morrem.</li>
      </ul>
    </div>
  `,
  quizId: "jv-mq2"
};