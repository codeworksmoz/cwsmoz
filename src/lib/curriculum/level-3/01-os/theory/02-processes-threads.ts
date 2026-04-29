import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t2",
  title: "Processos, Threads e o PCB",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🔄 Unidades de Execução</h2>
        <p class="text-lg">Um <strong>Processo</strong> é um programa em execução com o seu próprio espaço de memória isolado. Uma <strong>Thread</strong> é uma "linha de execução" dentro de um processo.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. O Process Control Block (PCB)</h3>
        <p class="text-sm">O Kernel guarda tudo sobre um processo numa estrutura chamada PCB: Estado (Ready, Running, Waiting), Program Counter, Registradores e permissões.</p>

        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">2. Threads vs Processos</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-1">Processos</h4>
            <p class="text-[10px]">Isolamento total. Comunicação difícil (IPC). Pesados para criar.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-1">Threads</h4>
            <p class="text-[10px]">Partilham memória e recursos. Comunicação fácil. Leves (LWP).</p>
          </div>
        </div>

        <div class="bg-red-500/5 p-5 rounded-xl border border-red-500/20 shadow-inner">
          <h4 class="font-bold text-red-400 mb-2">⚠️ O Perigo das Threads:</h4>
          <p class="text-sm italic">Como partilham a mesma memória, se duas threads tentarem mudar a mesma variável ao mesmo tempo, ocorre uma <strong>Race Condition</strong>, corrompendo os dados do sistema.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "os-q2"
};