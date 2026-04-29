import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t18",
  title: "VUI: Interfaces de Voz e Design Conversacional",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">🗣️ Falando com o Software</h2>
        <p class="text-lg leading-relaxed">VUI (Voice User Interface) foca na interação falada. Como não existe apoio visual, o design deve ser focado na carga cognitiva e na memória de curto prazo.</p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Princípios de Design de Voz:</h3>
        <ul class="space-y-3">
          <li><strong>Cooperatividade:</strong> O sistema deve dar respostas diretas, curtas e úteis.</li>
          <li><strong>Confirmação de Ação:</strong> Sempre confirme se entendeu o comando crítico (ex: "Ok, a desligar o alarme").</li>
          <li><strong>Evite Listas Longas:</strong> Humanos têm dificuldade em memorizar mais de 3 opções faladas seguidas.</li>
          <li><strong>Contexto:</strong> O sistema deve lembrar-se do que foi dito na frase anterior (diálogo).</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "hci-q18"
};