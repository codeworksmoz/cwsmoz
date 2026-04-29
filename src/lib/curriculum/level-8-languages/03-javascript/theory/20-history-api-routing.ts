import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m20",
  title: "Fase 4: History API: Roteamento de SPAs do Zero",
  enableInteractive: true,
  youtubeVideoId: "dQw4w9WgXcQ",
  quizId: "js-mq20",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🛤️ A Ilusão de Múltiplas Páginas
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          As <strong>Single Page Applications (SPAs)</strong> modernas não recarregam o site ao navegar. Elas utilizam a <strong>History API</strong> para mudar a URL e atualizar o conteúdo dinamicamente, mantendo a fluidez de uma aplicação nativa. No nível Master, entendemos que o roteamento de cliente é o coração da experiência do utilizador moderno.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. pushState() e o Estado de Navegação</h3>
        <p class="text-sm leading-relaxed">
          O método <code>history.pushState()</code> permite adicionar uma entrada no histórico do browser sem disparar um pedido de rede ao servidor, guardando um objeto de estado associado àquela URL.
        </p>
        
        <div class="space-y-4">
           <pre><code class="language-javascript">
const state = { page: "profile", id: 101 };
const title = "Perfil do Engenheiro";
const url = "/profile/101";

// Altera a URL e guarda o estado na memória do browser
history.pushState(state, title, url);
           </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. O Evento popstate: Reagindo ao Botão Voltar</h3>
        <p class="text-sm leading-relaxed">Quando o utilizador clica no botão "Retroceder" do browser, o evento <code>popstate</code> é disparado. Deves ouvir este evento para renderizar o conteúdo correto baseado no estado que guardaste anteriormente.</p>

        <div class="space-y-4">
           <pre><code class="language-javascript">
window.addEventListener('popstate', (event) => {
  if (event.state) {
    console.log("Navegando para:", event.state.page);
    updateUserInterface(event.state.page); // Lógica de renderização dinâmica
  }
});
           </code></pre>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão do Arquiteto</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "O roteamento de cliente exige uma sincronização perfeita. A sua aplicação deve ser a única fonte da verdade sobre o que a URL representa. Ao dominar a History API, você entende a fundação técnica de frameworks como Next.js e React Router."
        </p>
      </section>
    </div>
  `
};
