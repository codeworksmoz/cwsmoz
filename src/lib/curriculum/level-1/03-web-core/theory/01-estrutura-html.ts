import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "web-t1",
  title: "Estrutura HTML5: Arquitetura de Documentos e Metadados de Elite",
  youtubeVideoId: "8ME9u065vD4",
  enableInteractive: true,
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🏗️ A Fundação do Software Web
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O HTML não é apenas "marcação"; é a <strong>camada de dados</strong> da interface. Uma estrutura mal desenhada resulta em falhas de acessibilidade, baixo ranking no Google (SEO) e instabilidade visual.
        </p>
      </div>

      <!-- 1. ESTRUTURA DO DOCUMENTO -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Estrutura Base e DOCTYPE</h3>
        <p class="text-sm">Todo o documento master deve começar com o <code>&lt;!DOCTYPE html&gt;</code>. Sem ele, o browser entra em "Quirks Mode", emulando comportamentos de navegadores antigos dos anos 90.</p>
        
        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Anatomia do Documento</h4>
           <pre><code class="language-html">
&lt;!DOCTYPE html&gt;
&lt;html lang="pt-MZ"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;meta name="description" content="Descrição do site para SEO"&gt;
    &lt;meta name="keywords" content="html, css, javascript"&gt;
    &lt;meta name="author" content="Codworks Master"&gt;
    &lt;meta name="robots" content="index, follow"&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
    &lt;title&gt;Título da Aba&lt;/title&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
    &lt;link rel="icon" href="favicon.ico" type="image/x-icon"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- O conteúdo visível vive aqui --&gt;
  &lt;/body&gt;
&lt;/html&gt;
           </code></pre>
        </div>
      </section>

      <!-- 2. METADADOS E VIEWPORT -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Metadados Críticos: Charset e Viewport</h3>
        
        <div class="space-y-4">
           <h4 class="font-bold text-sm">❌ Sem Charset (Erro de Encoding)</h4>
           <p class="text-xs text-muted-foreground">Repare nos caracteres corrompidos no preview.</p>
           <pre><code class="language-html">
&lt;h1&gt;ConfiguraÃ§Ã£o de AcentuaÃ§Ã£o&lt;/h1&gt;
&lt;p&gt;Sem o UTF-8, o til e o cedilha podem falhar.&lt;/p&gt;
           </code></pre>

           <h4 class="font-bold text-green-500 text-sm">✅ Com Charset UTF-8 (Suporte Universal)</h4>
           <pre><code class="language-html">
&lt;meta charset="UTF-8"&gt;
&lt;h1&gt;Configuração de Acentuação&lt;/h1&gt;
&lt;p&gt;Com UTF-8, o texto é processado com perfeição.&lt;/p&gt;
           </code></pre>
        </div>

        <div class="space-y-4">
           <h4 class="font-bold text-sm">❌ Sem Viewport (Simulação de Desktop)</h4>
           <p class="text-xs text-muted-foreground">No modo mobile, o texto fica minúsculo (browser assume 980px).</p>
           <pre><code class="language-html">
&lt;h1&gt;Ecrã Esmagado&lt;/h1&gt;
&lt;p&gt;O utilizador é forçado a fazer zoom para conseguir ler este parágrafo no telemóvel.&lt;/p&gt;
           </code></pre>

           <h4 class="font-bold text-green-500 text-sm">✅ Com Viewport (Escala 1:1)</h4>
           <pre><code class="language-html">
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;h1&gt;Site Mobile-Ready&lt;/h1&gt;
&lt;p&gt;Este texto é legível instantaneamente em qualquer dispositivo.&lt;/p&gt;
           </code></pre>
        </div>
      </section>

      <!-- 3. TÍTULOS E HIERARQUIA -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Títulos e Hierarquia de Conteúdo</h3>
        <p class="text-sm">Use h1 para o título principal, h2 para secções, h3 para subsecções. Nunca salte níveis (ex: h1 → h3).</p>
        
        <pre><code class="language-html">
&lt;h1&gt;Título Principal (apenas 1 por página)&lt;/h1&gt;
&lt;h2&gt;Secção Importante&lt;/h2&gt;
&lt;h3&gt;Subsecção&lt;/h3&gt;
&lt;h4&gt;Detalhes Específicos&lt;/h4&gt;
&lt;h5&gt;Notas Pequenas&lt;/h5&gt;
&lt;h6&gt;Observações Mínimas&lt;/h6&gt;
        </code></pre>
      </section>

      <!-- 4. PARÁGRAFOS E TEXTO -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Parágrafos e Formatação de Texto</h3>
        
        <pre><code class="language-html">
&lt;p&gt;Este é um parágrafo normal com texto fluido.&lt;/p&gt;

&lt;p&gt;
  &lt;strong&gt;Texto importante (semântico)&lt;/strong&gt;&lt;br&gt;
  &lt;b&gt;Texto em negrito (visual)&lt;/b&gt;&lt;br&gt;
  &lt;em&gt;Texto com ênfase (semântico)&lt;/em&gt;&lt;br&gt;
  &lt;i&gt;Texto em itálico (visual)&lt;/i&gt;&lt;br&gt;
  &lt;u&gt;Texto sublinhado&lt;/u&gt;&lt;br&gt;
  &lt;s&gt;Texto riscado&lt;/s&gt;&lt;br&gt;
  &lt;mark&gt;Texto marcado&lt;/mark&gt;&lt;br&gt;
  &lt;small&gt;Texto pequeno&lt;/small&gt;&lt;br&gt;
  &lt;span style="color:red"&gt;Span estilizado&lt;/span&gt;&lt;br&gt;
  &lt;code&gt;Código inline&lt;/code&gt;&lt;br&gt;
  &lt;pre&gt;Texto pré-formatado&lt;/pre&gt;
&lt;/p&gt;
        </code></pre>
      </section>

      <!-- 5. QUEBRAS E SEPARADORES -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">5. Quebras de Linha e Separadores</h3>
        
        <pre><code class="language-html">
&lt;hr&gt;

&lt;p&gt;Linha 1&lt;br&gt;Linha 2 (quebra forçada)&lt;/p&gt;
        </code></pre>
      </section>

      <!-- 6. LINKS E ÂNCORAS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">6. Links, Âncoras e Navegação</h3>
        
        <pre><code class="language-html">
&lt;!-- Links externos --&gt;
&lt;a href="https://codworks.mz" target="_blank" rel="noopener noreferrer"&gt;
  Visitar Codworks (nova aba)
&lt;/a&gt;

&lt;!-- Links internos --&gt;
&lt;a href="/sobre"&gt;Página Sobre&lt;/a&gt;

&lt;!-- Link para email --&gt;
&lt;a href="mailto:info@codworks.mz"&gt;Enviar Email&lt;/a&gt;

&lt;!-- Link para telefone --&gt;
&lt;a href="tel:+258840000000"&gt;Ligar Agora&lt;/a&gt;

&lt;!-- Âncoras dentro da página --&gt;
&lt;a href="#seccao2"&gt;Ir para Secção 2&lt;/a&gt;
        </code></pre>
      </section>

      <!-- 7. IMAGENS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">7. Imagens e Atributos Essenciais</h3>
        
        <pre><code class="language-html">
&lt;img 
  src="https://picsum.photos/seed/codworks/400/200" 
  alt="Descrição da imagem para acessibilidade"
  width="400"
  height="200"
  loading="lazy"
  title="Tooltip ao passar o mouse"
&gt;
        </code></pre>
        
        <div class="p-4 bg-card border rounded-xl border-white/5 mt-4">
          <h4 class="font-bold text-primary mb-2">⚠️ Regra de Ouro</h4>
          <p class="text-xs opacity-70">NUNCA use <code>img</code> sem o atributo <code>alt</code>. Leitores de ecrã dependem disso!</p>
        </div>
      </section>

      <!-- 8. LISTAS COMPLETAS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">8. Listas: Ordenadas, Não-Ordenadas e de Definição</h3>
        
        <pre><code class="language-html">
&lt;!-- Lista não-ordenada --&gt;
&lt;ul&gt;
  &lt;li&gt;HTML5&lt;/li&gt;
  &lt;li&gt;CSS3&lt;/li&gt;
  &lt;li&gt;JavaScript&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Lista ordenada --&gt;
&lt;ol&gt;
  &lt;li&gt;Passo 1: Aprender HTML&lt;/li&gt;
  &lt;li&gt;Passo 2: Dominar CSS&lt;/li&gt;
  &lt;li&gt;Passo 3: JavaScript Avançado&lt;/li&gt;
&lt;/ol&gt;

&lt;!-- Lista de definição --&gt;
&lt;dl&gt;
  &lt;dt&gt;HTML&lt;/dt&gt;
  &lt;dd&gt;HyperText Markup Language - estrutura da página&lt;/dd&gt;
  
  &lt;dt&gt;CSS&lt;/dt&gt;
  &lt;dd&gt;Cascading Style Sheets - estilo visual&lt;/dd&gt;
&lt;/dl&gt;
        </code></pre>
      </section>

      <!-- 9. TABELAS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">9. Tabelas de Dados</h3>
        
        <pre><code class="language-html">
&lt;table border="1"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Nome&lt;/th&gt;
      &lt;th&gt;Idade&lt;/th&gt;
      &lt;th&gt;País&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;João&lt;/td&gt;
      &lt;td&gt;25&lt;/td&gt;
      &lt;td&gt;Moçambique&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Maria&lt;/td&gt;
      &lt;td&gt;30&lt;/td&gt;
      &lt;td&gt;Angola&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
  &lt;tfoot&gt;
    &lt;tr&gt;
      &lt;td colspan="3"&gt;Total: 2 pessoas&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tfoot&gt;
&lt;/table&gt;
        </code></pre>
      </section>

      <!-- 10. FORMULÁRIOS COMPLETOS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">10. Formulários e Inputs</h3>
        <p class="text-sm">O formulário é a principal ferramenta de recolha de dados do utilizador.</p>
        
        <pre><code class="language-html">
&lt;form action="/submit" method="POST"&gt;
  
  &lt;label for="nome"&gt;Nome Completo:&lt;/label&gt;
  &lt;input id="nome" type="text" placeholder="Digite seu nome" required&gt;

  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input id="email" type="email" placeholder="exemplo@email.com" required&gt;

  &lt;label for="password"&gt;Senha:&lt;/label&gt;
  &lt;input id="password" type="password" placeholder="Mínimo 8 caracteres"&gt;

  &lt;label for="numero"&gt;Idade:&lt;/label&gt;
  &lt;input id="numero" type="number" min="0" max="120"&gt;

  &lt;label for="data"&gt;Data de Nascimento:&lt;/label&gt;
  &lt;input id="data" type="date"&gt;

  &lt;label for="cor"&gt;Cor Favorita:&lt;/label&gt;
  &lt;input id="cor" type="color"&gt;

  &lt;label for="arquivo"&gt;Upload de Documento:&lt;/label&gt;
  &lt;input id="arquivo" type="file"&gt;

  &lt;label&gt;Género:&lt;/label&gt;
  &lt;input type="radio" name="genero" value="masculino" id="masculino"&gt;
  &lt;label for="masculino"&gt;Masculino&lt;/label&gt;
  
  &lt;input type="radio" name="genero" value="feminino" id="feminino"&gt;
  &lt;label for="feminino"&gt;Feminino&lt;/label&gt;

  &lt;label&gt;Interesses:&lt;/label&gt;
  &lt;input type="checkbox" id="html" name="interesses" value="html"&gt;
  &lt;label for="html"&gt;HTML&lt;/label&gt;
  
  &lt;input type="checkbox" id="css" name="interesses" value="css"&gt;
  &lt;label for="css"&gt;CSS&lt;/label&gt;
  
  &lt;input type="checkbox" id="js" name="interesses" value="js"&gt;
  &lt;label for="js"&gt;JavaScript&lt;/label&gt;

  &lt;label for="pais"&gt;País:&lt;/label&gt;
  &lt;select id="pais"&gt;
    &lt;option value=""&gt;Selecione...&lt;/option&gt;
    &lt;option value="mz"&gt;Moçambique&lt;/option&gt;
    &lt;option value="pt"&gt;Portugal&lt;/option&gt;
    &lt;option value="br"&gt;Brasil&lt;/option&gt;
  &lt;/select&gt;

  &lt;label for="mensagem"&gt;Mensagem:&lt;/label&gt;
  &lt;textarea id="mensagem" rows="4" placeholder="Escreva sua mensagem..."&gt;&lt;/textarea&gt;

  &lt;button type="submit"&gt;Enviar Dados&lt;/button&gt;
  &lt;button type="reset"&gt;Limpar Campos&lt;/button&gt;
&lt;/form&gt;
        </code></pre>
      </section>

      <!-- 11. AGRUPAMENTO E SEMÂNTICA -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">11. Elementos Semânticos de Layout</h3>
        <p class="text-sm">Tags semânticas definem a arquitectura da página e melhoram o SEO.</p>
        
        <pre><code class="language-html">
&lt;header&gt;
  &lt;nav&gt;
    &lt;a href="/"&gt;Home&lt;/a&gt;
    &lt;a href="/sobre"&gt;Sobre&lt;/a&gt;
    &lt;a href="/contacto"&gt;Contacto&lt;/a&gt;
  &lt;/nav&gt;
&lt;/header&gt;

&lt;main&gt;
  &lt;section&gt;
    &lt;article&gt;
      &lt;h2&gt;Título do Artigo&lt;/h2&gt;
      &lt;p&gt;Conteúdo principal do artigo...&lt;/p&gt;
      &lt;figure&gt;
        &lt;img src="imagem.jpg" alt="Descrição"&gt;
        &lt;figcaption&gt;Legenda da imagem&lt;/figcaption&gt;
      &lt;/figure&gt;
    &lt;/article&gt;
    
    &lt;aside&gt;
      &lt;h3&gt;Barra Lateral&lt;/h3&gt;
      &lt;p&gt;Conteúdo complementar&lt;/p&gt;
    &lt;/aside&gt;
  &lt;/section&gt;
  
  &lt;div&gt;
    &lt;p&gt;Div genérica para agrupamento&lt;/p&gt;
    &lt;span&gt;Span genérico para texto inline&lt;/span&gt;
  &lt;/div&gt;
&lt;/main&gt;

&lt;footer&gt;
  &lt;address&gt;
    Contacto: &lt;a href="mailto:info@exemplo.co.mz"&gt;info@exemplo.co.mz&lt;/a&gt;
  &lt;/address&gt;
  &lt;p&gt;&amp;copy; 2026 Codworks Master. Todos os direitos reservados.&lt;/p&gt;
&lt;/footer&gt;
        </code></pre>
      </section>

      <!-- 12. MULTIMÉDIA -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b border-primary/20 pb-2 text-accent">12. Multimédia: Áudio, Vídeo e Iframes</h3>
        
        <pre><code class="language-html">
&lt;!-- Vídeo --&gt;
&lt;video width="320" height="240" controls poster="thumbnail.jpg"&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
  &lt;source src="video.webm" type="video/webm"&gt;
  O seu navegador não suporta o elemento de vídeo.
&lt;/video&gt;

&lt;!-- Áudio --&gt;
&lt;audio controls&gt;
  &lt;source src="musica.mp3" type="audio/mpeg"&gt;
  O seu navegador não suporta o elemento de áudio.
&lt;/audio&gt;

&lt;!-- Iframe (conteúdo externo) --&gt;
&lt;iframe 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  width="560" 
  height="315" 
  title="Vídeo do YouTube"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen&gt;
&lt;/iframe&gt;
        </code></pre>
      </section>

      <!-- 13. ELEMENTOS INTERACTIVOS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b border-primary/20 pb-2 text-accent">13. Elementos Interactivos</h3>
        
        <pre><code class="language-html">
&lt;!-- Details e Summary (acordeão nativo) --&gt;
&lt;details&gt;
  &lt;summary&gt;Clique para expandir&lt;/summary&gt;
  &lt;p&gt;Este conteúdo estava escondido e agora está visível!&lt;/p&gt;
  &lt;ul&gt;
    &lt;li&gt;Item revelado 1&lt;/li&gt;
    &lt;li&gt;Item revelado 2&lt;/li&gt;
  &lt;/ul&gt;
&lt;/details&gt;

&lt;!-- Progresso --&gt;
&lt;progress value="70" max="100"&gt;70%&lt;/progress&gt;

&lt;!-- Medidor --&gt;
&lt;meter value="0.6" min="0" max="1"&gt;60%&lt;/meter&gt;
        </code></pre>
      </section>

      <!-- 14. SCRIPTS E ESTILOS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b border-primary/20 pb-2 text-accent">14. Conexão com CSS e JavaScript</h3>
        
        <pre><code class="language-html">
&lt;!-- CSS Externo --&gt;
&lt;link rel="stylesheet" href="style.css"&gt;

&lt;!-- CSS Interno --&gt;
&lt;style&gt;
  body { font-family: Arial, sans-serif; }
  .destaque { color: blue; font-weight: bold; }
&lt;/style&gt;

&lt;!-- JavaScript Externo (no final do body) --&gt;
&lt;script src="app.js"&gt;&lt;/script&gt;

&lt;!-- JavaScript Inline --&gt;
&lt;script&gt;
  console.log('Página carregada!');
&lt;/script&gt;

&lt;!-- Noscript (fallback) --&gt;
&lt;noscript&gt;
  &lt;p&gt;O seu navegador não suporta JavaScript.&lt;/p&gt;
&lt;/noscript&gt;
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Arquiteto</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Escrever HTML sem as tags de cabeçalho e viewport é como construir uma casa sem janelas. O sistema funciona, mas ninguém consegue habitá-lo confortavelmente."
        </p>
      </section>
    </div>
  `,
  quizId: "web-t1-quiz"
};
