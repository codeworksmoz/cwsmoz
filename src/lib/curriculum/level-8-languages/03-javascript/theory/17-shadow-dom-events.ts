import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m17",
  title: "Fase 4: Shadow DOM: Event Retargeting e Encapsulamento",
  enableInteractive: true,
  youtubeVideoId: "8aGhZQkoFbQ",
  quizId: "js-mq17",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🌑 Interatividade Blindada
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>Shadow DOM</strong> não isola apenas o CSS; ele isola também o fluxo de eventos. No nível Master, entendemos como o <strong>Event Retargeting</strong> preserva o encapsulamento, fazendo com que a interação dentro de um componente pareça vir do próprio componente pai quando vista de fora.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Event Retargeting e Composed Path</h3>
        <p class="text-sm">Se clicas num botão dentro de um Shadow DOM, o <code>event.target</code> no script global será o componente pai (o Host). Para ver a origem real do clique, deves usar o <code>composedPath()</code>.</p>
        
        <pre><code class="language-javascript">
window.addEventListener('click', (e) => {
  console.log('Alvo visível:', e.target); // O Custom Element
  console.log('Caminho real:', e.composedPath()); // Array com os nós internos
});
        </code></pre>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Composed e Bubbling</h3>
        <p class="text-sm leading-relaxed">
          Ao disparar os seus próprios eventos (<button>CustomEvent</button>), deves definir <code>composed: true</code> se queres que eles atravessem a fronteira da sombra e cheguem ao documento principal.
        </p>
      </section>

      <section class="bg-yellow-500/5 p-8 rounded-[2rem] border-2 border-dashed border-yellow-500/20 text-center">
        <h4 class="text-xl font-bold text-yellow-500 mb-4">🏆 A Visão do Arquiteto de Componentes</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "O Shadow DOM garante que o seu componente seja uma 'caixa preta' perfeita. Ao dominar o retargeting, você constrói widgets que não poluem o fluxo de eventos global do site."
        </p>
      </section>
    </div>
  `
};
