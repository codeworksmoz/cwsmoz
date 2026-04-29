import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m14",
  title: "Fase 3: Generators: Iteração Massiva com Memória Constante",
  enableInteractive: true,
  youtubeVideoId: "8hly31xKli0",
  quizId: "php-mq14",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          ♻️ Otimizando o Fluxo de Dados
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Um dos maiores vilões da performance em PHP é carregar coleções gigantescas para a memória RAM antes de as processar. Os <strong>Generators</strong> resolvem este problema utilizando a palavra-chave <button>yield</button>, permitindo que escrevas iteradores de alto desempenho com complexidade de espaço <strong>O(1)</strong>.
        </p>
      </div>

      <!-- 1. O CONCEITO DE YIELD -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. A Pausa Inteligente: yield</h3>
        <p class="text-sm leading-relaxed">
          Diferente do <button>return</button>, que encerra a função e devolve o valor, o <button>yield</button> devolve um valor ao iterador mas <strong>pausa</strong> a execução da função, preservando todo o estado interno. Na próxima iteração, a função retoma exatamente de onde parou.
        </p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-primary text-xs mb-4 uppercase">Exemplo: Lendo 1 Milhão de Linhas</h4>
           <pre><code class="language-php">
function getLargeLog(string $file): Generator {
    $handle = fopen($file, 'r');
    while (($line = fgets($handle)) !== false) {
        // 🛑 Pausa aqui e entrega a linha sem carregar o resto do ficheiro
        yield $line;
    }
    fclose($handle);
}

// O uso de memória será o mesmo para 10 ou 10 milhões de linhas!
foreach (getLargeLog('access.log') as $line) {
    process($line);
}
           </code></pre>
        </div>
      </section>

      <!-- 2. A CLASSE GENERATOR -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. A Classe Generator e a Interface Iterator</h3>
        <p class="text-sm leading-relaxed">
          Sempre que uma função usa <button>yield</button>, ela retorna automaticamente um objeto da classe <button>Generator</button>. Esta classe implementa a interface <button>Iterator</button>, o que significa que o objeto pode ser percorrido por um <button>foreach</button>.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Controle de Fluxo</h4>
             <ul class="text-[10px] space-y-2 opacity-80">
               <li><button>current()</button>: Retorna o valor atual do yield.</li>
               <li><button>next()</button>: Retoma a execução até o próximo yield.</li>
               <li><button>valid()</button>: Verifica se o gerador ainda tem valores.</li>
               <li><button>rewind()</button>: Lança uma exceção se chamado após o início (Geradores são forward-only).</li>
             </ul>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Comunicação Bidirecional</h4>
             <p class="text-[10px] leading-relaxed">
               Podes enviar dados de volta para dentro do gerador usando o método <button>send()</button>. Isto transforma o gerador numa corrotina básica, permitindo que a lógica de negócio influencie o fluxo de dados em runtime.
             </p>
          </div>
        </div>
      </section>

      <!-- 3. YIELD FROM -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Delegação com yield from</h3>
        <p class="text-sm leading-relaxed">
          Introduzido no PHP 7, o <button>yield from</button> permite que um gerador delegue a sua iteração para outro gerador, array ou objeto iterável. Isto é fundamental para compor fluxos de dados complexos de forma modular.
        </p>
        
        <pre><code class="language-php">
function subGenerator() {
    yield "Passo A";
    yield "Passo B";
}

function mainGenerator() {
    yield "Início";
    yield from subGenerator(); // Delega a iteração
    yield "Fim";
}
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão da Performance</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Em sistemas de alta escala, o processamento deve ser visto como um rio, não como um balde. Generators permitem que a sua aplicação mantenha uma pegada de memória mínima e constante, garantindo que o seu servidor nunca sofra um <strong>Out of Memory</strong> ao lidar com logs ou exportações massivas de dados."
        </p>
      </section>
    </div>
  `,
};