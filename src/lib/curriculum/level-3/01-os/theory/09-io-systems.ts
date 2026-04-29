import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t9",
  title: "Sistemas de I/O e Drivers",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🔌 Falando com Dispositivos</h2>
      <p>Como o SO comunica com teclados, discos, placas de vídeo e rede.</p>
      
      <div class="space-y-3">
        <p><strong>Polling:</strong> A CPU pergunta repetidamente "já estás pronto?". Ineficiente.</p>
        <p><strong>Interrupts:</strong> O dispositivo avisa a CPU quando termina. Padrão moderno.</p>
        <p><strong>DMA (Direct Memory Access):</strong> Dispositivos transferem dados diretamente para a RAM sem sobrecarregar a CPU.</p>
      </div>
    </div>
  `,
  quizId: "os-q9"
};