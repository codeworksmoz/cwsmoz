import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m18",
  title: "Fase 3: Web Storage, IndexedDB e Cache Persistente",
  enableInteractive: true,
  quizId: "html-mq18",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          💾 Persistência no Cliente
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O HTML moderno oferece três camadas de armazenamento para que a sua aplicação funcione sem internet e guarde o estado do utilizador localmente. No nível Master, escolhemos a ferramenta baseando-nos na <strong>complexidade</strong> e no <strong>volume</strong> dos dados.
        </p>
      </div>

      <!-- 1. WEB STORAGE -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Web Storage: Simplicidade de Chave-Valor</h3>
        <p class="text-sm">Ideal para configurações simples e tokens de autenticação. É síncrono e limitado a cerca de 5MB.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-lg">
            <h4 class="font-bold text-primary mb-2 text-xs">LocalStorage</h4>
            <p class="text-[10px] opacity-70 mb-4">Os dados persistem mesmo após fechar o browser ou reiniciar o computador.</p>
            <pre><code class="language-javascript">localStorage.setItem('theme', 'dark');</code></pre>
          </div>
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-lg">
            <h4 class="font-bold text-primary mb-2 text-xs">SessionStorage</h4>
            <p class="text-[10px] opacity-70 mb-4">Os dados são apagados assim que a aba ou janela é fechada.</p>
            <pre><code class="language-javascript">sessionStorage.setItem('temp_id', '456');</code></pre>
          </div>
        </div>
      </section>

      <!-- 2. INDEXEDDB -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. IndexedDB: O Banco de Dados do Browser</h3>
        <p class="text-sm leading-relaxed">Para grandes volumes de dados (Gigabytes) e pesquisas complexas, usamos o <strong>IndexedDB</strong>. É uma base de dados NoSQL, transacional e assíncrona.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">Porquê usar IndexedDB?</h4>
          <ul class="text-xs space-y-2 list-disc ml-6 opacity-80">
            <li>Suporta índices para buscas ultra-rápidas.</li>
            <li>Armazena objetos complexos, Blobs e ficheiros.</li>
            <li>Não bloqueia a thread principal (Non-blocking).</li>
            <li>Permite transações para garantir a integridade dos dados.</li>
          </ul>
        </div>
      </section>

      <!-- 3. CACHE API -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Cache API: Persistência de Recursos</h3>
        <p class="text-sm">Enquanto o Storage guarda dados, a <strong>Cache API</strong> guarda ficheiros (HTML, CSS, JS, Imagens). É o motor fundamental de qualquer PWA (Progressive Web App).</p>
        
        <pre><code class="language-javascript">
// Guardando o 'shell' da aplicação para uso offline
const cache = await caches.open('v1-assets');
await cache.addAll([
  '/',
  '/styles/main.css',
  '/scripts/app.js',
  '/logo.svg'
]);
        </code></pre>
      </section>

      <!-- 4. GESTÃO DE QUOTA -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Quotas e Persistência Durável</h3>
        <p class="text-sm leading-relaxed">O browser pode apagar os seus dados se o disco do utilizador estiver cheio (Best-effort). No nível Master, solicitamos <strong>Persistência Durável</strong> para garantir que o SO não apague os nossos dados sem aviso.</p>
        
        <pre><code class="language-javascript">
if (navigator.storage && navigator.storage.persist) {
  const isPersisted = await navigator.storage.persist();
  console.log("Armazenamento durável: " + (isPersisted ? "ATIVO" : "NÃO"));
}
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Engenheiro de Sistemas</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "LocalStorage é para preferências; IndexedDB é para dados; Cache API é para performance offline. Use cada um na sua camada e o seu software será resiliente mesmo nas piores condições de rede de Moçambique."
        </p>
      </section>
    </div>
  `
};