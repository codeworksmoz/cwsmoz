
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m17",
  title: "Content Security Policy (CSP) Profundo",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 text-red-100">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400">🛡️ Blindagem Contra Injeção (XSS)</h2>
        <p class="text-lg">O CSP é a ferramenta de segurança mais potente do HTML. No nível Master, configuramos políticas restritivas que bloqueiam qualquer código ou recurso não autorizado.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">O Conceito de 'Nonce'</h3>
        <p>Um "Number used ONCE". O seu servidor gera um código aleatório em cada request e o HTML só executa scripts que possuam esse código exato no atributo <code>nonce</code>.</p>
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs space-y-2 border-white/10">
          <p class="text-muted-foreground">// No cabeçalho da resposta HTTP:</p>
          <p class="text-accent">Content-Security-Policy: script-src 'nonce-XYZ123' 'self';</p>
          <p class="text-muted-foreground">// No HTML:</p>
          <p><span class="text-primary">&lt;script</span> <span class="text-accent">nonce</span>=<span class="text-green-400">"XYZ123"</span><span class="text-primary">&gt;</span>...<span class="text-primary">&lt;/script&gt;</span></p>
        </div>

        <h3 class="text-xl font-bold font-headline">Diretivas Master de Segurança</h3>
        <ul class="list-disc ml-6 space-y-2 text-sm">
          <li><strong>default-src 'self':</strong> Proíbe tudo o que não venha do seu próprio domínio.</li>
          <li><strong>connect-src:</strong> Restringe para quais APIs o JavaScript pode fazer pedidos.</li>
          <li><strong>frame-ancestors 'none':</strong> Impede que o seu site seja colocado num <i>iframe</i> alheio (previne Clickjacking).</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "html-mq17"
};
