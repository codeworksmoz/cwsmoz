import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m2",
  title: "Fase 1: Meta Tags, SEO Técnico e Social Graphs",
  enableInteractive: true,
  quizId: "html-mq2",
  content: `
    <div class="space-y-12">
      <div class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-indigo-400 flex items-center gap-3">
          🚀 Além do Visível: O Cérebro do Documento
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          As <strong>Meta Tags</strong> são as instruções de baixo nível que o seu site envia aos motores de busca (Google, Bing) e redes sociais. Elas decidem se o seu projeto será uma autoridade digital ou apenas mais um link perdido no oceano da web.
        </p>
      </div>

      <!-- 1. SEO TÉCNICO -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. SEO On-Page: Description e Canonical</h3>
        <p class="text-sm">O Google não lê apenas o seu texto; ele lê a sua intenção técnica. A <code>description</code> é o seu "pitch" de vendas na página de resultados.</p>
        
        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Configuração de SEO Master</h4>
           <pre><code class="language-html">
&lt;head&gt;
  &lt;!-- O limite ideal é de 155-160 caracteres --&gt;
  &lt;meta name="description" content="Aprenda engenharia de software de elite na Codworks Moz. Do zero ao domínio total com tecnologia de ponta."&gt;
  
  &lt;!-- Evita penalização por conteúdo duplicado --&gt;
  &lt;link rel="canonical" href="https://codworks.mz/learn/html-master"&gt;
  
  &lt;!-- Instruções para Robôs --&gt;
  &lt;meta name="robots" content="index, follow"&gt;
&lt;/head&gt;
           </code></pre>
        </div>
      </section>

      <!-- 2. SOCIAL GRAPHS -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Social Graphs: Open Graph e Twitter Cards</h3>
        <p class="text-sm leading-relaxed">Já notou como alguns links no WhatsApp aparecem com imagem, título e descrição bonita? Isso é o <strong>Open Graph (OG)</strong>. Sem isso, o seu link parece amador e gera menos cliques.</p>

        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Exemplo: Cartão de Partilha Viral</h4>
           <pre><code class="language-html">
&lt;head&gt;
  &lt;!-- Open Graph (Facebook, WhatsApp, LinkedIn) --&gt;
  &lt;meta property="og:type" content="website"&gt;
  &lt;meta property="og:url" content="https://codworks.mz"&gt;
  &lt;meta property="og:title" content="Codworks Moz | Engenharia de Software"&gt;
  &lt;meta property="og:description" content="Junta-te à elite dos desenvolvedores em Moçambique."&gt;
  &lt;meta property="og:image" content="https://codworks.mz/og-cover.jpg"&gt;

  &lt;!-- Twitter Cards --&gt;
  &lt;meta name="twitter:card" content="summary_large_image"&gt;
  &lt;meta name="twitter:title" content="Codworks Moz"&gt;
  &lt;meta name="twitter:image" content="https://codworks.mz/twitter-cover.jpg"&gt;
&lt;/head&gt;
           </code></pre>
        </div>
      </section>

      <!-- 3. SEGURANÇA E COMPATIBILIDADE -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Meta Tags de Segurança e Engine</h3>
        <p class="text-sm">Engenheiros de elite protegem o site e otimizam a renderização através do <code>http-equiv</code>.</p>
        
        <pre><code class="language-html">
&lt;head&gt;
  &lt;!-- Força o Internet Explorer a usar o motor mais recente --&gt;
  &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
  
  &lt;!-- Content Security Policy Básica --&gt;
  &lt;meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"&gt;
  
  &lt;!-- Refresh automático (use com cautela) --&gt;
  &lt;!-- &lt;meta http-equiv="refresh" content="30"&gt; --&gt;
&lt;/head&gt;
        </code></pre>
      </section>

      <!-- 4. FAVICONS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Favicons e Identidade Visual</h3>
        <p class="text-sm">Um ícone de aba (Favicon) dá credibilidade instantânea. No nível Master, usamos SVGs para nitidez infinita.</p>
        
        <pre><code class="language-html">
&lt;head&gt;
  &lt;!-- Favicon Padrão --&gt;
  &lt;link rel="icon" type="image/svg+xml" href="/logo.svg"&gt;
  
  &lt;!-- Ícone para Apple/iOS --&gt;
  &lt;link rel="apple-touch-icon" href="/apple-icon.png"&gt;
&lt;/head&gt;
        </code></pre>
      </section>

      <!-- 5. DADOS ESTRUTURADOS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">5. JSON-LD: Falando com o Coração do Google</h3>
        <p class="text-sm">Dados estruturados permitem que o Google mostre "estrelas", "preços" e "autores" diretamente na pesquisa. É o SEO do futuro.</p>
        
        <pre><code class="language-html">
&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Codworks Moz",
  "url": "https://codworks.mz",
  "logo": "https://codworks.mz/logo.png"
}
&lt;/script&gt;
        </code></pre>
      </section>

      <section class="bg-indigo-500/5 p-8 rounded-[2rem] border-2 border-dashed border-indigo-500/20 text-center">
        <h4 class="text-xl font-bold text-indigo-400 mb-4">🏆 Regra de Ouro do SEO</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "O conteúdo pode ser o rei, mas os metadados são o mensageiro que o leva ao trono. Sem metadados de elite, o seu site é invisível para quem mais importa: o novo utilizador."
        </p>
      </section>
    </div>
  `
};
