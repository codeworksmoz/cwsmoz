import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t19",
  title: "Interfaces Espaciais: AR, VR e Realidade Mista",
  content: `
    <div class="space-y-8">
      <div class="bg-purple-500/10 p-6 rounded-2xl border border-purple-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-purple-400">🕶️ Design em Três Dimensões</h2>
        <p class="text-lg">Na Realidade Aumentada (AR) e Virtual (VR), a interface sai do ecrã plano e entra no espaço físico. O utilizador usa o corpo inteiro e a profundidade para interagir com o software.</p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Desafios da Engenharia Espacial:</h3>
        <ul class="space-y-4">
          <li><strong>Cansaço Físico (Gorilla Arm):</strong> Evite desenhar interfaces que exijam que o utilizador mantenha os braços levantados por muito tempo.</li>
          <li><strong>Fadiga Visual:</strong> Elementos colocados demasiado próximos dos olhos causam náusea (Motion Sickness).</li>
          <li><strong>Campo de Visão (FOV):</strong> O conteúdo crítico deve estar sempre no "doce spot" central da visão.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "hci-q19"
};