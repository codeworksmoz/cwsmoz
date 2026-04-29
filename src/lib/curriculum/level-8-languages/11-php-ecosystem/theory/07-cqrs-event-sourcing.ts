import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t7",
  title: "Fase 2: CQRS e Event Sourcing: O Estado como História",
  youtubeVideoId: "u044iM9xsTM", // ID da video-aula master
  enableInteractive: true,
  quizId: "php-eco-mq7",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🎬 A Web como um Filme, não como uma Foto
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Na engenharia de sistemas tradicional, guardamos o estado atual (ex: Saldo = 100). No <strong>Event Sourcing</strong>, a fonte da verdade não é o saldo, mas a lista de todos os eventos que levaram a esse saldo. Combinado com o <strong>CQRS</strong>, permitimos que as leituras escalem de forma independente das escritas, atingindo performance de nível planetário.
        </p>
      </div>

      <!-- 1. EVENT SOURCING -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Event Sourcing: O Log Imutável</h3>
        <p class="text-sm leading-relaxed">
          Cada mudança de estado no domínio é capturada como um <button>Domain Event</button>. Estes eventos são gravados num <button>Event Store</button> (um log de apenas inserção). Isto garante que o sistema possua uma trilha de auditoria perfeita e permite o <strong>Time Travel Debugging</strong>: podes reconstruir o estado do sistema exatamente como ele estava em qualquer ponto do passado.
        </p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-primary text-xs mb-4 uppercase">Exemplo de Fluxo de Eventos</h4>
           <ul class="space-y-2 font-mono text-[11px] text-accent">
             <li>1. AccountCreated { id: 101, initial: 0 }</li>
             <li>2. MoneyDeposited { amount: 500 }</li>
             <li>3. MoneyWithdrawn { amount: 200 }</li>
             <li class="text-white border-t border-white/10 pt-2">Saldo Atual (Projeção): 300 MT</li>
           </ul>
        </div>
      </section>

      <!-- 2. CQRS -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. CQRS: Segregação de Comando e Consulta</h3>
        <p class="text-sm leading-relaxed">
          O <strong>CQRS (Command Query Responsibility Segregation)</strong> propõe usar modelos diferentes para atualizar e ler dados.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Write Model (Commands)</h4>
             <p class="text-xs opacity-70 leading-relaxed">
               Focado na <strong>Integridade e Validação</strong>. Recebe intenções do utilizador, valida regras de negócio e gera eventos. <br>Ex: <code>RegisterUserCommand</code>.
             </p>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Read Model (Queries)</h4>
             <p class="text-xs opacity-70 leading-relaxed">
               Focado na <strong>Performance</strong>. Utiliza <button>Projections</button> (tabelas desnormalizadas) prontas para serem exibidas na UI sem Joins complexos.
             </p>
          </div>
        </div>
      </section>

      <!-- 3. PROJEÇÕES E CONSISTÊNCIA -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Projections e Consistência Eventual</h3>
        <p class="text-sm leading-relaxed">
          Uma <button>Projection</button> é um processo que "ouve" o stream de eventos e atualiza um banco de leitura (ex: Redis ou uma tabela SQL simples). Como isto acontece de forma assíncrona, o sistema opera sob o regime de <strong>Consistência Eventual</strong>: o dado pode demorar alguns milissegundos para aparecer no ecrã após o comando, mas o sistema escala infinitamente.
        </p>
        
        <pre><code class="language-php">
// Escutador de Projeção Master
class UserDashboardProjector {
    public function onUserSignedUp(UserSignedUp $event): void {
        // Atualiza a tabela de leitura desnormalizada instantaneamente
        $this->db->execute(
            "INSERT INTO dashboard_stats (user_id, status) VALUES (?, ?)",
            [$event->id, 'ACTIVE']
        );
    }
}
        </code></pre>
      </section>

      <!-- 4. SNAPSHOTS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Otimização Master: Snapshots</h3>
        <p class="text-sm leading-relaxed">
          Se um agregado tem 1 milhão de eventos, reconstruí-lo do zero em cada acesso é lento. Um Engenheiro Master utiliza <button>Snapshots</button>: a cada 100 eventos, o banco guarda uma "foto" do estado. Para carregar, o sistema lê o último snapshot e aplica apenas os eventos que ocorreram depois dele.
        </p>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão da Alta Disponibilidade</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "CQRS e Event Sourcing são as ferramentas que permitem a empresas como o LinkedIn e a Netflix gerirem tráfegos globais. Ao remover a dependência de um único banco de dados relacional para tudo, você destrava a capacidade do PHP de processar fluxos de dados massivos com integridade total."
        </p>
      </section>
    </div>
  `,
};
