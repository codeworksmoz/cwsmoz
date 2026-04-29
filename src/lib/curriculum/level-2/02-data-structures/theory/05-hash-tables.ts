import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t5",
  title: "Hash Tables: Funções, Colisões e Performance O(1)",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🔑 Busca em Tempo Constante
        </h2>
        <p class="text-lg leading-relaxed">
          Tabelas Hash são a estrutura de dados mais importante para performance prática. Elas permitem mapear uma chave (ex: string) para um índice numérico através de uma **Função Hash**, atingindo busca em O(1) na média.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Dilema das Colisões</h3>
        <p class="text-sm">Diferentes chaves podem gerar o mesmo índice. Engenheiros de elite dominam duas resoluções:</p>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-accent">Chaining:</strong> Cada índice aponta para uma lista ligada de elementos. Simples e robusto sob carga.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-accent">Open Addressing:</strong> Procura o próximo espaço vazio no array (Linear Probing). Melhor para o cache do CPU, mas sensível ao aglomeramento.
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline text-primary">2. Load Factor e Rehashing</h3>
        <p class="text-sm">Quando a tabela fica muito cheia (Load Factor > 0.7), as colisões aumentam e a performance cai para O(n). O sistema deve realizar o **Rehash**: criar uma tabela maior e re-distribuir todos os itens.</p>
      </div>
    </div>
  `,
  quizId: "ds-mq5"
};
