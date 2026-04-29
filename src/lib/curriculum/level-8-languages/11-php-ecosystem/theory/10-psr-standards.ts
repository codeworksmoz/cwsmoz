import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t10",
  title: "PSR Standards: A Constituição do PHP Moderno",
  enableInteractive: true,
  youtubeVideoId: "raf_id_psr_standards",
  quizId: "php-eco-mq10",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📜 A Lei da Interoperabilidade
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          As <strong>PSR (PHP Standard Recommendations)</strong>, mantidas pelo PHP-FIG (Framework Interop Group), definem as regras que permitem a um componente do <button>Symfony</button> funcionar perfeitamente dentro do <button>Laravel</button> ou <button>Slim</button>. No nível Master, entendemos que seguir as PSRs não é opcional; é a garantia de que o seu software é profissional e imune ao vendor lock-in.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. PSR-4: O Motor do Autoloading</h3>
        <p class="text-sm leading-relaxed">
          A PSR-4 define como o <button>Composer</button> mapeia Namespaces para caminhos físicos de ficheiros. É a norma que eliminou o uso de <code>require</code> e <code>include</code> manuais em projetos modernos.
        </p>
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-json">
// composer.json
"autoload": {
    "psr-4": {
        "App\\Core\\": "src/Core/"
    }
}
           </code></pre>
           <p class="text-[10px] mt-4 opacity-70">Um Engenheiro Master sabe que a PSR-4 exige que o nome da classe coincida exatamente com o nome do ficheiro (Case-sensitive no Linux!).</p>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. A Trindade do HTTP: PSR-7, 15 e 17</h3>
        <p class="text-sm leading-relaxed">Para construir APIs e Middlewares agnósticos, deves dominar estas três normas que abstraem a comunicação Web:</p>

        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary block mb-1">PSR-7 (HTTP Message):</strong> Define objetos imutáveis para <button>Request</button> e <button>Response</button>. Isto impede que um middleware altere o pedido original, garantindo a integridade dos dados.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary block mb-1">PSR-17 (HTTP Factories):</strong> Define como criar os objetos da PSR-7. Permite que o teu código crie uma resposta 200 OK sem saber se estás a usar o motor do Guzzle ou do Laminas.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary block mb-1">PSR-15 (Middleware):</strong> Define a interface padrão para processar pedidos. É o que permite que o nosso **Event Server** use filtros de segurança universais.
          </li>
        </ul>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. PSR-11: Contentores de Injeção</h3>
        <p class="text-sm leading-relaxed">
          A PSR-11 padroniza a interface <code>ContainerInterface</code>. Isto permite que a tua aplicação peça um serviço (ex: <code>$container->get(Logger::class)</code>) sem se importar se o contentor é o do <button>PHP-DI</button> ou o <button>ServiceContainer</button> do Symfony.
        </p>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 O Selo de Elite</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Respeitar as PSRs é uma questão de ética arquitetural. Um Engenheiro Master não reinventa a roda; ele utiliza os padrões da comunidade para construir sistemas que são 100% integráveis no ecossistema global do PHP."
        </p>
      </section>
    </div>
  `,
};
