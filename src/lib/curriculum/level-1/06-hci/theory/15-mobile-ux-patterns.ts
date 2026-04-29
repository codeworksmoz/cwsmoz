import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t15",
  title: "Padrões Mobile UX e a Zona do Polegar",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📱 Ergonomia em Primeiro Lugar</h2>
        <p class="text-lg leading-relaxed">Em dispositivos móveis, a forma como seguramos o telemóvel dita o design. A "Thumb Zone" (Zona do Polegar) dita onde os botões devem estar para serem confortáveis.</p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Regras de Ouro do Design Mobile:</h3>
        <ul class="space-y-3">
          <li><strong>Alvos de Toque (Touch Targets):</strong> Mínimo de 44x44 pixels para evitar erros acidentais.</li>
          <li><strong>Gestos Intuitivos:</strong> Swipe para navegar, Pinch para zoom. Devem ser naturais e acompanhados de feedback.</li>
          <li><strong>Navegação Inferior:</strong> Coloque menus e ações críticas na parte inferior do ecrã, ao alcance fácil do polegar.</li>
          <li><strong>Hierarquia de Scroll:</strong> O conteúdo mais importante deve estar "Acima da Dobra" (Above the Fold).</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "hci-q15"
};