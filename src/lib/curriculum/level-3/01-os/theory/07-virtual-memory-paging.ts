import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t7",
  title: "Memória Virtual e Paginação: A Abstração de Escala",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🧠 Espaço Infinito Virtual
        </h2>
        <p class="text-lg leading-relaxed">
          A Memória Virtual permite que processos utilizem mais memória do que a RAM física instalada, usando o disco (SSD/HDD) como extensão. Isto é possível graças à <strong>Paginação</strong>.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Páginas e Frames</h3>
        <p class="text-sm">A memória é dividida em blocos de tamanho fixo (geralmente 4KB). <strong>Páginas</strong> são os blocos lógicos do programa; <strong>Frames</strong> são os blocos físicos na RAM.</p>

        <h3 class="text-xl font-bold font-headline">2. O Ciclo do Page Fault</h3>
        <p class="text-sm">Quando a CPU tenta ler uma página que não está na RAM, ocorre um <strong>Page Fault</strong>. O SO interrompe tudo, vai ao disco, traz o dado para um frame livre e atualiza a Page Table.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs text-accent space-y-1">
          <p>Passos:</p>
          <p>1. Hardware gera interrupção (Trap).</p>
          <p>2. Kernel localiza a página no disco.</p>
          <p>3. Encontra frame livre (ou expulsa um via LRU).</p>
          <p>4. Carrega os dados e valida a tabela.</p>
        </div>

        <h3 class="text-xl font-bold font-headline text-primary">TLB (Translation Lookaside Buffer)</h3>
        <p class="text-sm leading-relaxed">Para não consultar a RAM em cada acesso (lento), a CPU tem uma cache ultra-rápida de traduções recentes chamada TLB. Um <i>TLB Miss</i> é o que torna algumas aplicações lentas na troca de contexto.</p>
      </div>
    </div>
  `,
  quizId: "os-q7"
};