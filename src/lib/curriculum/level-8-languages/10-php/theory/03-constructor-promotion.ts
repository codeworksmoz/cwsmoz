import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m3",
  title: "Fase 1: Constructor Property Promotion e Redução de Boilerplate",
  youtubeVideoId: "R8dYLbJiTUE",
  enableInteractive: true,
  quizId: "php-mq3",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🚀 Eficiência Arquitetural e Menos Ruído
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Até ao PHP 7.4, criar um simples <button>DTO</button> (Data Transfer Object) exigia repetir o nome da propriedade quatro vezes: na declaração, no parâmetro do construtor, na atribuição e no uso. O <button>Constructor Property Promotion</button> do <button>PHP 8</button> elimina este "boilerplate", fundindo a declaração e a inicialização num único contrato atómico.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. A Sintaxe de Elite</h3>
        <p class="text-sm leading-relaxed">
          Ao adicionar um modificador de visibilidade (<button>public</button>, <button>private</button> ou <button>protected</button>) a um parâmetro do método <button>__construct</button>, o PHP instrui o motor <button>Zend Engine</button> a criar automaticamente a propriedade na classe e atribuir o valor recebido.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
             <h4 class="font-bold text-red-400 text-xs mb-2">Padrão Antigo (Verboso)</h4>
             <pre><code class="language-php">
class Event {
    public string $id;
    public string $topic;

    public function __construct(
        string $id, 
        string $topic
    ) {
        $this->id = $id;
        $this->topic = $topic;
    }
}
             </code></pre>
          </div>
          <div class="p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
             <h4 class="font-bold text-green-400 text-xs mb-2">PHP 8 Master (Conciso)</h4>
             <pre><code class="language-php">
class Event {
    public function __construct(
        public string $id,
        public string $topic,
    ) {}
}
             </code></pre>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Integração com Readonly Classes</h3>
        <p class="text-sm leading-relaxed">
          Para o nosso **High-Scale Event Server**, a imutabilidade é vital. Ao combinar o <button>Constructor Promotion</button> com o modificador <button>readonly</button> (introduzido no PHP 8.2), criamos objetos de dados que são garantidamente protegidos contra alterações após a sua criação, otimizando a previsibilidade do estado.
        </p>

        <pre><code class="language-php">
#[Attribute]
readonly class EventHandler {
    public function __construct(
        public string $topic,
        public int $priority = 100,
        private bool $async = true,
    ) {}
}
        </code></pre>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Ordem de Execução e Validação</h3>
        <p class="text-sm leading-relaxed">
          O motor do PHP realiza a promoção <strong>antes</strong> de executar qualquer código dentro do corpo do construtor. Isto permite que utilizes o bloco <button>{ ... }</button> para realizar validações complexas ou transformações de dados nos valores já promovidos.
        </p>
        
        <pre><code class="language-php">
public function __construct(
    public string $email,
) {
    // A propriedade $this->email já existe e está populada aqui
    if (!str_contains($this->email, '@')) {
        throw new InvalidArgumentException("Email inválido.");
    }
}
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regras de Ouro do Arquiteto</h4>
        <ul class="text-sm space-y-2 text-left max-w-2xl mx-auto opacity-90">
          <li>✅ <strong>Visibilidade é Obrigatória:</strong> Sem <button>public/private/protected</button>, a promoção não ocorre.</li>
          <li>✅ <strong>Tipagem Recomendada:</strong> Embora opcional, usar tipos nos parâmetros promovidos garante a integridade da <button>AST</button>.</li>
          <li>✅ <strong>Mistura Permitida:</strong> Podes ter parâmetros promovidos e parâmetros normais (ex: um logger que não precisa de ser propriedade) no mesmo construtor.</li>
          <li>❌ <strong>Sem Duplicação:</strong> Não podes declarar a propriedade no corpo da classe E no construtor se usares promoção.</li>
        </ul>
      </section>
    </div>
  `,
};
