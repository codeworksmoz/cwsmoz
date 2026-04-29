import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m9",
  title: "Fase 2: Reflection API: Introspecção de Classes e Atributos",
  youtubeVideoId: "raf_id_reflection", // ID fictício para a video-aula de elite
  enableInteractive: true,
  quizId: "php-mq9",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🔍 O Espelho do Código
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          A <button>Reflection API</button> do PHP permite que o seu código "olhe para si próprio" em tempo de execução. Como um engenheiro master, você não usa reflexão para tarefas comuns, mas para construir infraestruturas inteligentes que conseguem instanciar classes, ler metadados de <button>Attributes</button> e injetar dependências de forma automática.
        </p>
      </div>

      <!-- 1. INTROSPECÇÃO DE CLASSES -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Anatomia da ReflectionClass</h3>
        <p class="text-sm leading-relaxed">
          Para analisar uma classe, instanciamos um objeto <button>ReflectionClass</button>. Ele fornece acesso total à estrutura da classe, incluindo métodos, propriedades, constantes e interfaces implementadas.
        </p>
        
        <div class="space-y-4">
           <pre><code class="language-php">
// Obtendo o "espelho" da classe WelcomeHandler
$reflector = new ReflectionClass(WelcomeHandler::class);

echo "Nome da Classe: " . $reflector->getName();
echo "É uma classe final? " . ($reflector->isFinal() ? 'Sim' : 'Não');
           </code></pre>
        </div>
      </section>

      <!-- 2. LENDO ATRIBUTOS -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Extraindo Metadados: getAttributes()</h3>
        <p class="text-sm leading-relaxed">
          Esta é a função master para sistemas modernos. O método <button>getAttributes()</button> permite filtrar metadados específicos e instanciá-los via <button>newInstance()</button>. É assim que o nosso **Event Server** descobre quais classes devem tratar cada tópico.
        </p>

        <div class="space-y-4">
           <pre><code class="language-php">
$attributes = $reflector->getAttributes(EventHandler::class);

foreach ($attributes as $attr) {
    // Transforma o metadado numa instância viva do objeto EventHandler
    $config = $attr->newInstance();
    echo "Tópico registrado: " . $config->topic;
}
           </code></pre>
        </div>
      </section>

      <!-- 3. QUEBRANDO O ENCAPSULAMENTO -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. setAccessible() e Auditoria de Memória</h3>
        <p class="text-sm leading-relaxed">
          Embora o encapsulamento seja sagrado, em contextos de **Testes Unitários** ou **Serialização de Dados**, podemos precisar de ler propriedades privadas. O método <button>setAccessible(true)</button> permite que a Reflection API "fure" a barreira de visibilidade.
        </p>
        
        <pre><code class="language-php">
$prop = $reflector->getProperty('secretToken');
$prop->setAccessible(true); // Permite ler o que é privado

echo "O token secreto é: " . $prop->getValue($instance);
        </code></pre>
      </section>

      <!-- 4. PERFORMANCE E CACHING -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. O Custo da Introspecção</h3>
        <p class="text-sm leading-relaxed">
          Usar a <button>Reflection API</button> em cada request é computacionalmente caro. Engenheiros master utilizam a reflexão apenas no **Warmup** da aplicação (primeiro carregamento) e fazem o cache dos resultados (metadados mapeados) em ficheiros PHP nativos ou no <button>Redis</button>.
        </p>
      </div>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão do Arquiteto</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "A Reflection API é o motor por trás dos maiores frameworks do mundo (Laravel, Symfony). Ao dominá-la, deixas de usar as ferramentas como caixas pretas e passas a compreender como o software se auto-organiza e escala."
        </p>
      </section>
    </div>
  `
};
