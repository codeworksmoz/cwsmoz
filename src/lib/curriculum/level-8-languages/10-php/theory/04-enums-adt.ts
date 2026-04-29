import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m4",
  title: "Fase 1: Enums e Algebraic Data Types no PHP 8",
  youtubeVideoId: "9TycLR0TqFA",
  enableInteractive: true,
  quizId: "php-mq4",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          💎 Tipagem de Próxima Geração
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Até ao PHP 8.0, utilizávamos constantes de classe (<button>const</button>) para representar estados, o que era inseguro pois o motor aceitava qualquer valor escalar. Os <button>Enums</button> trouxeram a <strong>segurança de tipo nominal</strong>: um estado agora é um objeto único e imutável.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Unit Enums vs Backed Enums</h3>
        <p class="text-sm leading-relaxed">
          Existem dois sabores de Enums no PHP. Os <button>Unit Enums</button> são casos puros, enquanto os <button>Backed Enums</button> possuem um valor escalar (string ou int) para persistência em base de dados.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
             <h4 class="font-bold text-primary text-xs mb-2">Unit Enum (Lógica Pura)</h4>
             <pre><code class="language-php">
enum Priority {
    case Low;
    case High;
}
             </code></pre>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
             <h4 class="font-bold text-primary text-xs mb-2">Backed Enum (Persistência)</h4>
             <pre><code class="language-php">
enum Status: string {
    case Active = 'A';
    case Ghost = 'G';
}
             </code></pre>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Enums como Objetos: Métodos e Interfaces</h3>
        <p class="text-sm leading-relaxed">
          Diferente de linguagens como C#, no PHP os Enums podem conter métodos. Isto permite encapsular a lógica de exibição ou conversão dentro da própria definição do tipo.
        </p>

        <div class="space-y-4">
           <pre><code class="language-php">
enum UserRole: string implements HasLabel {
    case Admin = 'admin';
    case Dev = 'developer';

    public function getLabel(): string {
        return match($this) {
            self::Admin => 'Administrador do Sistema',
            self::Dev => 'Engenheiro de Software',
        };
    }

    public static function listRoles(): array {
        return array_column(self::cases(), 'value');
    }
}
           </code></pre>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Pattern Matching e Exaustividade</h3>
        <p class="text-sm leading-relaxed">
          A maior vantagem de usar Enums com a expressão <button>match</button> é a <strong>segurança de exaustividade</strong>. Se adicionares um novo caso ao Enum e não o tratares no match, o PHP lançará um <button>UnhandledMatchError</button>, impedindo bugs silenciosos em produção.
        </p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Instanciação Segura</h4>
          <p class="text-xs mb-4">Ao receber dados da base de dados, utilizamos <button>from()</button> ou <button>tryFrom()</button> para instanciar o objeto correto.</p>
          <pre><code class="language-php">
// Lança ValueError se 'X' não existir
$status = Status::from('A'); 

// Retorna null se não existir (Fail-safe)
$status = Status::tryFrom($_GET['status']); 
          </code></pre>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Visão de Arquiteto</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Enums transformam a sua aplicação numa máquina de estados finitos. No nosso servidor de eventos, utilizaremos Enums para garantir que uma mensagem nunca entre num estado inválido, tornando o sistema imune a corrupção de fluxo."
        </p>
      </section>
    </div>
  `,
};
