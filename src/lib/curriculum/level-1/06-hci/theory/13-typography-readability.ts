import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t13",
  title: "Tipografia e Legibilidade: A Voz do Texto",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">🖋️ O Conforto da Leitura Digital</h2>
        <p class="text-lg leading-relaxed">A tipografia é 90% do design web. Escolher o tipo de letra e o espaçamento correto decide se o utilizador vai ler o teu conteúdo ou abandonar o site por cansaço visual.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-xl">
          <h4 class="font-bold text-accent mb-2">Serif (Serifadas)</h4>
          <p class="text-xs opacity-70">Fontes com pequenos traços (serifas). Passam tradição, seriedade e confiança. Melhores para impressão ou títulos longos.</p>
        </div>
        <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-xl">
          <h4 class="font-bold text-accent mb-2">Sans Serif (Sem Serifas)</h4>
          <p class="text-xs opacity-70">Fontes modernas, limpas e geométricas. São o padrão de elite para leitura em ecrãs digitais e interfaces de software.</p>
        </div>
      </div>
      <p class="text-sm"><strong>Engenharia de Legibilidade:</strong> Mantenha o line-height (espaço entre linhas) em pelo menos 1.5 e evite larguras de linha superiores a 80 caracteres.</p>
    </div>
  `,
  quizId: "hci-q13"
};