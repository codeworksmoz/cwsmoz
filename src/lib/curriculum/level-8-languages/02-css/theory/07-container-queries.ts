import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m7",
  title: "Fase 2: Container Queries vs Media Queries",
  enableInteractive: true,
  youtubeVideoId: "v4cd1O4zkGw",
  quizId: "css-mq7",
  content: `<div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📦 O Fim da Dependência da Viewport
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Tradicionalmente, a responsividade (Media Queries) baseia-se no tamanho da janela do browser. Mas num sistema de componentes de elite, o que importa é o <strong>espaço disponível para o componente</strong> dentro do seu pai. As <strong>Container Queries</strong> permitem designs verdadeiramente modulares.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Definindo o Contexto de Container</h3>
        <p class="text-sm">Primeiro, deves dizer ao browser qual elemento deve ser "vigiado". Usamos <code>container-type: inline-size</code> para vigiar a largura.</p>
        
        <div class="space-y-4">
           <pre><code class="language-css">
.card-wrapper {
  container-type: inline-size;
  container-name: sidebar-card;
}

/* O filho reage apenas ao tamanho do pai .card-wrapper */
@container sidebar-card (min-width: 400px) {
  .card-content {
    display: flex;
    flex-direction: row;
  }
}
           </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Unidades de Medida de Container (cqw)</h3>
        <p class="text-sm leading-relaxed">Em vez de <code>vw</code> (Viewport Width), usamos <code>cqw</code> (Container Query Width). 10cqw é sempre 10% da largura do container pai, garantindo proporções perfeitas em qualquer lugar da página.</p>
      </section>
    </div>`
};