import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m13",
  title: "Fase 3: Web Crypto API: Segurança de Dados Nativa",
  enableInteractive: true,
  youtubeVideoId: "u044iM9xsTM",
  quizId: "js-mq13",
  content: `
    <div class="space-y-12">
      <div class="bg-red-500/5 p-8 rounded-[2.5rem] border border-red-500/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-red-400 flex items-center gap-3">
          🔐 Criptografia de Baixo Nível
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Nunca implemente os seus próprios algoritmos de criptografia em JS puro. A <strong>Web Crypto API</strong> dá acesso às primitivas de segurança do Sistema Operativo e do Hardware, permitindo realizar Hashing, Assinaturas Digitais e Cifragem com performance de silício e proteção contra ataques de canal lateral.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-red-500/20 pb-2 text-accent">1. Hashing com SHA-256</h3>
        <p class="text-sm">Essencial para validar a integridade de ficheiros ou criar identificadores únicos (IDs) que não exponham dados sensíveis.</p>
        <pre><code class="language-javascript">
async function hashMessage(message) {
  const msgUint8 = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
        </code></pre>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-red-500/20 pb-2 text-accent">2. Entropia e Números Aleatórios</h3>
        <p class="text-sm leading-relaxed"><code>Math.random()</code> é determinístico e inseguro. Para tokens de sessão ou chaves, deves usar a entropia real do sistema.</p>
        <pre><code class="language-javascript">
const array = new Uint32Array(10);
crypto.getRandomValues(array);

console.log("Valores Criptograficamente Seguros:");
for (const val of array) { console.log(val); }
        </code></pre>
      </section>
    </div>
  `,
};
