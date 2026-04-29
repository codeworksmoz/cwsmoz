import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t12",
  title: "Tries: Eficiência em Prefixos e Dicionários",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🔤 O Coração do Autocomplete
        </h2>
        <p class="text-lg leading-relaxed">
          Uma **Trie** (Prefix Tree) é uma árvore especializada onde cada nó representa um único caractere. É a estrutura ideal para buscas rápidas em strings, onde a complexidade depende do tamanho da palavra e não do número de itens no banco.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Busca em O(L)</h3>
        <p class="text-sm">Independentemente de teres 10 ou 10 milhões de palavras, encontrar a palavra "MOZ" leva sempre 3 passos. O tempo de busca é proporcional apenas ao comprimento da string (L).</p>

        <h3 class="text-xl font-bold font-headline">Aplicações de Elite</h3>
        <ul class="grid md:grid-cols-2 gap-4">
          <li class="p-3 bg-card border rounded-xl border-white/5 text-xs">
            <strong>IP Routing:</strong> Tabelas de encaminhamento de rede usam Tries para encontrar o "Longest Prefix Match".
          </li>
          <li class="p-3 bg-card border rounded-xl border-white/5 text-xs">
            <strong>Spell Checkers:</strong> Verificação ortográfica e dicionários inteligentes.
          </li>
        </ul>
      </div>
    </div>
  `,
  quizId: "ds-mq12"
};
