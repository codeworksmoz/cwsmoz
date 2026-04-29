
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m2",
  title: "Semântica Avançada e Acessibilidade Digital",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-headline">
          ♿ Além do Layout Visual
        </h2>
        <p class="text-lg leading-relaxed">
          Semântica é sobre dar <strong>significado programático</strong> ao conteúdo. Isto permite que o Google entenda a importância da informação e que tecnologias assistivas (como o VoiceOver ou NVDA) guiem utilizadores com deficiência visual com precisão.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Hierarquia de Marcos (Landmarks)</h3>
        <p>Um documento Master deve ter marcos claros. Nunca uses <code>&lt;div&gt;</code> para o que pode ser um marco semântico. Isto ajuda o utilizador a saltar entre secções usando atalhos de teclado.</p>
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm shadow-xl">
          <span class="text-primary">&lt;header&gt;</span> <span class="text-muted-foreground">&lt;!-- Navegação e Identidade --&gt;</span><br/>
          &nbsp;&nbsp;<span class="text-primary">&lt;nav&gt;</span>...<span class="text-primary">&lt;/nav&gt;</span><br/>
          <span class="text-primary">&lt;/header&gt;</span><br/><br/>
          <span class="text-primary">&lt;main role="main"&gt;</span> <span class="text-muted-foreground">&lt;!-- Conteúdo Único da Página --&gt;</span><br/>
          &nbsp;&nbsp;<span class="text-primary">&lt;article&gt;</span>...<span class="text-primary">&lt;/article&gt;</span><br/>
          <span class="text-primary">&lt;/main&gt;</span><br/><br/>
          <span class="text-primary">&lt;footer&gt;</span>...<span class="text-primary">&lt;/footer&gt;</span>
        </div>

        <h3 class="text-xl font-bold font-headline">WAI-ARIA: O Suplemento Semântico</h3>
        <p>Quando o HTML nativo não tem uma tag específica (ex: um menu de separadores ou um switch), usamos o padrão <strong>WAI-ARIA</strong> para comunicar o estado e o comportamento ao browser.</p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-card p-4 rounded-xl border border-white/10">
            <h4 class="font-bold text-accent mb-2">Roles (Papéis)</h4>
            <p class="text-xs text-muted-foreground">Define o que o elemento É. <br/><code>role="button"</code>, <code>role="alert"</code>.</p>
          </div>
          <div class="bg-card p-4 rounded-xl border border-white/10">
            <h4 class="font-bold text-accent mb-2">States (Estados)</h4>
            <p class="text-xs text-muted-foreground">Define como o elemento ESTÁ. <br/><code>aria-expanded="true"</code>, <code>aria-hidden="false"</code>.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline text-primary">Live Regions</h3>
        <p>Como avisar um utilizador cego que o saldo da conta mudou sem ele clicar em nada? Usamos <code>aria-live</code>.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
          <span class="text-primary">&lt;div</span> <span class="text-accent">aria-live</span>=<span class="text-green-400">"polite"</span><span class="text-primary">&gt;</span><br/>
          &nbsp;&nbsp;O seu upload foi concluído.<br/>
          <span class="text-primary">&lt;/div&gt;</span>
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq2"
};
