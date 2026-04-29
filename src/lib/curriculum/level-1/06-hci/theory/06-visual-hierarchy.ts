import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t6",
  title: "UI Design: Hierarquia Visual e Atenção",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📏 Guiando o Olhar</h2>
        <p class="text-lg">Hierarquia visual é a organização estratégica de elementos para indicar a sua importância. O objetivo é que o utilizador veja o que é mais importante primeiro.</p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Princípios da Hierarquia:</h3>
        <ul class="space-y-4">
          <li><strong>Tamanho:</strong> Elementos maiores atraem o foco imediato.</li>
          <li><strong>Cor e Contraste:</strong> Cores vibrantes ou alto contraste criam pontos de interesse.</li>
          <li><strong>Espaçamento (White Space):</strong> Dá "respiração" e separa ou agrupa grupos lógicos.</li>
          <li><strong>Tipografia:</strong> Diferentes pesos (Bold vs Thin) e tamanhos criam níveis de leitura.</li>
          <li><strong>Z-Pattern e F-Pattern:</strong> Como o olho humano percorre ecrãs web e mobile.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "hci-q6"
};