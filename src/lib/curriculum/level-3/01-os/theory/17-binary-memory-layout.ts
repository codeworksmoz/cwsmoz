
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t17",
  title: "Memory Layout: Stack, Heap, BSS e Data Segments",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🧠 Anatomia do Executável na RAM</h2>
        <p class="text-lg">Quando o Kernel carrega um binário (ELF/EXE), ele organiza a memória em segmentos lógicos para garantir proteção e eficiência.</p>
      </div>

      <div class="space-y-4">
        <ul class="space-y-3 text-sm">
          <li><strong>.text:</strong> Instruções de máquina (Apenas Leitura).</li>
          <li><strong>.data:</strong> Variáveis globais inicializadas.</li>
          <li><strong>.bss:</strong> Variáveis globais NÃO inicializadas (ocupa zero espaço no disco).</li>
          <li><strong>Heap:</strong> Cresce para cima. Memória dinâmica controlada pelo utilizador.</li>
          <li><strong>Stack:</strong> Cresce para baixo. Variáveis locais e endereços de retorno de funções.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "os-q17"
};
