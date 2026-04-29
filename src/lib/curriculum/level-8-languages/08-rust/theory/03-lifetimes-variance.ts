
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "rs-m3",
  title: "Lifetimes e Variância",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">⏳ Tempo de Vida de Referências</h2>
      <p>Lifetimes são anotações que dizem ao compilador por quanto tempo uma referência é válida em relação a outras.</p>
      <div class="bg-card p-4 rounded-xl border font-code text-primary">
        fn longest<'a>(x: &'a str, y: &'a str) -> &'a str
      </div>
    </div>
  `,
  quizId: "rs-mq3"
};
