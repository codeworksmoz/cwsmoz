import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t3",
  title: "Acessibilidade (A11y) e Padrões WCAG",
  content: `
    <div class="space-y-6">
      <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-green-400">♿ Web para Todos</h2>
        <p class="text-lg">Acessibilidade garante que pessoas com deficiências visuais, motoras ou cognitivas possam usar o teu software. As <strong>WCAG (Web Content Accessibility Guidelines)</strong> são o guia mundial.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">O Princípio POUR</h3>
        <ul class="space-y-3">
          <li><strong>P - Percebível:</strong> A informação deve ser apresentada de forma que todos consigam perceber (ex: alt text em imagens).</li>
          <li><strong>O - Operável:</strong> A interface deve ser navegável (ex: apenas pelo teclado).</li>
          <li><strong>U - Compreensível:</strong> O utilizador deve entender o conteúdo e a operação do sistema.</li>
          <li><strong>R - Robusto:</strong> O código deve funcionar em diferentes browsers e tecnologias assistivas.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "hci-q3"
};