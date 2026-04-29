
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t19",
  title: "VFS Internals: A Abstração Universal de Ficheiros",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📁 "Tudo é um Ficheiro"</h2>
        <p class="text-lg">No Linux, o **VFS (Virtual File System)** é a camada que permite ao teu código ler um ficheiro, um socket de rede ou um teclado usando a mesma função <code>read()</code>.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Function Pointers e Polimorfismo de Kernel</h3>
        <p class="text-sm">O VFS define uma interface comum. Cada sistema real (Ext4, NTFS, NFS) fornece uma tabela de ponteiros de funções para as suas implementações específicas. Isto é polimorfismo puro em C ao nível do Kernel.</p>
      </div>
    </div>
  `,
  quizId: "os-q19"
};
