import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-master-t1",
  title: "Seletores Avançados e Especificidade",
  content: `
    <div class="space-y-6">
      <h2 class="text-3xl font-bold">🎯 Domínio de Seletores</h2>
      <p>Aprender a selecionar os elementos certos é a base de um CSS limpo e profissional.</p>
      <div class="bg-muted p-4 rounded-lg">
        <h4 class="font-bold mb-2">Hierarquia de Especificidade:</h4>
        <ol class="list-decimal ml-6 space-y-2">
          <li>Inline Styles (1000 pts)</li>
          <li>IDs (100 pts)</li>
          <li>Classes, Atributos e Pseudo-classes (10 pts)</li>
          <li>Elementos e Pseudo-elementos (1 pt)</li>
        </ol>
      </div>
    </div>
  `,
  quizId: "css-master-t1-quiz"
};