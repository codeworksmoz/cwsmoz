import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "jv-m6",
  title: "Fase 2: Transações e Propriedades ACID no Core Banking",
  enableInteractive: true,
  content: `
    <div class="space-y-12">
      <div class="bg-red-500/5 p-8 rounded-[2.5rem] border border-red-500/20 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-red-400 flex items-center gap-3">
          💎 O Contrato Sagrado da Consistência
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Num sistema de <strong>Core Banking</strong>, as transações são o pilar central. Se um passo falha numa transferência de fundos, o sistema deve garantir que nada foi alterado. Sem as propriedades <strong>ACID</strong>, o mundo financeiro digital colapsaria em inconsistências.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-red-500/20 pb-2 text-accent">1. O Modelo ACID na Prática</h3>
        <ul class="space-y-6">
          <li class="p-6 bg-muted/20 rounded-2xl border border-white/5 shadow-lg">
            <strong class="text-primary text-lg block mb-2">A - Atomicity (Atomicidade):</strong>
            <p class="text-sm opacity-80">Tudo ou nada. Numa transferência entre A e B, se o débito em A ocorrer mas o crédito em B falhar, o débito em A deve ser revertido (Rollback) automaticamente.</p>
          </li>
          <li class="p-6 bg-muted/20 rounded-2xl border border-white/5 shadow-lg">
            <strong class="text-primary text-lg block mb-2">C - Consistency (Consistência):</strong>
            <p class="text-sm opacity-80">A transação move a base de dados de um estado válido a outro. Nenhuma regra de negócio (ex: saldo negativo não permitido) pode ser violada ao fim do processo.</p>
          </li>
          <li class="p-6 bg-muted/20 rounded-2xl border border-white/5 shadow-lg">
            <strong class="text-primary text-lg block mb-2">I - Isolation (Isolamento):</strong>
            <p class="text-sm opacity-80">Transações paralelas não podem ver o estado intermédio uma da outra. Nível Master: utilizamos <i>Serializable</i> ou <i>Snapshot Isolation</i> para evitar "Dirty Reads" e "Phantom Reads".</p>
          </li>
          <li class="p-6 bg-muted/20 rounded-2xl border border-white/5 shadow-lg">
            <strong class="text-primary text-lg block mb-2">D - Durability (Durabilidade):</strong>
            <p class="text-sm opacity-80">Uma vez feito o <i>Commit</i>, o dado é gravado no disco físico (WAL - Write Ahead Log) e sobrevive a falhas de energia no servidor.</p>
          </li>
        </ul>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-red-500/20 pb-2 text-accent">2. Transações no Spring Boot 3</h3>
        <p class="text-sm leading-relaxed">
          No ecossistema Java, utilizamos o aspecto <code>@Transactional</code> para delegar a gestão de transações ao framework, garantindo o Proxy de AOP (Aspect Oriented Programming) correto.
        </p>
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-java">
@Service
public class TransferService {
    @Transactional(isolation = Isolation.SERIALIZABLE, rollbackFor = Exception.class)
    public void transfer(Long fromId, Long toId, BigDecimal amount) {
        accountRepo.withdraw(fromId, amount);
        accountRepo.deposit(toId, amount);
        // Se qualquer linha falhar, o Spring dispara o Rollback
    }
}
           </code></pre>
        </div>
      </section>

      <section class="bg-red-500/5 p-8 rounded-[2rem] border-2 border-dashed border-red-500/20 text-center">
        <h4 class="text-xl font-bold text-red-400 mb-4">⚠️ O Perigo do Lazy Loading</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Um erro comum de juniores é tentar aceder a dados preguiçosos (Lazy) fora do escopo da transação, causando a famosa <code>LazyInitializationException</code>. Engenheiros Master utilizam <strong>DTOs</strong> ou <strong>Entity Graphs</strong> para garantir que todos os dados necessários sejam carregados dentro da fronteira ACID."
        </p>
      </section>
    </div>
  `,
};
