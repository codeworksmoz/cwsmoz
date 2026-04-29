import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t8",
  title: "Design Patterns I: Padrões de Criação (Creational)",
  enableInteractive: true,
  youtubeVideoId: "raf_id_creational_patterns",
  quizId: "php-eco-mq8",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🏗️ A Engenharia da Instanciação
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Padrões de criação abstraem o processo de instanciação. Eles tornam o sistema independente de como os seus objetos são criados, compostos e representados. No nível Master, utilizamos estes padrões para garantir o <strong>Desacoplamento</strong>: o seu código não deve saber qual classe concreta está a ser instanciada, apenas qual contrato (interface) ela satisfaz.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Singleton: O Mal Necessário?</h3>
        <p class="text-sm leading-relaxed">
          Garante que uma classe tem apenas uma instância e fornece um ponto de acesso global. Embora útil para <button>Database Connections</button> ou <button>Loggers</button>, o abuso do Singleton dificulta os testes unitários e oculta dependências.
        </p>
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-php">
final class Database {
    private static ?self $instance = null;
    
    private function __construct() {} // Proíbe o 'new' externo
    private function __clone() {}     // Proíbe a clonagem

    public static function getInstance(): self {
        return self::$instance ??= new self();
    }
}
           </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Factory Method e Abstract Factory</h3>
        <p class="text-sm leading-relaxed">
          O <button>Factory Method</button> define uma interface para criar um objeto, mas deixa as subclasses decidirem qual classe instanciar. Já a <button>Abstract Factory</button> fornece uma interface para criar famílias de objetos relacionados sem especificar as suas classes concretas.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Uso no Event Server</h4>
             <p class="text-xs opacity-70 leading-relaxed">
               Podemos usar uma fábrica para decidir se um evento deve ser processado via <button>RedisQueue</button> (Assíncrono) ou via <button>DirectExecution</button> (Síncrono), dependendo da carga ou do tipo de evento.
             </p>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">A Vantagem Master</h4>
             <p class="text-[10px] leading-relaxed">
               Ao centralizar a lógica de criação, podes introduzir novas implementações (ex: um novo provedor de Cloud) sem alterar uma única linha de código nos controladores ou serviços que consomem esses objetos.
             </p>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Builder: Construção de Objetos Complexos</h3>
        <p class="text-sm leading-relaxed">
          Quando um objeto exige muitos parâmetros opcionais ou uma configuração em passos, o construtor torna-se um "pesadelo de argumentos". O padrão <button>Builder</button> permite construir o objeto passo a passo, mantendo a imutabilidade.
        </p>
        
        <pre><code class="language-php">
$event = (new EventBuilder())
    ->withId('tx-101')
    ->withPayload($data)
    ->withPriority(Priority::High)
    ->build();
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão do Arquiteto</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Padrões de criação são sobre o controle do nascimento. No nível Master, evitamos o uso indiscriminado do <code>new</code> dentro da lógica de negócio. Delegamos a criação para fábricas e contentores, garantindo que o sistema seja flexível o suficiente para evoluir sem quebras estruturais."
        </p>
      </section>
    </div>
  `
};