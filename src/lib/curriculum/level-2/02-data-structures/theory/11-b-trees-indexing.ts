import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t11",
  title: "B-Trees: Otimizando o Acesso ao Disco",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🗄️ A Base de Dados no Silício
        </h2>
        <p class="text-lg leading-relaxed">
          Árvores binárias são ótimas para a RAM, mas terríveis para o Disco Rígido. As <strong>B-Trees</strong> são árvores de busca multi-vias desenhadas para minimizar as leituras de disco, permitindo que cada nó tenha centenas de filhos.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. Fan-out e Localidade de Dados</h3>
        <p class="text-sm">Um nó de B-Tree é dimensionado para caber exatamente num <strong>Bloco de Disco</strong> (geralmente 4KB). Ao ler um nó, puxamos centenas de chaves de uma vez, reduzindo o número de saltos físicos (I/O) necessários para encontrar um dado.</p>

        <h3 class="text-xl font-bold font-headline">2. B+ Trees: O Padrão de Bancos de Dados</h3>
        <p class="text-sm">Nas B+ Trees, os dados reais vivem apenas nas **Folhas**, que estão todas ligadas entre si. Os nós internos servem apenas como um índice ultra-rápido. Isto permite buscas por intervalo (Range Queries) extremamente eficientes em SQL.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6 text-xs italic">
          Uso real: Sistema de ficheiros NTFS, Ext4 e bases de dados como PostgreSQL e MySQL.
        </div>
      </div>
    </div>
  `,
  quizId: "ds-mq11"
};
