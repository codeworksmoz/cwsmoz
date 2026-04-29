import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m21",
  title: "Advanced Color Spaces: OKLCH e o Futuro Visual",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🌈 Cores Perceptualmente Uniformes</h2>
        <p class="text-lg">O RGB foi feito para tubos de raios catódicos. O <strong>OKLCH</strong> foi feito para o olho humano e monitores HDR modernos. Ele resolve o problema de o azul parecer mais escuro que o amarelo mesmo com a mesma luminosidade.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">A Anatomia do OKLCH</h3>
        <ul class="space-y-4">
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong>L (Lightness):</strong> 0% a 100%. Luminosidade como o teu olho a vê.
          </li>
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong>C (Chroma):</strong> Saturação. Cores ultra-vibrantes (P3 Gamut).
          </li>
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong>H (Hue):</strong> Matiz em graus (0-360).
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline text-accent">Color-mix(): O Laboratório Químico</h3>
        <p>Misture cores de forma dinâmica no CSS sem precisar de preprocessadores.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm">
          <span class="text-primary">background</span>: <span class="text-accent">color-mix</span>(in oklab, blue, white 20%);
        </div>
        
        <div class="text-center py-8">
          <p class="text-primary font-bold text-2xl animate-pulse">🎓 Parabéns! Completaste a base de CSS Master.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "css-mq21"
};
