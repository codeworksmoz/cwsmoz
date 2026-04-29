import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t10",
  title: "Avaliação de Interfaces e Testes de Usabilidade",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🧪 Ciência, não Opinião</h2>
        <p class="text-lg leading-relaxed">Testar a usabilidade é observar pessoas reais a tentar usar o teu produto. O objetivo é identificar onde elas ficam confusas e corrigir a interface baseando-se em factos.</p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Principais Métodos de Avaliação:</h3>
        <ul class="space-y-4">
          <li><strong>Avaliação Heurística:</strong> Um especialista verifica se o site cumpre as 10 regras de Nielsen.</li>
          <li><strong>Think Aloud (Pensar em voz alta):</strong> O utilizador descreve o que está a pensar enquanto navega.</li>
          <li><strong>A/B Testing:</strong> Duas versões do design são entregues a grupos diferentes para medir qual atinge melhor o objetivo.</li>
          <li><strong>Eye Tracking:</strong> Monitorização térmica de onde o utilizador fixa o olhar.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "hci-q10"
};