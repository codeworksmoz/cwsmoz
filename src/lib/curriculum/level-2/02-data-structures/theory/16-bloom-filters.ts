import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t16",
  title: "Bloom Filters: Verificação Probabilística de Memória",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🎲 "Talvez esteja, Mas garantidamente não está"</h2>
        <p class="text-lg leading-relaxed">
          Um **Bloom Filter** é uma estrutura de dados espacialmente eficiente que te diz se um elemento pertence a um conjunto. O segredo? Ele pode dar **Falsos Positivos**, mas nunca Falsos Negativos.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Como funciona a Mágica?</h3>
        <p class="text-sm">Usamos um array de bits e múltiplas funções hash. Ao inserir, ativamos os bits nos índices gerados. Ao consultar, se algum desses bits estiver em zero, temos a certeza absoluta que o item não existe.</p>
        
        <h3 class="text-xl font-bold font-headline text-accent">Vantagem de Escala</h3>
        <p class="text-sm">Podes verificar se um utilizador existe entre 1 bilião de registos usando apenas alguns Megabytes de RAM, evitando consultas caras à base de dados para itens inexistentes.</p>
      </div>
    </div>
  `,
  quizId: "ds-mq16"
};
