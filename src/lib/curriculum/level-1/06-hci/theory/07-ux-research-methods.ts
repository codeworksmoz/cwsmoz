import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t7",
  title: "UX Research: Métodos e Personas",
  content: `
    <div class="space-y-8">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-accent">🔬 Entendendo o Utilizador</h2>
        <p class="text-lg">Não desenhes para ti próprio. Desenha para quem vai usar o sistema. UX Research é a recolha de evidências para guiar decisões técnicas.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-4 text-sm">
        <div class="p-5 bg-card border rounded-2xl border-white/5">
          <strong class="text-primary block mb-1">Personas:</strong> Personagens fictícias baseadas em dados reais que representam os diferentes tipos de utilizadores do teu produto.
        </div>
        <div class="p-5 bg-card border rounded-2xl border-white/5">
          <strong class="text-primary block mb-1">User Journeys:</strong> O mapa visual do caminho emocional e técnico que o utilizador percorre para completar uma missão.
        </div>
      </div>
      <p class="text-sm italic">"Se queres saber se o teu site funciona, não perguntes à tua mãe; observa um estranho a usá-lo."</p>
    </div>
  `,
  quizId: "hci-q7"
};