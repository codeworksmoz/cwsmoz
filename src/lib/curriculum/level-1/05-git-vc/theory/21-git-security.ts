import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "git-t21",
  title: "Segurança: GPG Signing e Chaves SSH",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 text-red-100 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400">🛡️ Autenticidade do Código</h2>
        <p class="text-lg">No nível Master, não basta enviar código; deves <strong>provar</strong> que foste tu quem o escreveu. A segurança em Git baseia-se em criptografia de chave pública.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Chaves SSH (Comunicação)</h3>
        <p class="text-sm">Substitua o uso de passwords pela sua <strong>Chave SSH</strong>. Ela permite que o teu computador comunique com o GitHub de forma encriptada e sem intervenção manual.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-accent">
          ssh-keygen -t ed25519 -C "teu@email.com"
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. GPG Signing (Verificação)</h3>
        <p class="text-sm">Assinar commits com <strong>GPG</strong> garante que ninguém consegue fingir ser tu. No GitHub, commits assinados ganham o selo de <span class="bg-green-600 text-white px-2 py-0.5 rounded text-[10px]">Verified</span>.</p>

        <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20 mt-6 shadow-inner text-center">
          <p class="text-primary font-bold text-2xl animate-pulse">🎓 Parabéns! Completaste a Jornada Master de Git.</p>
          <p class="text-muted-foreground mt-2">Dominas o histórico, a colaboração e as entranhas da ferramenta mais importante da engenharia moderna.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "git-q21"
};