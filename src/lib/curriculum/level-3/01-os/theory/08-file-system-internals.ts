import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t8",
  title: "Sistemas de Ficheiros: Inodes e Estrutura Lógica",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📂 Organizando os Bits</h2>
        <p class="text-lg leading-relaxed">O disco rígido é apenas uma sequência linear de blocos. O Sistema de Ficheiros (File System) provê a abstração de nomes, pastas e permissões que os humanos entendem.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. O Inode: A Identidade do Ficheiro</h3>
        <p class="text-sm">Em sistemas Unix/Linux, cada ficheiro é um número de Inode. O Inode guarda: Tamanho, Dono, Permissões e o <strong>Mapa de Blocos</strong> no disco. Curiosidade: o nome do ficheiro NÃO fica no Inode, mas sim no diretório.</p>

        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2 text-accent">2. Alocação Indexada</h3>
        <p class="text-sm">Em vez de blocos seguidos (que causam fragmentação), o Inode aponta para um bloco de índices que lista todos os endereços físicos onde os pedaços do ficheiro estão guardados.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">🛡️ Journaling</h4>
          <p class="text-sm leading-relaxed">
            Sistemas como o Ext4 escrevem as intenções de mudança num "diário" antes de as aplicar no disco. Se a energia cair, o SO lê o diário no próximo boot e repara o sistema instantaneamente, evitando corrupção de dados.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "os-q8"
};