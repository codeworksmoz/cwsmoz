import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t9",
  title: "I/O Management: Interrupções, Polling e DMA",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">🔌 Falando com o Mundo Exterior</h2>
        <p class="text-lg">Como a CPU comunica com o teclado ou com a placa de rede de 10Gbps sem ficar "presa" à espera do hardware lento?</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. Interrupt-driven I/O</h3>
        <p class="text-sm">Em vez do processador perguntar "já tens dados?" (Polling), o dispositivo envia um sinal elétrico (Interrupt) ao processador assim que termina a tarefa. O CPU pausa o que está a fazer, atende o dispositivo e volta ao código original.</p>
        
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">2. DMA (Direct Memory Access)</h3>
        <p class="text-sm">Para transferir grandes volumes de dados (ex: descarregar um filme do disco para a RAM), a CPU autoriza um chip especial (DMA Controller) a fazer o trabalho. O CPU fica livre para computar enquanto os dados fluem em background.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">⚙️ Device Drivers</h4>
          <p class="text-sm leading-relaxed">
            Software que traduz comandos genéricos do SO (ex: "escrever byte") em sinais específicos que o hardware entende. Vivem no espaço do Kernel para performance e segurança.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "os-q9"
};