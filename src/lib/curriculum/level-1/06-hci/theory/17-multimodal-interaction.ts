import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t17",
  title: "Interação Multi-modal: Além do Teclado e Mouse",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🖐️ Voz, Toque e Visão em Sincronia</h2>
        <p class="text-lg leading-relaxed">A interação multi-modal ocorre quando o utilizador utiliza mais de um canal de entrada em simultâneo (ex: falar enquanto aponta no ecrã). Isto aumenta radicalmente a inclusão e a eficiência em contextos complexos (como conduzir ou cirurgias).</p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Canais de Interação Digital:</h3>
        <ul class="space-y-2">
          <li><strong>Auditivo:</strong> Comandos de voz, feedback sonoro e narração.</li>
          <li><strong>Visual:</strong> Gráficos, texto, ícones e luzes LED de estado.</li>
          <li><strong>Háptico (Haptics):</strong> Vibrações táteis que simulam texturas ou cliques reais.</li>
          <li><strong>Gestual:</strong> Movimentos de mãos e corpo capturados por câmaras ou sensores infravermelhos.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "hci-q17"
};