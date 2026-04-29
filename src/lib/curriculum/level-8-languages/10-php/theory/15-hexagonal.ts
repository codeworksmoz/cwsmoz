import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m15",
  title: "Fase 3: Arquitetura Hexagonal: Desacoplamento de Domínio e Infraestrutura",
  youtubeVideoId: "raf_id_hexagonal", // ID da video-aula de arquitetura master
  enableInteractive: true,
  quizId: "php-mq15",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          ⬢ O Domínio Soberano
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          A <strong>Arquitetura Hexagonal</strong> (ou Ports and Adapters) propõe que a lógica de negócio deve estar isolada de influências externas. No nível Master, entendemos que o seu código deve ser capaz de trocar o <button>MySQL</button> pelo <button>MongoDB</button>, ou o <button>Nginx</button> pelo <button>Swoole</button>, sem alterar uma única linha do coração do sistema.
        </p>
      </div>

      <!-- 1. O CORE -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Interior: Entidades e Casos de Uso</h3>
        <p class="text-sm leading-relaxed">
          No centro do hexágono vive o <strong>Domínio</strong>. Este código é escrito em <button>PHP Puro</button> (POPO - Plain Old PHP Objects), sem dependências de frameworks como Laravel ou Symfony.
        </p>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary block mb-1">Entities:</strong> Objetos que possuem identidade e regras de negócio (ex: <button>Event</button>, <button>User</button>).
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary block mb-1">Use Cases (Services):</strong> Orquestradores que realizam ações de negócio específicas (ex: <button>RegisterEventUseCase</button>).
          </li>
        </ul>
      </section>

      <!-- 2. PORTS E ADAPTERS -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Ports & Adapters: A Camada de Tradução</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Ports (Portas)</h4>
             <p class="text-xs opacity-70 leading-relaxed">
               São as <button>Interfaces</button> do PHP. Elas definem "como" o mundo exterior pode falar com o sistema ou como o sistema precisa de dados externos.
               <br/><br/><strong>Exemplo:</strong> <button>EventRepositoryInterface</button>.
             </p>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Adapters (Adaptadores)</h4>
             <p class="text-xs opacity-70 leading-relaxed">
               São as implementações concretas que traduzem a tecnologia externa para o contrato da Porta.
               <br/><br/><strong>Exemplo:</strong> <button>DoctrineEventRepository</button> ou <button>RedisCacheAdapter</button>.
             </p>
          </div>
        </div>
      </section>

      <!-- 3. INVERSÃO DE DEPENDÊNCIA -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Inversão de Dependência (DIP)</h3>
        <p class="text-sm leading-relaxed">
          O segredo da resiliência é a direção das dependências. Em arquiteturas amadoras, o domínio depende do banco. Na arquitetura Master, o domínio define uma <button>Porta</button> e a <button>Infraestrutura</button> submete-se a ela.
        </p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-php">
// 🏛️ No Domínio (Core): Independente de tecnologia
interface MessageBrokerPort {
    public function publish(string $topic, array $data): void;
}

// 🚜 Na Infraestrutura: Implementação específica
class KafkaAdapter implements MessageBrokerPort {
    public function publish(string $topic, array $data): void {
        // Lógica complexa do Kafka aqui...
    }
}
           </code></pre>
        </div>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Porquê usar Hexagonal em PHP?
        </h4>
        <ul class="text-sm space-y-2 opacity-90">
          <li>✅ <strong>Testabilidade Extrema:</strong> Podes testar o negócio trocando o banco por um <button>Mock</button> em memória instantaneamente.</li>
          <li>✅ <strong>Agnosticismo de Framework:</strong> O teu código core pode ser migrado entre diferentes versões de frameworks com esforço mínimo.</li>
          <li>✅ <strong>Evolução Tecnológica:</strong> Podes começar com um banco SQL e mudar para NoSQL apenas criando um novo <button>Adapter</button>.</li>
        </ul>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 O Mindset do Arquiteto</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Arquitetura Hexagonal é sobre longevidade. No nosso **Event Server**, o domínio será o rei, e as tecnologias de rede (<button>Swoole</button>), persistência (<button>PDO</button>) e filas (<button>RabbitMQ</button>) serão apenas detalhes periféricos que servem ao propósito do negócio."
        </p>
      </section>
    </div>
  `,
};
