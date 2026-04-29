import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "web-t16",
  title: "Segurança Web: HTTPS, CSP e Blindagem de Dados",
  youtubeVideoId: "u044iM9xsTM",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 text-red-100 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400 flex items-center gap-2">
          🛡️ A Web é um Campo de Batalha
        </h2>
        <p class="text-lg leading-relaxed">
          Um site de elite deve ser seguro por design. A segurança web não é apenas um "extra", é a base da confiança entre o utilizador e a aplicação.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Túnel Seguro: HTTPS e TLS</h3>
        <p>O HTTPS encripta a comunicação entre o browser e o servidor. Isto impede ataques de <i>Man-in-the-Middle</i> (MITM), onde um hacker intercepta dados em redes Wi-Fi públicas.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">Porquê usar HTTPS?</h4>
          <ul class="list-disc ml-6 space-y-2 text-xs">
            <li><strong>Integridade:</strong> Garante que o site não foi alterado no caminho.</li>
            <li><strong>Autenticação:</strong> Prova que o site é realmente quem diz ser.</li>
            <li><strong>Confidencialidade:</strong> Encripta senhas e dados bancários.</li>
          </ul>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. CSP: Content Security Policy</h3>
        <p>O CSP é uma camada extra de segurança que ajuda a detetar e mitigar ataques como <strong>XSS (Cross-Site Scripting)</strong>. Ele diz ao browser quais fontes de scripts e imagens são confiáveis.</p>
        <div class="bg-black/40 p-4 rounded-xl border font-code text-sm text-accent">
          &lt;meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://apis.google.com;"&gt;
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">3. Prevenção de XSS</h3>
        <p>A regra de ouro é: <strong>Nunca confie em dados que vêm do utilizador.</strong> Sempre sanitize (limpe) ou escape o texto antes de o exibir no HTML.</p>
      </div>
    </div>
  `,
  quizId: "web-q16"
};
