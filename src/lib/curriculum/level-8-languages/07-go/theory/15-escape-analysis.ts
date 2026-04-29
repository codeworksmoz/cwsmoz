import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "go-m12",
  title: "Escape Analysis e Gestão de Memória na Stack",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">🧠 Otimização Estática de Memória</h2>
        <p class="text-lg leading-relaxed">Go utiliza um processo chamado <strong>Escape Analysis</strong> em tempo de compilação para decidir se uma variável deve viver na Stack ou no Heap. O objetivo de elite é manter o máximo de dados na Stack para evitar o custo do Garbage Collector.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. Porquê preferir a Stack?</h3>
        <p class="text-sm">A Stack é ultra-rápida e limpa automaticamente quando a função retorna. O Heap exige alocação dinâmica, sincronização e scan do GC, o que introduz latência.</p>

        <h3 class="text-xl font-bold font-headline">2. O que causa o "Escape"?</h3>
        <ul class="space-y-3 text-xs">
          <li><strong>Retornar ponteiros:</strong> Se retornas o endereço de uma variável local, ela DEVE ir para o Heap.</li>
          <li><strong>Interfaces:</strong> Atribuir um tipo concreto a uma interface causa escape para o heap.</li>
          <li><strong>Tamanho desconhecido:</strong> Slices muito grandes ou com tamanho dinâmico fogem para o heap.</li>
        </ul>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-green-500 mb-2">🚀 Dica de Auditoria:</h4>
          <p class="text-sm">Use <code>go build -gcflags="-m"</code> para ver o relatório do compilador e descobrir exatamente quais variáveis estão a fugir para o heap.</p>
        </div>
      </div>
    </div>
  `,
};
