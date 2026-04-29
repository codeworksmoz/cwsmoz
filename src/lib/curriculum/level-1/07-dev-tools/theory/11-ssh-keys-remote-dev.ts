import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t11",
  title: "Chaves SSH e Desenvolvimento Remoto Seguro",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🔐 Segurança Sem Senhas
        </h2>
        <p class="text-lg leading-relaxed">Em engenharia de alto nível, não usamos passwords para aceder a servidores ou ao GitHub. Usamos **Chaves SSH**, baseadas em criptografia asimétrica (Chave Pública e Privada).</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. O Conceito da Chave</h3>
        <p class="text-sm">A tua <strong>Chave Privada</strong> fica apenas no teu computador. A <strong>Chave Pública</strong> é enviada para o servidor. Quando tentas ligar, o servidor envia um desafio que só a tua chave privada consegue resolver. É impossível de hackear via força bruta.</p>
        
        <h3 class="text-xl font-bold font-headline">2. VS Code Remote-SSH</h3>
        <p class="text-sm">Esta extensão permite-te abrir uma pasta que está dentro de um servidor na nuvem como se estivesse no teu disco local. Podes usar todos os teus atalhos e plugins em hardware remoto ultra-potente.</p>

        <div class="bg-black/40 p-4 rounded-xl border font-code text-xs text-accent">
          ssh-keygen -t ed25519 -C "teu@email.com" <br/>
          # Gera a chave mais segura e rápida atualmente.
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q11"
};