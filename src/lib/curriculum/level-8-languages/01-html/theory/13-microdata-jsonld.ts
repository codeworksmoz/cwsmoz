import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m13",
  title: "Fase 3: Microdata, JSON-LD e SEO de Dados",
  enableInteractive: true,
  quizId: "html-mq13",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🏷️ A Web de Dados Estruturados
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Dados estruturados permitem que fales diretamente com os algoritmos de busca usando um vocabulário universal. No nível Master, não apenas "mostramos" informação; nós <strong>rotulamos</strong> cada pedaço de dado para que o Google gere Rich Snippets (estrelas, preços, FAQ) e integre o seu site no Knowledge Graph.
        </p>
      </div>

      <!-- 1. JSON-LD: O PADRÃO OURO -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. JSON-LD: Linked Data sem Sujeira no DOM</h3>
        <p class="text-sm">JSON-LD (JSON for Linked Data) é o formato recomendado pelo Google. Ele vive num bloco de script separado, o que significa que podes descrever os seus dados sem poluir as tags HTML com atributos extras.</p>
        
        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Exemplo: Descrevendo um Curso</h4>
           <pre><code class="language-html">
&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "HTML Master Class",
  "description": "Domine a arquitetura de documentos de alta complexidade.",
  "provider": {
    "@type": "Organization",
    "name": "Codworks Moz",
    "sameAs": "https://codworks.mz"
  }
}
&lt;/script&gt;
           </code></pre>
        </div>
      </section>

      <!-- 2. SCHEMA.ORG -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Schema.org: O Vocabulário Universal</h3>
        <p class="text-sm leading-relaxed">Schema.org é o esforço colaborativo do Google, Microsoft e Yahoo para padronizar as etiquetas. Todo o objeto do mundo real tem um tipo (Type) e propriedades (Properties).</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-lg">
            <h4 class="font-bold text-primary mb-2">Tipos Comuns:</h4>
            <ul class="text-[10px] space-y-1 opacity-70 font-mono">
              <li>SoftwareApplication</li>
              <li>Product (E-commerce)</li>
              <li>Person (Autor/Equipa)</li>
              <li>Organization</li>
              <li>FAQPage</li>
              <li>BreadcrumbList</li>
            </ul>
          </div>
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-lg">
            <h4 class="font-bold text-primary mb-2">Porquê usar?</h4>
            <ul class="text-[10px] space-y-1 opacity-70">
              <li>Aumenta o CTR (Cliques) na pesquisa.</li>
              <li>Ajuda o Google a entender relações.</li>
              <li>Permite o surgimento de carrosséis de busca.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 3. MICRODATA -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Microdata: Semântica Inline</h3>
        <p class="text-sm">Embora o JSON-LD seja o padrão, às vezes precisamos de marcar elementos específicos diretamente no HTML. Usamos o trio: <code>itemscope</code>, <code>itemtype</code> e <code>itemprop</code>.</p>
        
        <pre><code class="language-html">
&lt;!-- Marcando um autor diretamente no HTML --&gt;
&lt;div itemscope itemtype="https://schema.org/Person"&gt;
  &lt;span itemprop="name"&gt;Edson da Cruz&lt;/span&gt;
  &lt;span itemprop="jobTitle"&gt;Engenheiro Master&lt;/span&gt;
&lt;/div&gt;
        </code></pre>
      </section>

      <!-- 4. RICH SNIPPETS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Rich Snippets e FAQ Master</h3>
        <p class="text-sm">Podes "sequestrar" espaço extra na página de resultados do Google adicionando um FAQ estruturado. Isto empurra a concorrência para baixo.</p>
        
        <pre><code class="language-html">
&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "O curso tem certificação?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sim, todos os alunos Master recebem um certificado verificado."
    }
  }]
}
&lt;/script&gt;
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão do Robô</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Para um robô, uma div é apenas um container. Mas um bloco JSON-LD é uma verdade absoluta sobre o seu negócio. O Engenheiro Master alimenta a máquina com dados estruturados para dominar a autoridade digital."
        </p>
      </section>
    </div>
  `
};