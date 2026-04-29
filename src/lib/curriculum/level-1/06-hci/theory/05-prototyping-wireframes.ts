import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t5",
  title: "Wireframes e Prototipagem: O Esqueleto da UI",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400">✏️ Falhe Rápido, Falhe Barato</h2>
        <p class="text-lg">Desenhar o layout em código é caro e demorado. Prototipagem permite validar ideias antes de escrever uma única linha de código.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-lg">
          <h4 class="font-bold text-accent mb-2">Lo-Fi (Baixa Fidelidade)</h4>
          <p class="text-xs text-muted-foreground leading-relaxed">Foca na estrutura, arquitetura de informação e fluxo. Esboços em papel ou wireframes digitais a preto e branco.</p>
        </div>
        <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-lg">
          <h4 class="font-bold text-accent mb-2">Hi-Fi (Alta Fidelidade)</h4>
          <p class="text-xs text-muted-foreground leading-relaxed">Foca no visual final (Look & Feel). Inclui cores, tipografia real, imagens e interações clicáveis simuladas.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "hci-q5"
};