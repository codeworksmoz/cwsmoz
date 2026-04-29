import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "db-t6",
  title: "Transações e Propriedades ACID: A Engenharia da Consistência",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400 flex items-center gap-2">💎 O Contrato Sagrado dos Dados</h2>
        <p class="text-lg">Uma transação é uma unidade lógica de trabalho. Se falhar no meio, o banco deve garantir que nada foi alterado. Sem as propriedades <strong>ACID</strong>, o mundo financeiro digital colapsaria.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">O Modelo ACID</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-primary">Atomicity (Atomicidade):</strong> Tudo ou nada. Se um depósito de 10 passos falhar no 9º, o banco faz o <i>Rollback</i> total.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-primary">Consistency (Consistência):</strong> A transação leva o banco de um estado válido a outro, respeitando todas as chaves e restrições (Constraints).
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-primary">Isolation (Isolamento):</strong> Transações paralelas não podem ver o "rascunho" uma da outra. Controlado por níveis como <i>Read Committed</i> ou <i>Serializable</i>.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-primary">Durability (Durabilidade):</strong> Uma vez feito o <i>Commit</i>, o dado está no disco. Mesmo que a luz falhe no segundo seguinte, o dado está salvo.
          </li>
        </ul>
      </div>
    </div>
  `,
  quizId: "db-mq6"
};