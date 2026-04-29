import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t7",
  title: "Memória Virtual e Paginação",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold text-primary">🖼️ Ilusão de Espaço Infinito</h2>
      <p>A Memória Virtual permite que processos usem mais memória do que a RAM física disponível, usando o disco como extensão.</p>
      
      <div class="prose prose-invert max-w-none">
        <h3>Paginação (Paging)</h3>
        <p>Divide a memória em blocos de tamanho fixo chamados <strong>Pages</strong> (lógicas) e <strong>Frames</strong> (físicas).</p>
        <p><strong>Page Fault:</strong> Quando um programa tenta aceder a uma página que não está na RAM. O SO deve buscá-la no disco.</p>
      </div>
    </div>
  `,
  quizId: "os-q7"
};