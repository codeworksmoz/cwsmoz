import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t8",
  title: "Sistemas de Ficheiros (File Systems)",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">📂 Armazenamento Persistente</h2>
      <p>O Sistema de Ficheiros é a abstração que permite ao utilizador organizar dados em ficheiros e diretórios.</p>
      
      <div class="bg-card p-4 rounded-xl border font-code text-sm">
        Exemplos: Ext4 (Linux), NTFS (Windows), APFS (macOS), FAT32.
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Estruturas de Dados:</h3>
        <ul>
          <li><strong>Inodes:</strong> Contêm metadados sobre o ficheiro (tamanho, permissões, localização).</li>
          <li><strong>Journalling:</strong> Registo de alterações para evitar corrupção em caso de queda de energia.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "os-q8"
};