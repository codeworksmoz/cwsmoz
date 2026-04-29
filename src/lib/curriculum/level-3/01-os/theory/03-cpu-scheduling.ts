import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t3",
  title: "Escalonamento de CPU: Determinismo e Justiça",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">⏱️ Quem corre agora?</h2>
        <p class="text-lg">O <strong>Scheduler</strong> (Escalonador) decide qual processo na fila 'Ready' deve ocupar o CPU. O objetivo é maximizar o uso do processador e garantir que nenhum processo morra de fome (Starvation).</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">Algoritmos Fundamentais</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-card border rounded-xl">
            <strong class="text-accent block mb-1">Round Robin (RR):</strong> Cada processo recebe um tempo fixo (Quantum). Se não terminar, volta para o fim da fila. Essencial para sistemas interativos.
          </li>
          <li class="p-4 bg-card border rounded-xl">
            <strong class="text-accent block mb-1">SJF (Shortest Job First):</strong> Escolhe a tarefa mais curta. Minimiza o tempo médio de espera, mas pode causar <i>starvation</i> em processos longos.
          </li>
          <li class="p-4 bg-card border rounded-xl">
            <strong class="text-accent block mb-1">Multilevel Feedback Queue:</strong> O padrão do Windows/Linux. Ajusta a prioridade dinamicamente conforme o comportamento do processo.
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">⚖️ Preemptive vs Non-Preemptive</h4>
          <p class="text-sm leading-relaxed">
            Em sistemas <strong>Preemptivos</strong>, o Kernel pode interromper um processo a qualquer momento para dar lugar a outro mais urgente. Em sistemas não-preemptivos, o processo deve libertar o CPU voluntariamente.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "os-q3"
};