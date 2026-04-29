import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t2",
  title: "Gestão de Processos e o PCB",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🔄 O Ciclo de Vida do Processo</h2>
      <p>Um processo é um programa em execução. O SO gere o estado de cada processo usando uma estrutura chamada <strong>PCB (Process Control Block)</strong>.</p>
      
      <div class="bg-muted p-4 rounded-xl font-code text-sm">
        Estados: New -> Ready -> Running -> Waiting -> Terminated
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Componentes de um Processo:</h3>
        <ul>
          <li><strong>Código (Text):</strong> Instruções do programa.</li>
          <li><strong>Dados:</strong> Variáveis globais.</li>
          <li><strong>Heap:</strong> Memória alocada dinamicamente.</li>
          <li><strong>Stack:</strong> Variáveis locais e endereços de retorno.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "os-q2"
};