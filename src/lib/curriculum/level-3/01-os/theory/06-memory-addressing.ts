import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t6",
  title: "Gestão de Memória: Espaços de Endereçamento",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🧠 Organizando a RAM
        </h2>
        <p class="text-lg leading-relaxed">O SO deve garantir que as aplicações não "atropelem" a memória umas das outras. Para isso, criamos uma separação entre o que o programa vê e o que o hardware realmente usa.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">Endereços Lógicos vs Físicos</h3>
        <p class="text-sm">Um programa utiliza <strong>Endereços Lógicos</strong> (0 a N). O hardware <strong>MMU (Memory Management Unit)</strong> traduz estes endereços para a localização real nos chips de RAM (Endereço Físico).</p>

        <h3 class="text-xl font-bold font-headline">O Problema da Fragmentação</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <h4 class="font-bold text-accent mb-2">Externa</h4>
            <p class="text-xs opacity-70">Sobra memória total, mas está espalhada em buracos tão pequenos que não cabe um processo novo.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <h4 class="font-bold text-accent mb-2">Interna</h4>
            <p class="text-xs opacity-70">Espaço desperdiçado dentro de um bloco alocado que o processo não utiliza.</p>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Compactação</h4>
          <p class="text-sm leading-relaxed">O SO move processos na RAM para juntar os buracos de memória livre. Operação cara mas vital para evitar o desperdício.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "os-q6"
};