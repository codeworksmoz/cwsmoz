
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m18",
  title: "Shadow DOM Interactivity e Event Retargeting",
  content: `
    <div class="space-y-8">
      <div class="bg-purple-500/10 p-6 rounded-2xl border border-purple-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-purple-400">🌑 Interatividade Blindada</h2>
        <p class="text-lg leading-relaxed">Quando usamos Shadow DOM, a árvore de elementos está isolada. Isto afeta como o JavaScript interage com o DOM e como os eventos se propagam para fora do componente.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Event Retargeting</h3>
        <p>Para o código fora do componente, um clique num botão dentro do Shadow DOM parece vir do próprio componente pai (o Custom Element). Isto preserva o encapsulamento.</p>
        
        <h3 class="text-xl font-bold font-headline">Acedendo ao Interior</h3>
        <p>Se o modo for 'open', podes aceder aos elementos internos via <code>shadowRoot</code>. Se for 'closed', o interior é inacessível para scripts externos.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm">
          <p>const btn = el.<span class="text-accent">shadowRoot</span>.querySelector('button');</p>
        </div>

        <h3 class="text-xl font-bold font-headline text-primary">Composed Events</h3>
        <p>Alguns eventos não atravessam a barreira do Shadow DOM por padrão. Ao disparar eventos customizados, deves definir <code>composed: true</code> para que eles subam até ao documento principal.</p>
      </div>
    </div>
  `,
  quizId: "js-mq18"
};
