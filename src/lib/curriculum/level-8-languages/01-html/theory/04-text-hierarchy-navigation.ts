import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m4",
  title: "Fase 1: Hierarquia de Texto e Navegação Crítica",
  enableInteractive: true,
  quizId: "html-mq4",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📚 A Arquitetura da Informação
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Um documento HTML é como um livro técnico. A <strong>Hierarquia de Texto</strong> define a ordem de importância dos conteúdos, enquanto a <strong>Navegação Crítica</strong> garante que o utilizador encontre o que precisa em menos de 3 cliques.
        </p>
      </div>

      <!-- 1. HIERARQUIA DE CABEÇALHOS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Cabeçalhos (h1-h6): A Regra do Único Rei</h3>
        <p class="text-sm">O <code>&lt;h1&gt;</code> é o título da página. Deve existir apenas UM por documento. Saltas níveis (ex: de h1 para h3) quebra a árvore de acessibilidade.</p>
        
        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Exemplo: Page Outline Correto</h4>
           <pre><code class="language-html">
&lt;h1&gt;Serviços de Engenharia Codworks&lt;/h1&gt;
&lt;p&gt;Visão geral da nossa infraestrutura.&lt;/p&gt;

&lt;h2&gt;Desenvolvimento Web&lt;/h2&gt;
&lt;p&gt;Construímos o futuro.&lt;/p&gt;

&lt;h3&gt;Frontend Master&lt;/h3&gt;
&lt;p&gt;Interfaces de alta fidelidade.&lt;/p&gt;

&lt;h3&gt;Backend & Nuvem&lt;/h3&gt;
&lt;p&gt;Escala e resiliência.&lt;/p&gt;

&lt;h2&gt;Consultoria Técnica&lt;/h2&gt;
&lt;p&gt;Otimização de processos.&lt;/p&gt;
           </code></pre>
        </div>
      </section>

      <!-- 2. NAVEGAÇÃO SEMÂNTICA -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Navegação Crítica: O Bloco &lt;nav&gt;</h3>
        <p class="text-sm leading-relaxed">A navegação não deve ser apenas uma lista de links. Ela deve estar contida na tag <code>&lt;nav&gt;</code>, que é um marco semântico (Landmark).</p>

        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Estrutura de Menu Master</h4>
           <pre><code class="language-html">
&lt;nav aria-label="Navegação Superior"&gt;
  &lt;ul style="display: flex; gap: 20px; list-style: none;"&gt;
    &lt;li&gt;&lt;a href="/"&gt;Início&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="/cursos"&gt;Cursos&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="/comunidade"&gt;Comunidade&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="/suporte"&gt;Suporte&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;
           </code></pre>
        </div>
      </section>

      <!-- 3. ÂNCORAS E FLUXOS INTERNOS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Âncoras e Sumários Interativos</h3>
        <p class="text-sm">Âncoras (id + href="#id") permitem criar "Table of Contents" (Sumários) que melhoram drasticamente a UX em páginas longas ou documentações.</p>
        
        <pre><code class="language-html">
&lt;h2 id="topo"&gt;Sumário da Aula&lt;/h2&gt;
&lt;ul&gt;
  &lt;li&gt;&lt;a href="#seccao-introducao"&gt;1. Introdução&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#seccao-tecnica"&gt;2. Técnica Avançada&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;

&lt;div style="margin-top: 500px;"&gt;
  &lt;h3 id="seccao-introducao"&gt;1. Introdução&lt;/h3&gt;
  &lt;p&gt;Conteúdo da seção...&lt;/p&gt;
  &lt;a href="#topo"&gt;Voltar ao Início&lt;/a&gt;
&lt;/div&gt;

&lt;div style="margin-top: 500px;"&gt;
  &lt;h3 id="seccao-tecnica"&gt;2. Técnica Avançada&lt;/h3&gt;
  &lt;p&gt;Explicação master aqui.&lt;/p&gt;
  &lt;a href="#topo"&gt;Voltar ao Início&lt;/a&gt;
&lt;/div&gt;
        </code></pre>
      </section>

      <!-- 4. BREADCRUMBS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Breadcrumbs (Migalhas de Pão)</h3>
        <p class="text-sm">Breadcrumbs dizem ao utilizador onde ele está na árvore do site. É essencial para E-commerce e Portais de Conhecimento.</p>
        
        <pre><code class="language-html">
&lt;nav aria-label="Breadcrumb"&gt;
  &lt;ol style="display: flex; gap: 10px; list-style: none; font-size: 12px; color: gray;"&gt;
    &lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt; /&lt;/li&gt;
    &lt;li&gt;&lt;a href="/learn"&gt;Aulas&lt;/a&gt; /&lt;/li&gt;
    &lt;li aria-current="page"&gt;Hierarquia de Texto&lt;/li&gt;
  &lt;/ol&gt;
&lt;/nav&gt;
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Arquiteto de Informação</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Um utilizador nunca deve sentir-se perdido. Se ele não consegue dizer onde está apenas olhando para os títulos e para o menu, a sua arquitetura falhou. Use o HTML para criar clareza mental."
        </p>
      </section>
    </div>
  `
};
