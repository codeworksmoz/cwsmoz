import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "git-t20",
  title: "Git Internals: Inodes e Object Database",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">⚙️ Como o Git "Pensa"</h2>
        <p class="text-lg">Por baixo do capô, o Git é apenas uma <strong>Base de Dados de Objetos</strong> (Content-addressable storage). Ele não guarda "diffs", ele guarda <i>snapshots</i> comprimidos dos teus ficheiros.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">Os 4 Objetos Sagrados</h3>
        <ul class="grid md:grid-cols-2 gap-4">
          <li class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <strong class="text-accent">Blob:</strong> Conteúdo bruto de um ficheiro.
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <strong class="text-accent">Tree:</strong> Representa um diretório (lista de blobs e outras trees).
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <strong class="text-accent">Commit:</strong> Metadados (autor, data, mensagem) que apontam para uma Tree.
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <strong class="text-accent">Tag:</strong> Um ponteiro imutável para um commit.
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-2">🔍 O Hash SHA-1</h3>
          <p class="text-sm leading-relaxed">
            Cada objeto no Git é identificado por um hash único. Se mudares uma única letra num ficheiro, o hash do Blob muda, o que muda o hash da Tree, o que muda o hash do Commit. É uma <strong>cadeia de integridade imutável</strong>.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "git-q20"
};