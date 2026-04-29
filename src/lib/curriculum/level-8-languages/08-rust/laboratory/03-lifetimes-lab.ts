import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "rs-p3",
  language: "rust",
  title: "Projeto Master: Lifetime Annotations",
  description: "Garanta a validade das referências no motor.",
  statement: "Crie uma função 'longest_key' que receba duas referências a strings e retorne a mais longa, usando anotações de lifetime explicitamente.",
  isProjectPart: true,
  template: `fn longest_key<'a>(x: &'a str, y: &'a str) -> &'a str {
    // Implemente a lógica aqui
    x
}`,
  detailedExplanation: `
    <h3>⏳ Tempo de Vida</h3>
    <p>Lifetimes garantem que a referência retornada não viva mais tempo do que os dados originais no motor. Isso evita o erro clássico de "ponteiro pendente" (dangling pointer).</p>
  `,
  objectives: [
    {
      id: "lifetime_syntax",
      description: "Utilize a anotação <'a> para relacionar os tempos de vida.",
      test: "<'a>"
    },
    {
      id: "logic",
      description: "Compare o comprimento das strings.",
      test: "if x.len() > y.len()"
    }
  ]
};