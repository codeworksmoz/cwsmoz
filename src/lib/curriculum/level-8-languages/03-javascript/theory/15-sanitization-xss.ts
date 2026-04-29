import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m15",
  title: "Fase 3: Sanitização e Proteção contra XSS: Blindando o DOM",
  enableInteractive: true,
  youtubeVideoId: "u044iM9xsTM",
  quizId: "js-mq15",
  content: `
    <div class="space-y-12">
      <div class="bg-red-500/5 p-8 rounded-[2.5rem] border border-red-500/20 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-red-400 flex items-center gap-3">
          🛡️ Defesa Cibernética no Client-side
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>Cross-Site Scripting (XSS)</strong> é o ataque mais comum na web. Ele permite que um atacante execute scripts maliciosos no browser de outros utilizadores. No nível Master, não confiamos em nenhum dado externo; utilizamos a <strong>Sanitizer API</strong> e políticas de <strong>Trusted Types</strong> para garantir a integridade do DOM.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-red-500/20 pb-2 text-accent">1. O Perigo do innerHTML</h3>
        <p class="text-sm">Usar <code>innerHTML</code> com dados vindo do utilizador sem tratamento é o caminho mais rápido para um desastre de segurança. O atacante pode injetar uma tag <code>&lt;img&gt;</code> com um atributo <code>onerror</code> que rouba o token de sessão.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-4 bg-red-900/10 border border-red-500/30 rounded-xl">
             <h4 class="font-bold text-red-400 text-xs mb-2">Vulnerável ❌</h4>
             <pre><code class="language-javascript">
const data = "<img src=x onerror=alert(1)>";
el.innerHTML = data; // 💥 SCRIPT EXECUTADO!
             </code></pre>
          </div>
          <div class="p-4 bg-green-900/20 border border-green-500/30 rounded-xl">
             <h4 class="font-bold text-green-400 text-xs mb-2">Seguro ✅</h4>
             <pre><code class="language-javascript">
const data = "Olá Mundo";
el.textContent = data; // 🛡️ Renderiza apenas texto.
             </code></pre>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-red-500/20 pb-2 text-accent">2. Sanitizer API: Limpeza Nativa</h3>
        <p class="text-sm leading-relaxed">A nova <strong>Sanitizer API</strong> (2024+) permite limpar strings HTML de forma segura e performática, removendo atributos perigosos enquanto preserva a estrutura visual.</p>

        <pre><code class="language-javascript">
const sanitizer = new Sanitizer();
const dirtyHTML = "Olá <script>alert(1)</script> <b>Amigo</b>";

// ✅ Remove o script e mantém o negrito
element.setHTML(dirtyHTML, { sanitizer });
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Engenheiro de Segurança</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Em engenharia de elite, a segurança é por design. Se precisas de renderizar HTML dinâmico, utilize uma política de <strong>Trusted Types</strong> para garantir que apenas strings validadas por uma função de limpeza possam chegar ao DOM."
        </p>
      </section>
    </div>
  `
};
