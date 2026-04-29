import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m13",
  title: "Fase 3: FFI: Chamando Funções C Nativa do PHP",
  enableInteractive: true,
  youtubeVideoId: "dQw4w9WgXcQ",
  quizId: "php-mq13",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🌉 A Ponte para o Silício
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <button>FFI</button> (Foreign Function Interface) permite que o PHP invoque funções de bibliotecas dinâmicas escritas em <button>C</button>, <button>Rust</button> ou <button>C++</button> diretamente, sem a necessidade de escrever extensões <button>Zend</button>. No nível Master, utilizamos o FFI para processamento matemático pesado, criptografia customizada ou integração direta com o kernel do sistema operativo.
        </p>
      </div>

      <!-- 1. CDEF E DEFINIÇÕES -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. FFI::cdef(): Definindo a Fronteira</h3>
        <p class="text-sm leading-relaxed">
          A forma mais rápida de usar o FFI é através do método <button>cdef()</button>. Tu forneces o protótipo da função em sintaxe C e o nome da biblioteca (<button>.so</button> no Linux ou <button>.dll</button> no Windows).
        </p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-primary text-xs mb-4 uppercase">Invocando a LibC Nativa</h4>
           <pre><code class="language-php">
// Criando o objeto FFI para a biblioteca padrão de C
$ffi = FFI::cdef("
    int printf(const char *format, ...);
    double pow(double x, double y);
", "libc.so.6");

// Invocando funções nativas do SO
$ffi->printf("O resultado de 2^10 é: %f\\n", $ffi->pow(2, 10));
           </code></pre>
        </div>
      </section>

      <!-- 2. CDATA E MEMÓRIA -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Gestão de Memória e CData</h3>
        <p class="text-sm leading-relaxed">
          Quando trabalhas com FFI, lidas com objetos <button>CData</button>. Eles representam tipos de dados C (structs, arrays, ponteiros) na memória do PHP. Podes alocar memória bruta usando <button>FFI::new()</button> e deves ter cuidado redobrado, pois aqui o <button>Garbage Collector</button> não te protege contra acessos inválidos.
        </p>

        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Alocação de Structs</h4>
           <pre><code class="language-php">
// Alocando uma struct C na memória RAM
$point = $ffi->new("struct { int x, y; }");
$point->x = 10;
$point->y = 20;

echo "Tamanho em bytes: " . FFI::sizeof($point);
           </code></pre>
        </div>
      </section>

      <!-- 3. PERFORMANCE VS SEGURANÇA -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Performance e o Risco de Segurança</h3>
        <p class="text-sm leading-relaxed">
          O FFI é extremamente potente, mas perigoso. Um erro num ponteiro pode causar um <button>Segmentation Fault</button> que derruba todo o servidor web.
        </p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Otimização Master: ffi.preload</h4>
          <p class="text-xs leading-relaxed">
            Em produção, nunca uses <button>FFI::cdef()</button> em cada request. É lento. A técnica de elite é o <button>FFI Preloading</button>: defines as funções no <button>php.ini</button> durante o arranque do servidor. Isto torna as chamadas quase tão rápidas quanto o código nativo.
          </p>
        </div>
      </section>

      <!-- 4. CASOS DE USO -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Porquê usar FFI?</h3>
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">IA e Tensores:</p>
              <p class="text-xs text-muted-foreground">Ligar o PHP a bibliotecas como TensorFlow ou OpenCV sem o overhead de APIs HTTP.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">Sistemas Legados:</p>
              <p class="text-xs text-muted-foreground">Reutilizar algoritmos industriais antigos escritos em C++ que não possuem versão PHP.</p>
            </div>
          </li>
        </ul>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão do Engenheiro Master</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "O <button>FFI</button> transforma o PHP de uma linguagem 'web' numa linguagem de 'sistemas'. Use-o quando os limites da <button>Zend VM</button> forem atingidos, mas lembre-se: com grandes poderes de memória, vem a responsabilidade de não causar crashes no Kernel."
        </p>
      </section>
    </div>
  `,
};
