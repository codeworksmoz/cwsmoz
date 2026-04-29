
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m10",
  title: "Gestão de Foco e Acessibilidade em SPAs",
  content: `
    <div class="space-y-8">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 font-headline">
          ⌨️ A Jornada do Teclado
        </h2>
        <p class="text-lg leading-relaxed">
          Numa aplicação Master, a acessibilidade não é um extra. Gestão de foco é garantir que utilizadores que navegam via Tab ou leitores de ecrã nunca fiquem "presos" ou "perdidos" após uma mudança de estado dinâmica.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline text-primary border-b border-white/5 pb-2">O Atributo Inert: Blindagem de Acessibilidade</h3>
        <p>O <code>inert</code> é uma funcionalidade moderna (2023+) que diz ao browser para ignorar completamente uma árvore DOM. Ideal para desativar o site de fundo quando um Modal está aberto.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm border border-white/5">
          <span class="text-primary">&lt;div</span> <span class="text-accent">id</span>=<span class="text-green-400">"background-content"</span> <span class="text-accent">inert</span><span class="text-primary">&gt;</span>...<span class="text-primary">&lt;/div&gt;</span>
        </div>

        <h3 class="text-xl font-bold font-headline">Focus Trapping (Armadilha de Foco)</h3>
        <p>Ao abrir um menu ou diálogo, o foco DEVE ficar restrito a esses elementos. Se o utilizador carregar em Tab no último link do menu, ele deve voltar ao primeiro, impedindo que o foco "fuja" para elementos invisíveis por trás do menu.</p>
        
        <h3 class="text-xl font-bold font-headline text-accent">Skip Links: O Atalho Profissional</h3>
        <p>Todo o site de elite deve ter um link oculto no topo que permite saltar a navegação repetitiva. Aparece apenas quando recebe foco via teclado.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
          <span class="text-primary">&lt;a</span> <span class="text-accent">href</span>=<span class="text-green-400">"#main-content"</span> <span class="text-accent">class</span>=<span class="text-green-400">"skip-link"</span><span class="text-primary">&gt;</span>Saltar para o conteúdo<span class="text-primary">&lt;/a&gt;</span>
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq10"
};
