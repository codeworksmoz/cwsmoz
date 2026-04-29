import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t15",
  title: "Sistemas de Ficheiros: A Arquitetura do Armazenamento",
  youtubeVideoId: "E18Qv2bTkRU",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
          Organizando o Caos de Bits
        </h2>
        <p class="text-lg leading-relaxed">
          Para o hardware, um disco é apenas uma sequência linear de setores. O <strong>Sistema de Ficheiros</strong> (FS) é a estrutura lógica que permite organizar estes blocos em ficheiros, pastas e permissões, garantindo que os dados possam ser recuperados de forma eficiente e segura.
        </p>
      </div>

      <div class="space-y-6">
        <!-- LAYOUT DO DISCO -->
        <div class="bg-gray-900 p-6 rounded-2xl border border-primary/20 shadow-inner">
          <h3 class="flex items-center gap-2 text-primary font-bold text-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            Layout de um Disco com Sistema de Ficheiros
          </h3>
          <div class="flex flex-wrap justify-center gap-2 text-[10px] font-code">
            <div class="bg-blue-500/10 p-2 rounded border border-blue-500/20 text-center min-w-[80px]">
              <span class="text-blue-400 font-bold">MBR/GPT</span>
              <p class="text-gray-500">Boot</p>
            </div>
            <div class="bg-yellow-500/10 p-2 rounded border border-yellow-500/20 text-center min-w-[80px]">
              <span class="text-yellow-400 font-bold">Superbloco</span>
              <p class="text-gray-500">Info FS</p>
            </div>
            <div class="bg-green-500/10 p-2 rounded border border-green-500/20 text-center min-w-[80px]">
              <span class="text-green-400 font-bold">Bitmap Inodes</span>
              <p class="text-gray-500">Livres/Ocupados</p>
            </div>
            <div class="bg-purple-500/10 p-2 rounded border border-purple-500/20 text-center min-w-[80px]">
              <span class="text-purple-400 font-bold">Tabela Inodes</span>
              <p class="text-gray-500">Metadados</p>
            </div>
            <div class="bg-orange-500/10 p-2 rounded border border-orange-500/20 text-center min-w-[80px]">
              <span class="text-orange-400 font-bold">Blocos Dados</span>
              <p class="text-gray-500">Conteúdo real</p>
            </div>
          </div>
          <p class="text-[10px] text-gray-400 text-center mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            Superbloco = "Mapa-mundo" do sistema de ficheiros (tamanho, blocos livres, etc.)
          </p>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Inode: A Estrutura Mestra</h3>
        <p>Em sistemas Linux e Unix, o <strong>Inode (Index Node)</strong> é o coração do ficheiro. Curiosamente, o Inode <strong>não contém o nome do ficheiro</strong>, mas contém todos os metadados vitais:</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-5 bg-card border rounded-2xl border-primary/20 shadow-lg hover:border-primary/50 transition-all">
            <h4 class="font-bold text-primary mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              Metadados (No Inode)
            </h4>
            <ul class="text-xs space-y-2 text-muted-foreground">
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                <span><strong>Tamanho</strong> em Bytes</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                <span><strong>Owner ID (UID)</strong> e <strong>Group ID (GID)</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                <span><strong>Permissões</strong> (Read, Write, Execute)</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                <span><strong>Timestamps</strong> (atime, mtime, ctime)</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                <span><strong>Ponteiros de Blocos:</strong> Onde os dados estão fisicamente</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                <span><strong>Link Count:</strong> Quantos nomes apontam para este inode</span>
              </li>
            </ul>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-accent/20 shadow-lg hover:border-accent/50 transition-all">
            <h4 class="font-bold text-accent mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
              O Diretório
            </h4>
            <p class="text-xs leading-relaxed text-muted-foreground">Um diretório é apenas um ficheiro especial que contém uma lista de nomes associados a números de Inode. É a ponte entre a linguagem humana e a lógica do sistema.</p>
            <div class="bg-black/40 p-3 rounded mt-3 font-code text-[10px]">
              <p class="text-gray-400 mb-1">Estrutura interna de um diretório:</p>
              <div class="grid grid-cols-2 gap-1">
                <div class="bg-accent/10 p-1 rounded">Nome</div>
                <div class="bg-accent/10 p-1 rounded">Inode #</div>
                <div class="p-1">"foto.jpg"</div>
                <div class="p-1 text-yellow-400">4721</div>
                <div class="p-1">"docs"</div>
                <div class="p-1 text-yellow-400">8932</div>
                <div class="p-1">".."</div>
                <div class="p-1 text-yellow-400">1200</div>
              </div>
            </div>
          </div>
        </div>

        <!-- PONTEIROS DO INODE -->
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-4">
          <h4 class="text-primary font-bold text-sm mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            Como o Inode Encontra os Dados (Estrutura de Ponteiros)
          </h4>
          <div class="text-xs space-y-3">
            <div class="bg-black/40 p-3 rounded">
              <p class="text-yellow-400 font-bold">1. Ponteiros Diretos (12)</p>
              <p class="text-gray-400">Apontam diretamente para blocos de dados. Suficiente para ficheiros pequenos.</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <p class="text-yellow-400 font-bold">2. Ponteiro Indireto Simples</p>
              <p class="text-gray-400">Aponta para um bloco que contém mais ponteiros para blocos de dados.</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <p class="text-yellow-400 font-bold">3. Ponteiro Indireto Duplo</p>
              <p class="text-gray-400">Aponta para um bloco que contém ponteiros para blocos indiretos simples. Para ficheiros grandes.</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <p class="text-yellow-400 font-bold">4. Ponteiro Indireto Triplo</p>
              <p class="text-gray-400">Para ficheiros enormes (até vários TB no ext4).</p>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Alocação de Blocos e Fragmentação</h3>
        <p class="mb-4">Como o SO escolhe onde colocar os blocos de um ficheiro? Existem três estratégias principais:</p>
        
        <div class="space-y-3">
          <div class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5 hover:border-primary/30 transition-all">
            <div class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
            </div>
            <div>
              <span class="font-bold text-blue-400">Contígua:</span>
              <p class="text-xs text-gray-400 mt-1">Blocos consecutivos. Leitura muito rápida (HDD), mas causa fragmentação externa e dificuldade de crescimento.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5 hover:border-primary/30 transition-all">
            <div class="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            </div>
            <div>
              <span class="font-bold text-green-400">Lista Encadeada:</span>
              <p class="text-xs text-gray-400 mt-1">Cada bloco contém um ponteiro para o próximo. Sem fragmentação externa, mas acesso aleatório é lento.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-accent/30 hover:border-accent/50 transition-all">
            <div class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-accent"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            </div>
            <div>
              <span class="font-bold text-accent">Indexada (i-node):</span>
              <p class="text-xs text-gray-400 mt-1">O inode contém um índice com todos os ponteiros. Acesso aleatório rápido, suporta ficheiros enormes.</p>
            </div>
          </div>
        </div>

        <!-- JOURNALING -->
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Journaling: Proteção contra Corrupção
          </h3>
          <p class="text-sm leading-relaxed mb-4">
            Em sistemas antigos, se a energia caísse durante uma escrita, o sistema de ficheiros ficava corrompido. O <strong>Journaling</strong> resolve isto:
          </p>
          <ol class="space-y-3 text-xs">
            <li class="flex items-start gap-3">
              <div class="bg-indigo-500/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"><span class="font-bold text-indigo-400 text-sm">1</span></div>
              <div class="bg-black/40 p-3 rounded-lg flex-1">
                <p class="text-gray-300">O SO escreve a <strong>intenção da mudança</strong> num ficheiro de "Diário" (Journal) — antes de tocar nos dados reais.</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div class="bg-indigo-500/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"><span class="font-bold text-indigo-400 text-sm">2</span></div>
              <div class="bg-black/40 p-3 rounded-lg flex-1">
                <p class="text-gray-300">O SO realiza a <strong>escrita real</strong> nos blocos de dados e metadados.</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div class="bg-indigo-500/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"><span class="font-bold text-indigo-400 text-sm">3</span></div>
              <div class="bg-black/40 p-3 rounded-lg flex-1">
                <p class="text-gray-300">O SO <strong>remove a entrada do diário</strong> (commit), confirmando a operação.</p>
              </div>
            </li>
          </ol>
          <p class="text-xs text-gray-400 mt-4">Se houver um crash, no próximo boot o SO olha para o Diário e ou completa a tarefa ou desfaz a alteração parcial, garantindo a integridade do disco.</p>
        </div>

        <!-- HARD LINKS E SYMBOLIC LINKS -->
        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            Visão Master: Links e Inodes
          </h4>
          <p class="text-sm leading-relaxed mb-4">
            Como um Inode não tem nome, podes ter múltiplos nomes no sistema apontando para o mesmo Inode físico. Isto chama-se <strong>Hard Link</strong>. Se apagares um nome, o ficheiro continua no disco enquanto houver pelo menos um nome (link count > 0) ligado a esse Inode.
          </p>
          
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-black/40 p-4 rounded-lg">
              <h5 class="text-green-400 font-bold text-sm mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/></svg>
                Hard Link (ln)
              </h5>
              <ul class="text-xs space-y-1 text-gray-400">
                <li>• Aponta <strong>diretamente para o inode</strong></li>
                <li>• Mesmo inode, mesmo conteúdo</li>
                <li>• Ficheiro só é apagado quando link count = 0</li>
                <li>• <span class="text-red-400">Não funciona entre partições</span></li>
              </ul>
            </div>
            <div class="bg-black/40 p-4 rounded-lg">
              <h5 class="text-blue-400 font-bold text-sm mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/></svg>
                Symbolic Link (ln -s)
              </h5>
              <ul class="text-xs space-y-1 text-gray-400">
                <li>• Ficheiro especial com o <strong>caminho</strong> do alvo</li>
                <li>• Funciona entre partições diferentes</li>
                <li>• <span class="text-yellow-400">Se o alvo for apagado, o link "quebra"</span></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- SISTEMAS DE FICHEIROS COMUNS -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">3. Sistemas de Ficheiros Modernos</h3>
        <div class="grid md:grid-cols-3 gap-4 my-4">
          <div class="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
            <h4 class="font-bold text-blue-400 mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              ext4 (Linux)
            </h4>
            <ul class="text-xs space-y-1 text-gray-400">
              <li>• Padrão do Linux</li>
              <li>• Journaling completo</li>
              <li>• Máx: 1 EB, ficheiro 16 TB</li>
              <li>• Suporte a extents</li>
            </ul>
          </div>
          <div class="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
            <h4 class="font-bold text-green-400 mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              NTFS (Windows)
            </h4>
            <ul class="text-xs space-y-1 text-gray-400">
              <li>• Padrão do Windows</li>
              <li>• Master File Table (MFT)</li>
              <li>• Compressão e encriptação</li>
              <li>• Journaling (USN Journal)</li>
            </ul>
          </div>
          <div class="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
            <h4 class="font-bold text-purple-400 mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              APFS / ZFS / Btrfs
            </h4>
            <ul class="text-xs space-y-1 text-gray-400">
              <li>• Copy-on-Write (CoW)</li>
              <li>• Snapshots instantâneos</li>
              <li>• Compressão e deduplicação</li>
              <li>• Checksums (integridade)</li>
            </ul>
          </div>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Por que isso importa para o programador?
          </h4>
          <div class="space-y-3 text-sm">
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Desempenho de I/O:</strong>
                <p class="text-xs text-gray-400">Entender a estrutura de alocação ajuda a evitar fragmentação e otimizar leituras sequenciais.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Consistência de dados:</strong>
                <p class="text-xs text-gray-400">fsync() garante que os dados saem do buffer e vão para o disco físico (journal).</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Debugging:</strong>
                <p class="text-xs text-gray-400">Comandos como stat, ls -i, df -i mostram inodes e ajudam a diagnosticar problemas de disco cheio.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t15-quiz"
};