import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m17",
  title: "Fase 4: Análise Estática: PHPStan e Psalm de Nível 9",
  enableInteractive: true,
  quizId: "php-mq17",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🔍 Prevenção de Bugs sem Execução
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          A <strong>Análise Estática</strong> é a prática de auditar o código-fonte através de modelos matemáticos sem o executar. No nível Master, utilizamos o <button>PHPStan</button> e o <button>Psalm</button> no <strong>Nível 9</strong> para atingir a "Segurança de Tipos Total", garantindo que erros de lógica e nulabilidade sejam detetados antes mesmo de o código chegar ao servidor de CI.
        </p>
      </div>

      <!-- 1. O RIGOR DO NÍVEL 9 -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. PHPStan Nível 9: A Guerra contra o 'mixed'</h3>
        <p class="text-sm leading-relaxed">
          Enquanto níveis básicos verificam apenas sintaxe e chamadas de métodos, o <button>Nível 9</button> é o mais rigoroso. Ele proíbe qualquer operação sobre o tipo <button>mixed</button>. Se o motor não consegue provar o tipo exato de um dado, ele obriga-te a realizar um <button>Type Narrowing</button> (Estreitamento de Tipo).
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
             <h4 class="font-bold text-red-400 text-xs mb-2">Código Rejeitado no Nível 9 ❌</h4>
             <pre><code class="language-php">
function process(mixed $data) {
    // Erro: Operação sobre mixed!
    return $data->execute(); 
}
             </code></pre>
          </div>
          <div class="p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
             <h4 class="font-bold text-green-400 text-xs mb-2">Código Master (Narrowed) ✅</h4>
             <pre><code class="language-php">
function process(mixed $data) {
    if ($data instanceof Task) {
        // Motor agora sabe que é Task
        return $data->execute();
    }
    throw new InvalidArgumentException();
}
             </code></pre>
          </div>
        </div>
      </section>

      <!-- 2. GENERICS NO PHP -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Generics via PHPDoc: @template</h3>
        <p class="text-sm leading-relaxed">O PHP não tem Generics nativos em runtime, mas ferramentas como <button>PHPStan</button> suportam <button>Generics Estáticos</button>. Isto permite criar coleções e repositórios onde o motor sabe exatamente qual objeto está a sair da lista.</p>

        <div class="space-y-4">
           <pre><code class="language-php">
/**
 * @template T of Event
 */
class EventCollection {
    /** @var array<int, T> */
    private array $items = [];

    /** @param T $item */
    public function add($item): void {
        $this->items[] = $item;
    }

    /** @return T */
    public function first() {
        return $this->items[0];
    }
}

// Ao usar: $collection = new EventCollection<UserSignup>();
// $collection->first() será tratado como UserSignup pelo IDE e Linter!
           </code></pre>
        </div>
      </section>

      <!-- 3. TAINT ANALYSIS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Psalm: Taint Analysis e Segurança</h3>
        <p class="text-sm leading-relaxed">
          O <button>Psalm</button> oferece uma funcionalidade de elite chamada <button>Taint Analysis</button>. Ele rastreia dados vindos de "fontes sujas" (<button>$_GET</button>, <button>$_POST</button>) e verifica se eles chegam a "sumidouros perigosos" (como <button>echo</button> ou <button>PDO::query</button>) sem passar por uma função de limpeza (sanitização).
        </p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Prevenção Automática de SQLi e XSS</h4>
          <p class="text-xs leading-relaxed">
            Se tentares imprimir um dado vindo da URL sem usar <button>htmlspecialchars()</button>, o <button>Psalm</button> fará o build falhar, agindo como um auditor de segurança robótico que nunca dorme.
          </p>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Filosofia do "Zero Bug"</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "A análise estática transforma a tipagem de um comentário opcional num erro de compilação obrigatório. No nosso servidor de eventos, o Nível 9 é o que nos permite dormir tranquilos, sabendo que a lógica foi validada por um provador de teoremas antes de rodar o primeiro byte."
        </p>
      </section>
    </div>
  `,
};
