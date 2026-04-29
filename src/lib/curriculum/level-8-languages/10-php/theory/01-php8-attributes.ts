import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m1",
  title: "Fase 1: PHP 8 Attributes: Metadados Nativos de Elite",
  youtubeVideoId: "R8dYLbJiTUE",
  enableInteractive: true,
  quizId: "php-mq1",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🏷️ Metadados na Árvore de Sintaxe (AST)
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Até ao PHP 7.4, a "metaprogramação" dependia de strings dentro de comentários (<button>Docblocks</button>). O motor precisava de realizar um parsing manual de texto em runtime, o que introduzia latência. Os <button>Attributes</button> do PHP 8 mudaram o paradigma: agora, os metadados são cidadãos de primeira classe integrados na <button>Zend Engine</button>.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Fim do Parsing de Comentários</h3>
        <p class="text-sm leading-relaxed">
          Os <button>Attributes</button> são compilados como parte da estrutura da classe. Isto significa que o motor do PHP reconhece a intenção técnica durante a fase de <button>Compilation</button>, eliminando o custo de leitura de strings que bibliotecas como o Doctrine Annotations exigiam no passado.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
             <h4 class="font-bold text-red-400 text-xs mb-2">Abordagem Legada (Lenta)</h4>
             <pre><code class="language-php">
/** 
 * @EventHandler(topic="user.created") 
 */
class WelcomeHandler {}
             </code></pre>
             <p class="text-[9px] mt-2 opacity-60">Exige Regex para ler o comentário em cada request.</p>
          </div>
          <div class="p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
             <h4 class="font-bold text-green-400 text-xs mb-2">Abordagem Master (Nativa)</h4>
             <pre><code class="language-php">
#[EventHandler(topic: "user.created")]
class WelcomeHandler {}
             </code></pre>
             <p class="text-[9px] mt-2 opacity-60">Integrado na AST. Performance de nível industrial.</p>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Anatomia de um Atributo de Elite</h3>
        <p class="text-sm leading-relaxed">
          Um atributo é apenas uma classe marcada com o atributo nativo <button>#[Attribute]</button>. Podes restringir onde ele pode ser aplicado usando constantes como <button>Attribute::TARGET_METHOD</button> para evitar erros de arquitetura.
        </p>

        <div class="space-y-4">
           <pre><code class="language-php">
#[Attribute(Attribute::TARGET_CLASS | Attribute::TARGET_METHOD)]
class EventHandler {
    public function __construct(
        public string $topic,
        public int $priority = 100
    ) {}
}
           </code></pre>
           <p class="text-xs text-muted-foreground italic">Nota: O uso de <button>Constructor Promotion</button> no construtor do atributo torna a definição extremamente enxuta.</p>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Invocação via Reflection API</h3>
        <p class="text-sm leading-relaxed">
          Para ler estes dados, utilizamos a <button>Reflection API</button>. O método <button>getAttributes()</button> permite filtrar por classe e instanciar o metadado como um objeto real através do método <button>newInstance()</button>.
        </p>
        
        <pre><code class="language-php">
$reflection = new ReflectionClass(WelcomeHandler::class);
$attributes = $reflection->getAttributes(EventHandler::class);

foreach ($attributes as $attribute) {
    // Transforma o metadado numa instância da classe EventHandler
    $handlerConfig = $attribute->newInstance();
    
    echo "Escutando tópico: " . $handlerConfig->topic;
}
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Visão do Arquiteto</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Os <button>Attributes</button> permitem criar sistemas de <button>auto-discovery</button>. No nosso servidor de eventos, eles eliminam ficheiros de configuração manuais, permitindo que o motor encontre automaticamente todos os ouvintes apenas escaneando as classes do projeto."
        </p>
      </section>
    </div>
  `
};