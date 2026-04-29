
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "des-t14",
  title: "Caching Strategies: L1, L2 e Invalidação",
  quizId: "des-q14-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🏎️ A Memória do Sistema</h2>
        <p class="text-lg">Cache é a técnica de guardar dados caros num local de acesso rápido. É a ferramenta mais potente para reduzir custos de servidor e latência do utilizador.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">Padrões de Leitura e Escrita</h3>
        <ul class="space-y-3 text-sm">
          <li><strong>Cache-Aside:</strong> A aplicação verifica o cache; se falhar, lê da DB e atualiza o cache.</li>
          <li><strong>Write-Through:</strong> Escreve no cache e na DB simultaneamente. Consistência alta.</li>
          <li><strong>Write-Behind:</strong> Escreve no cache e atualiza a DB depois em background. Performance extrema.</li>
        </ul>
        <p class="text-xs text-red-400 font-bold italic mt-4">"Existem apenas dois problemas difíceis na computação: invalidação de cache e dar nomes às coisas."</p>
      </div>
    </div>
  `
};
