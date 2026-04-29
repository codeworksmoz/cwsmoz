
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m16",
  title: "Web Crypto API: Segurança de Dados Nativa",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 text-red-100">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400">🔐 Criptografia de Hardware</h2>
        <p class="text-lg leading-relaxed">A <strong>Web Crypto API</strong> permite realizar operações criptográficas pesadas (Hashing, Signatures, Encryption) diretamente no browser com performance de nível nativo, utilizando as instruções de segurança do CPU.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline text-primary border-b border-white/5 pb-2">Hashing Seguro (SHA-256)</h3>
        <p>Para gerar um identificador único ou validar a integridade de um ficheiro sem carregar bibliotecas externas.</p>
        
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-accent">
          <p>const msgBuffer = new TextEncoder().encode('Codworks');</p>
          <p>const hashBuffer = await <span class="text-primary">crypto.subtle.digest</span>('SHA-256', msgBuffer);</p>
        </div>

        <h3 class="text-xl font-bold font-headline">Geração de Números Aleatórios</h3>
        <p>Nunca uses <code>Math.random()</code> para segurança (senhas, tokens). Usa o gerador criptográfico do sistema.</p>
        <div class="bg-black/40 p-3 rounded-lg font-code text-xs">
          const randomValues = <span class="text-primary">crypto.getRandomValues</span>(new Uint32Array(10));
        </div>
      </div>
    </div>
  `,
  quizId: "js-mq16"
};
