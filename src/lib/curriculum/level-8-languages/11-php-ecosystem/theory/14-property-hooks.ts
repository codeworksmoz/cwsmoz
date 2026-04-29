import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t14",
  title: "Fase 3: PHP 8.4+: Property Hooks e Asymmetric Visibility",
  enableInteractive: true,
  youtubeVideoId: "raf_id_php84_hooks",
  quizId: "php-eco-mq14",
  content: `
    <div class="space-y-12">
      <div class="bg-green-500/5 p-8 rounded-[2.5rem] border border-green-500/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-green-400 flex items-center gap-3">
          🆕 PHP 8.4: O Fim dos Getters e Setters
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          A atualização mais radical para o design de objetos em anos. Os <button>Property Hooks</button> permitem definir lógica de leitura e escrita diretamente na declaração da propriedade, eliminando centenas de linhas de código repetitivo (boilerplate) e permitindo a criação de <strong>Propriedades Virtuais</strong>.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-green-500/20 pb-2 text-accent">1. Hooks de Escrita (set) e Leitura (get)</h3>
        <p class="text-sm leading-relaxed">
          Em vez de um método <code>setName($val)</code>, agora defines a lógica dentro de chavetas na própria variável. O valor a ser escrito é automaticamente passado como <code>$value</code>.
        </p>
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-php">
class User {
    public string $name {
        // Hook de Escrita: Valida e limpa os dados automaticamente
        set {
            if (empty($value)) throw new Error("Nome vazio!");
            $this->name = trim($value);
        }
        
        // Hook de Leitura: Formatação automática
        get => strtoupper($this->name);
    }
}
           </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-green-500/20 pb-2 text-accent">2. Propriedades Virtuais</h3>
        <p class="text-sm leading-relaxed">Podes definir propriedades que não existem fisicamente no objeto, sendo calculadas em tempo real a partir de outros dados. Elas não possuem "estado" mas comportam-se como variáveis para quem consome a classe.</p>
        <pre><code class="language-php">
class Order {
    public function __construct(public float $price, public int $qty) {}

    // Propriedade Virtual: Calculada sob demanda
    public float $total {
        get => $this->price * $this->qty;
    }
}
        </code></pre>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Visibilidade Assimétrica
        </h4>
        <p class="text-sm leading-relaxed">
          Também no PHP 8.4, podemos definir que uma propriedade é <button>public</button> para leitura, mas <button>private</button> para escrita, num único comando. É o padrão master para proteger a integridade do estado.
        </p>
        <pre><code class="language-php">
// Qualquer um lê, mas apenas a classe escreve
public private(set) string $id;
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 O Mindset 8.4</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Getters e Setters manuais são agora um débito técnico evitável. Ao usar Hooks, você cria objetos que são garantidamente válidos durante todo o seu ciclo de vida, mantendo a API da classe limpa e moderna."
        </p>
      </section>
    </div>
  `
};
