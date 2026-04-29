import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t6",
  title: "Fase 2: DDD Tático: Entities, Value Objects e Aggregates",
  enableInteractive: true,
  youtubeVideoId: "raf_id_ddd_tactical",
  quizId: "php-eco-mq6",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🧱 Os Blocos de Construção do Domínio
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>DDD Tático</strong> fornece os padrões necessários para traduzir o modelo mental do negócio em código PHP robusto. Um Engenheiro Master sabe que a maior parte dos bugs nasce da má gestão de estado e identidade. Ao distinguir entre <button>Entities</button> e <button>Value Objects</button>, removemos ambiguidades e criamos um sistema à prova de inconsistências.
        </p>
      </div>

      <!-- 1. ENTITIES -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Entities: A Continuidade da Identidade</h3>
        <p class="text-sm leading-relaxed">
          Uma <strong>Entidade</strong> é um objeto definido pela sua <strong>Identidade Única</strong>, e não pelos seus atributos. Um utilizador no nosso sistema continua a ser o mesmo utilizador mesmo que mude o nome ou o email. No PHP, isto significa que a igualdade entre duas entidades é verificada comparando o seu <button>ID</button>.
        </p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-php">
readonly class User {
    public function __construct(
        public Uuid $id, // Identidade Única
        public string $name
    ) {}

    public function equals(User $other): bool {
        return $this->id->equals($other->id);
    }
}
           </code></pre>
        </div>
      </section>

      <!-- 2. VALUE OBJECTS -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Value Objects: O Poder da Imutabilidade</h3>
        <p class="text-sm leading-relaxed">
          Ao contrário das entidades, um <strong>Value Object</strong> é definido pelos seus <strong>Atributos</strong>. Se dois objetos têm os mesmos valores, eles são iguais. Eles devem ser <strong>Imutáveis</strong>: se o valor muda, criamos um novo objeto em vez de alterar o atual.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Exemplos Comuns</h4>
             <ul class="text-[10px] space-y-2 opacity-80">
               <li>💰 <strong>Money:</strong> (valor e moeda).</li>
               <li>📧 <strong>Email:</strong> (validação nativa no construtor).</li>
               <li>📍 <strong>Address:</strong> (rua, número, cidade).</li>
               <li>🎨 <strong>Color:</strong> (RGB ou HEX).</li>
             </ul>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Vantagem Master</h4>
             <p class="text-[10px] leading-relaxed">
               Value Objects movem a lógica de validação para fora da entidade. Em vez de validar o email no <code>User</code>, criamos um <code>EmailValueObject</code> que se valida a si próprio no nascimento, garantindo que nenhum email inválido flutue pelo sistema.
             </p>
          </div>
        </div>
      </section>

      <!-- 3. AGGREGATES -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Aggregates e a Fronteira de Consistência</h3>
        <p class="text-sm leading-relaxed">
          Um <strong>Agregado</strong> é um grupo de objetos (Entities e Value Objects) que são tratados como uma unidade única para mudanças de dados. Cada agregado possui uma <strong>Aggregate Root</strong> (Raiz), que é a única porta de entrada para o mundo exterior.
        </p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Regra de Ouro:</h4>
          <p class="text-xs leading-relaxed">
            Nada de fora do agregado pode ter uma referência direta a algo dentro dele, exceto à Raiz. Se queres mudar um item de uma encomenda (<button>Order</button>), deves pedir à <button>OrderEntity</button> (Raiz) para o fazer. Isto garante que as <strong>Invariantes</strong> (regras de consistência) sejam sempre respeitadas.
          </p>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 O Mindset do Arquiteto de Domínio</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Pense em termos de comportamentos e invariantes, não apenas em tabelas de base de dados. Ao dominar os blocos táticos do DDD, você transforma o PHP de uma linguagem de 'scripts' numa ferramenta capaz de sustentar as lógicas de negócio mais complexas do planeta."
        </p>
      </section>
    </div>
  `,
};
