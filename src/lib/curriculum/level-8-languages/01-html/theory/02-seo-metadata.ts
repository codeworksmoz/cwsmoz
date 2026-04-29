
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m3",
  title: "SEO Técnico: Metadados e Open Graph",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 text-indigo-100">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-headline">🚀 Visibilidade e Viralização</h2>
        <p class="text-lg">Como o seu site aparece no Google e nas redes sociais depende de metadados invisíveis para o utilizador, mas vitais para os algoritmos de indexação e os <i>scrapers</i> sociais.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">A Tag Canonical: Evite Penalizações</h3>
        <p>Se o seu site pode ser acedido por múltiplas URLs (ex: com ou sem 'www'), o Google pode penalizar-te por "conteúdo duplicado". A tag canonical resolve isto indicando a fonte da verdade.</p>
        <div class="bg-black/40 p-4 rounded-xl border font-code text-sm">
          <span class="text-primary">&lt;link</span> <span class="text-accent">rel</span>=<span class="text-green-400">"canonical"</span> <span class="text-accent">href</span>=<span class="text-green-400">"https://codworks.mz/html-master"</span><span class="text-primary">&gt;</span>
        </div>

        <h3 class="text-xl font-bold font-headline">Open Graph (Facebook/WhatsApp/LinkedIn)</h3>
        <p>O protocolo Open Graph (OG) permite que o seu site se torne um "objeto rico" num grafo social. Sem isto, a pré-visualização do link no WhatsApp será apenas um texto genérico.</p>
        <div class="bg-black/40 p-4 rounded-xl border font-code text-xs space-y-1">
          <span class="text-primary">&lt;meta</span> <span class="text-accent">property</span>=<span class="text-green-400">"og:type"</span> <span class="text-accent">content</span>=<span class="text-green-400">"website"</span><span class="text-primary">&gt;</span><br/>
          <span class="text-primary">&lt;meta</span> <span class="text-accent">property</span>=<span class="text-green-400">"og:title"</span> <span class="text-accent">content</span>=<span class="text-green-400">"Formação de Elite em Moçambique"</span><span class="text-primary">&gt;</span><br/>
          <span class="text-primary">&lt;meta</span> <span class="text-accent">property</span>=<span class="text-green-400">"og:image"</span> <span class="text-accent">content</span>=<span class="text-green-400">"https://codworks.mz/cover.jpg"</span><span class="text-primary">&gt;</span>
        </div>

        <h3 class="text-xl font-bold font-headline text-accent">Twitter Cards</h3>
        <p>O Twitter (X) usa o seu próprio formato, mas pode herdar do OG. Para cartões grandes e apelativos, use:</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
          <span class="text-primary">&lt;meta</span> <span class="text-accent">name</span>=<span class="text-green-400">"twitter:card"</span> <span class="text-accent">content</span>=<span class="text-green-400">"summary_large_image"</span><span class="text-primary">&gt;</span>
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq3"
};
