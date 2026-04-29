import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m18",
  title: "Fase 4: JIT: Otimização de Silício e Benchmarking",
  enableInteractive: true,
  quizId: "php-mq18",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🏎️ PHP na Velocidade da CPU
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>JIT (Just-In-Time)</strong>, introduzido no <button>PHP 8</button>, é a tecnologia que permite ao PHP competir com linguagens compiladas como C++ e Rust em tarefas de computação pesada. Em vez de apenas interpretar <button>Opcodes</button> na <button>Zend VM</button>, o JIT traduz partes críticas do código diretamente para instruções nativas do processador em tempo de execução.
        </p>
      </div>

      <!-- 1. MECÂNICA DO JIT -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Ignorando a Máquina Virtual</h3>
        <p class="text-sm leading-relaxed">
          Tradicionalmente, a <button>Zend Engine</button> lê um <button>Opcode</button> (ex: ZEND_ADD) e chama uma função em C que sabe somar. Com o JIT ativo, o motor gera o código de máquina exato para aquela soma e o envia diretamente para os registos da <button>CPU</button>, eliminando a camada de tradução da VM para os caminhos mais executados do código (Hot Paths).
        </p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-primary text-xs mb-4 uppercase">O Ciclo de Aceleração</h4>
           <div class="flex items-center justify-between text-[10px] font-bold text-center gap-2">
             <div class="p-3 bg-muted rounded-lg flex-1">Script PHP</div>
             <div class="text-accent">→</div>
             <div class="p-3 bg-muted rounded-lg flex-1">Opcodes</div>
             <div class="text-accent">→</div>
             <div class="p-3 bg-indigo-500/20 border border-indigo-500/40 rounded-lg flex-1">JIT Compiler</div>
             <div class="text-accent">→</div>
             <div class="p-3 bg-green-500/20 border border-green-500/40 rounded-lg flex-1">Machine Code</div>
           </div>
        </div>
      </section>

      <!-- 2. TRACING VS FUNCTION -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Estratégias: Tracing JIT vs. Function JIT</h3>
        <p class="text-sm leading-relaxed">O PHP 8 implementa dois modos de operação que decidem o que deve ser otimizado:</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Function JIT</h4>
             <p class="text-xs opacity-70 leading-relaxed">
               Analisa e compila funções inteiras. É mais simples, mas pode otimizar ramos de código que nunca são executados dentro daquela função.
             </p>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Tracing JIT (Elite)</h4>
             <p class="text-xs opacity-70 leading-relaxed">
               O padrão do PHP 8. Ele monitoriza os caminhos de execução reais. Se um loop corre 1000 vezes, o JIT "traça" esse caminho e compila apenas o que é usado com frequência, atingindo uma performance superior.
             </p>
          </div>
        </div>
      </section>

      <!-- 3. CONFIGURAÇÃO CRTO -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Tuning Industrial: O Parâmetro opcache.jit</h3>
        <p class="text-sm leading-relaxed">
          A configuração do JIT é feita através de um número de 4 dígitos (CRTO). Cada dígito dita um comportamento do motor:
        </p>
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
          <p><span class="text-accent">C (CPU-specific):</span> Usa instruções específicas da sua CPU (AVX, etc).</p>
          <p><span class="text-accent">R (Register Allocation):</span> Estratégia de uso de registadores.</p>
          <p><span class="text-accent">T (Trigger):</span> Quando compilar? (No carregamento, na primeira chamada, ou no tracing).</p>
          <p><span class="text-accent">O (Optimization):</span> Nível de otimização do código gerado.</p>
          <p class="mt-4 text-primary">Recomendação Master: opcache.jit=1255</p>
        </div>
      </section>

      <!-- 4. IMPACTO REAL -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Benchmarking: Onde o JIT Brilha?</h3>
        <p class="text-sm leading-relaxed">
          O JIT não torna as conexões de base de dados mais rápidas. Ele brilha em tarefas <strong>CPU-bound</strong>.
        </p>
        <div class="overflow-x-auto rounded-xl border border-white/10">
          <table class="w-full border-collapse text-xs">
            <thead>
              <tr class="bg-muted/50">
                <th class="p-3 text-left">Aplicação</th>
                <th class="p-3 text-left">Impacto do JIT</th>
                <th class="p-3 text-left">Motivo</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-white/5">
                <td class="p-3">CRUD Web / Wordpress</td>
                <td class="p-3 text-yellow-400">Baixo (~5%)</td>
                <td class="p-3">Gargalo no I/O (Rede e Disco)</td>
              </tr>
              <tr class="border-t border-white/5">
                <td class="p-3">Processamento de Imagem</td>
                <td class="p-3 text-green-400">Alto (2x a 10x)</td>
                <td class="p-3">Cálculos matemáticos intensivos</td>
              </tr>
              <tr class="border-t border-white/5">
                <td class="p-3">IA / Redes Neuronais</td>
                <td class="p-3 text-green-400">Extremo</td>
                <td class="p-3">Operações matriciais pesadas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão do Engenheiro de Performance</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Ativar o JIT sem entender a carga da sua aplicação é amadorismo. O Engenheiro Master utiliza o <button>Lighthouse</button> e o <button>Benchmarking</button> para validar se o ganho de velocidade compensa o uso extra de memória no <button>JIT Buffer</button>."
        </p>
      </section>
    </div>
  `,
};
