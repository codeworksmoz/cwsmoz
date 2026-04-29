import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "jv-m15",
  title: "Fase 4: JVM ClassLoaders, Metaspace e Isolamento de Código",
  enableInteractive: true,
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          ⚙️ O Ciclo de Vida da Classe
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          No nível Master, entendemos que o Java não carrega tudo de uma vez. O subsistema de <strong>ClassLoaders</strong> é responsável por localizar, carregar e verificar o bytecode em tempo de execução. Dominar este processo é vital para criar plugins dinâmicos e arquiteturas de microserviços isolados.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. A Hierarquia de Delegação</h3>
        <p class="text-sm leading-relaxed">
          ClassLoaders seguem um modelo de <strong>Delegação Parental</strong>. Quando o sistema pede uma classe, o loader primeiro pergunta ao seu pai se ele já a tem. Isto garante a segurança do núcleo do Java.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center font-mono text-[10px] uppercase">
          <div class="p-4 bg-muted border rounded-xl">Bootstrap (JDK)<br/><span class="text-primary">O Pai de Todos</span></div>
          <div class="text-accent pt-4">↑</div>
          <div class="p-4 bg-muted border rounded-xl">Platform (Ext)<br/><span class="text-primary">Bibliotecas Std</span></div>
          <div class="text-accent pt-4">↑</div>
          <div class="p-4 bg-muted border rounded-xl">Application (CP)<br/><span class="text-primary">O Teu Código</span></div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Metaspace: Memória Non-Heap</h3>
        <p class="text-sm leading-relaxed">Desde o Java 8, os metadados das classes não vivem mais no Heap (PermGen), mas no <strong>Metaspace</strong>, uma área de memória nativa do sistema operativo. Um Engenheiro Master monitoriza o Metaspace para evitar o <code>OutOfMemoryError: Metaspace</code> causado por excesso de classes dinâmicas ou vazamento de ClassLoaders.</p>

        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-primary text-xs mb-4 uppercase">Invocação Dinâmica Master</h4>
           <pre><code class="language-java">
// Carregando um plugin de segurança em tempo de execução
ClassLoader loader = new URLClassLoader(new URL[]{ new URL("file:plugin.jar") });
Class<?> clazz = loader.loadClass("App.Security.AdvancedVault");
Object vault = clazz.getDeclaredConstructor().newInstance();
           </code></pre>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Visão de Segurança Industrial</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Ao criar o seu próprio ClassLoader, podes encriptar o seu bytecode no disco e só o descodificar no momento do carregamento, protegendo a propriedade intelectual do seu Core Banking."
        </p>
      </section>
    </div>
  `,
};
