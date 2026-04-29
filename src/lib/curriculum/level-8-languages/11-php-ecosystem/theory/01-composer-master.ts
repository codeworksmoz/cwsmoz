import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t1",
  title: "Fase 1: Composer Master: Autoloaders, Scripts e Plugins",
  youtubeVideoId: "u044iM9xsTM", // Video-aula sobre otimização de composer
  enableInteractive: true,
  quizId: "php-eco-mq1",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📦 Gestão de Dependências de Elite
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <button>Composer</button> não é apenas uma ferramenta para baixar pacotes; é o orquestrador da infraestrutura de código do PHP. No nível Master, otimizamos o <button>Autoloading</button> para eliminar latência de I/O em produção e utilizamos <button>Scripts</button> para garantir a integridade do pipeline.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Autoloading de Alta Performance</h3>
        <p class="text-sm leading-relaxed">
          Por padrão, o PHP procura ficheiros no disco em cada request. Em servidores de alta escala, isto é um gargalo. O Engenheiro Master utiliza o comando <button>composer dump-autoload -o</button> para gerar um mapa estático.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Optimize Autoloader</h4>
             <p class="text-xs opacity-70 leading-relaxed">
               Converte regras <button>PSR-4</button> e <button>PSR-0</button> num mapa de classes (<button>classmap</button>). O PHP deixa de "procurar" e passa a "saber" onde está o ficheiro.
             </p>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Classmap Authoritative</h4>
             <p class="text-xs opacity-70 leading-relaxed">
               A configuração definitiva para produção. Diz ao motor: "Se a classe não está no mapa, ela não existe". Isto impede que o PHP olhe para o sistema de ficheiros em caso de falha.
             </p>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Automação via Composer Scripts</h3>
        <p class="text-sm leading-relaxed">
          O ficheiro <button>composer.json</button> deve ser o manual de operações do projeto. Criamos atalhos para garantir que nenhum código "sujo" entre no repositório.
        </p>

        <div class="space-y-4">
           <pre><code class="language-json">
{
  "scripts": {
    "test": "phpunit --colors=always",
    "analyze": "phpstan analyse src",
    "audit": "composer audit",
    "check": ["@test", "@analyze", "@audit"]
  }
}
           </code></pre>
           <p class="text-xs text-muted-foreground italic text-center">Executar 'composer check' valida todo o ecossistema de uma só vez.</p>
        </div>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Segurança e Reprodução Determinística
        </h4>
        <p class="text-sm leading-relaxed">
          O ficheiro <button>composer.lock</button> é sagrado. Ele garante que cada membro da equipa e o servidor de produção utilizem <strong>exatamente</strong> os mesmos hashes binários de cada dependência. Além disso, integramos o <button>composer audit</button> no pipeline para detetar <button>CVEs</button> (vulnerabilidades) antes de cada deploy.
        </p>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Engenheiro de Elite</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Configurar o Composer corretamente é reduzir o tempo de bootstrapping da aplicação. Um servidor Master com autoloader otimizado e cache de classe pode responder até 20% mais rápido do que um servidor com configuração padrão."
        </p>
      </section>
    </div>
  `,
};
