import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m6",
  title: "Fase 2: Gestão de Memória: Reference Counting e GC Internals",
  enableInteractive: true,
  quizId: "php-mq6",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🧠 A Engenharia da Memória no PHP 8
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O PHP utiliza uma gestão de memória baseada em <button>Reference Counting</button>. No nível Master, entendemos que o objetivo do motor não é apenas alocar memória, mas garantir a sua libertação determinística através do <button>Zend Memory Manager</button>, evitando as famosas pausas "stop-the-world" de outros sistemas.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O zval e o Contador de Referências</h3>
        <p class="text-sm leading-relaxed">
          Toda a variável em PHP é guardada numa estrutura chamada <button>zval</button> (Zend Value). Cada <button>zval</button> possui um contador interno chamado <button>refcount</button>.
        </p>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <p class="text-xs">
              Sempre que uma variável é atribuída a outra, o <button>refcount</button> aumenta. Quando uma variável sai do escopo ou é destruída via <button>unset()</button>, o <button>refcount</button> diminui. Quando chega a <strong>zero</strong>, o PHP liberta a memória instantaneamente.
            </p>
          </li>
        </ul>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Copy-on-Write (COW): Performance O(1)</h3>
        <p class="text-sm leading-relaxed">
          Esta é a técnica de elite do PHP. Ao passar um array de 100MB para uma função, o PHP <strong>não copia</strong> os dados. Ele apenas aponta para o mesmo <button>zval</button> e aumenta o <button>refcount</button>. A cópia real (duplicação da RAM) só acontece se o código tentar <strong>escrever</strong> no array.
        </p>

        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-primary text-xs mb-4 uppercase">Exemplo de Eficiência COW</h4>
           <pre><code class="language-php">
$grandeArray = range(1, 1000000); // Aloca memória
$copia = $grandeArray; // ⚡ Rápido: apenas aponta para o mesmo local (refcount=2)

$copia[] = 5; // 🔨 Agora sim: ocorre o Copy-on-Write e a memória duplica.
           </code></pre>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. O Ciclo de Coleta (Garbage Collector)</h3>
        <p class="text-sm leading-relaxed">
          O <button>Reference Counting</button> tem uma falha: referências circulares (Objeto A aponta para B, que aponta para A). O <button>Cycle Collector</button> entra em ação quando o buffer de "raízes potenciais" atinge 10.000 nós.
        </p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">🔍 Algoritmo de Coleta:</h4>
          <p class="text-xs leading-relaxed">
            O coletor temporariamente decrementa o <button>refcount</button> de todos os nós. Se o contador chegar a zero, significa que aquela estrutura é um ciclo órfão e a memória é libertada. Se for maior que zero, o contador é restaurado.
          </p>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Monitorização de Baixo Nível</h3>
        <p class="text-sm leading-relaxed">
          Em scripts CLI de alta escala (como o nosso servidor de eventos), deves monitorizar o uso real de memória para detetar <button>Memory Leaks</button> (fugas de memória).
        </p>
        
        <pre><code class="language-php">
// Retorna o uso de memória em bytes
$usage = memory_get_usage(true); 

// Retorna o pico de memória atingido durante o request
$peak = memory_get_peak_usage(true);

// Força a execução do coletor de ciclos
gc_collect_cycles();
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Arquiteto de Sistemas</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "A memória no PHP é efêmera por design (modelo Shared-Nothing). No entanto, ao construir servidores persistentes com <button>Swoole</button> ou <button>RoadRunner</button>, a gestão de memória torna-se a sua prioridade número um para evitar que o servidor crash após milhões de requests."
        </p>
      </section>
    </div>
  `,
};
