import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m2",
  title: "Fase 1: Union Types e Tipagem Forte no PHP 8",
  youtubeVideoId: "gI-qXk7XojA",
  enableInteractive: true,
  quizId: "php-mq2",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          💪 Tipagem como Contrato de Engenharia
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          No PHP 8, a tipagem deixou de ser uma "ajuda ao programador" para se tornar um <strong>contrato de execução</strong>. Com os <button>Union Types</button> e o modo <button>strict_types=1</button>, garantimos que o motor <button>Zend VM</button> não perca ciclos de CPU com coerções de tipos imprevisíveis, reduzindo a superfície de bugs em 70%.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Union Types: Flexibilidade com Rigor</h3>
        <p class="text-sm leading-relaxed">
          Anteriormente, usávamos <button>Docblocks</button> para dizer que uma função aceitava dois tipos. Agora, o próprio motor valida isso nativamente usando a barra vertical <button>|</button>.
        </p>
        
        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Exemplo: Roteamento de IDs Híbridos</h4>
           <pre><code class="language-php">
// ✅ PHP 8 Master Way: O compilador garante que apenas int ou string passem.
function dispatchEvent(string|int $eventId): void {
    // A lógica de negócio está protegida contra arrays ou objetos
    echo "Processando evento: " . $eventId;
}
           </code></pre>
           <p class="text-xs text-muted-foreground italic">Nota: O tipo <button>mixed</button> agora é um tipo real que representa a união de todos os tipos possíveis, incluindo <button>null</button>.</p>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Intersection Types e Contratos Múltiplos</h3>
        <p class="text-sm leading-relaxed">
          Introduzidos no PHP 8.1, os <button>Intersection Types</button> (<button>&</button>) exigem que um objeto satisfaça múltiplos contratos simultaneamente. É a ferramenta definitiva para implementar o <strong>Princípio de Segregação de Interfaces (ISP)</strong> do <button>SOLID</button>.
        </p>

        <pre><code class="language-php">
// O parâmetro DEVE implementar Iterator E Countable ao mesmo tempo.
function processCollection(Iterator&Countable $data): void {
    echo "Total de itens: " . count($data);
}
        </code></pre>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. O Tipo 'never' e Controle de Fluxo</h3>
        <p class="text-sm leading-relaxed">
          O tipo de retorno <button>never</button> indica que uma função nunca retorna o controle ao chamador — ou ela lança uma <button>Exception</button> ou encerra o script com <button>exit()</button>. Isto permite que analisadores estáticos como o <button>PHPStan</button> detetem código morto com precisão cirúrgica.
        </p>
        
        <pre><code class="language-php">
function redirectAndExit(string $url): never {
    header("Location: $url");
    exit();
}
        </code></pre>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Variância: Covariância e Contravariância</h3>
        <p class="text-sm leading-relaxed">
          O PHP 8 suporta <button>Return Type Covariance</button> (permitindo que uma classe filha retorne um tipo mais específico que o pai) e <button>Parameter Type Contravariance</button> (permitindo que a classe filha aceite um tipo mais genérico nos argumentos).
        </p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Dica de Performance: strict_types=1</h4>
          <p class="text-sm leading-relaxed">
            Ativar <button>declare(strict_types=1)</button> no topo de cada ficheiro desativa as conversões automáticas (ex: converter "5" em 5). Para o motor <button>JIT</button>, isto é ouro: ele pode gerar código de máquina otimizado assumindo que o dado nunca mudará de tipo inesperadamente, atingindo performance de linguagens compiladas.
          </p>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Arquiteto de Sistemas</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "A tipagem forte não é uma restrição para o desenvolvedor, mas um guia para o compilador. No nível Master, desenhamos assinaturas de funções que protegem a integridade do domínio de negócio antes mesmo da primeira linha de lógica ser executada."
        </p>
      </section>
    </div>
  `
};
