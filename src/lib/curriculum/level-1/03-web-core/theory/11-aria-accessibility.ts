import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "web-t11",
  title: "Acessibilidade e Padrões ARIA: Tornando a Web Inclusiva",
  youtubeVideoId: "u044iM9xsTM",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          ♿ Acessibilidade é Engenharia
        </h2>
        <p class="text-lg leading-relaxed">
          Para um Engenheiro de Elite, um site inacessível é um site com bug. A acessibilidade garante que pessoas com deficiências visuais, motoras ou cognitivas possam consumir o seu software. O padrão <strong>WAI-ARIA</strong> (Accessible Rich Internet Applications) fornece os metadados necessários para preencher as lacunas onde o HTML nativo falha.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. A Regra de Ouro do ARIA</h3>
        <p class="text-sm">A primeira regra do ARIA é: <strong>Se podes usar uma tag HTML nativa, usa-a.</strong></p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
            <h4 class="font-bold text-red-400 text-xs mb-1">Amador ❌</h4>
            <code class="text-[10px]">&lt;div role="button" onclick="..."&gt;</code>
          </div>
          <div class="p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
            <h4 class="font-bold text-green-400 text-xs mb-1">Elite ✅</h4>
            <code class="text-[10px]">&lt;button&gt;Clique Aqui&lt;/button&gt;</code>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Roles, States e Properties</h3>
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">Role</div>
            <div>
              <p class="font-bold text-sm">O que o elemento É:</p>
              <p class="text-xs text-muted-foreground">Ex: <code>role="alert"</code>, <code>role="dialog"</code>, <code>role="tablist"</code>.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <div class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 font-bold">State</div>
            <div>
              <p class="font-bold text-sm">Como o elemento ESTÁ agora:</p>
              <p class="text-xs text-muted-foreground">Ex: <code>aria-expanded="true"</code>, <code>aria-checked="false"</code>.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <div class="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 shrink-0 font-bold">Prop</div>
            <div>
              <p class="font-bold text-sm">Relação entre elementos:</p>
              <p class="text-xs text-muted-foreground">Ex: <code>aria-labelledby="id-do-titulo"</code>, <code>aria-describedby="..."</code>.</p>
            </div>
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">⌨️ Navegação por Teclado e Foco</h3>
          <p class="text-sm leading-relaxed mb-4">
            Um utilizador master deve conseguir navegar no teu site apenas com a tecla <strong>TAB</strong>.
          </p>
          <ul class="list-disc ml-6 space-y-2 text-xs">
            <li><strong>tabindex="0":</strong> Coloca um elemento na ordem natural de foco.</li>
            <li><strong>tabindex="-1":</strong> Permite foco via JS, mas remove da ordem do Tab.</li>
            <li><strong>:focus-visible:</strong> Estilo CSS essencial para indicar onde o utilizador está.</li>
          </ul>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Dica Master: aria-label
          </h4>
          <p class="text-sm leading-relaxed">
            Se o teu botão tem apenas um ícone (ex: um 'X' para fechar), o leitor de ecrã não saberá o que ler. Use <code>aria-label="Fechar Modal"</code> para dar voz ao elemento visual.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "web-t11-quiz"
};
