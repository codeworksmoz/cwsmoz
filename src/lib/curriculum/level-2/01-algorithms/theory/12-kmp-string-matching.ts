import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "alg-t12",
  title: "Busca em Strings: O Algoritmo KMP",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🕵️ Knuth-Morris-Pratt (KMP)</h2>
        <p class="text-lg leading-relaxed">
          A busca simples de texto (Brute Force) é ineficiente O(n*m). O KMP utiliza o conhecimento de falhas anteriores para nunca voltar atrás no texto principal, atingindo performance linear <strong>O(n + m)</strong>.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">O Segredo: Tabela LPS</h3>
        <p class="text-sm">A Tabela de <strong>Longest Prefix that is also Suffix</strong> pré-processa o padrão (a palavra que procuras) para saber quanto podes "saltar" no texto se uma letra não bater.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">Exemplo Lógico:</h4>
          <p class="text-xs">Ao procurar "ABCDABD" e falhar no último 'D', o KMP sabe que o prefixo "AB" já foi validado no final do padrão anterior, por isso não reinicia a busca do zero; ele apenas retoma de onde o padrão se repete.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "alg-q12"
};
