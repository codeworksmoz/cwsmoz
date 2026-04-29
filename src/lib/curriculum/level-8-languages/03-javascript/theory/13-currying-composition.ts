
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m13",
  title: "Currying e Composição de Funções",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/5 p-6 rounded-2xl border border-indigo-500/10">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400">λ Programação Funcional de Elite</h2>
        <p class="text-lg">Técnicas avançadas de manipulação de funções permitem criar lógica altamente reutilizável e matematicamente provável.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">1. Currying</h3>
        <p>É o processo de transformar uma função que recebe múltiplos argumentos numa sequência de funções que recebem um argumento de cada vez.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-accent">
          const <span class="text-primary">soma</span> = a => b => a + b;<br/>
          const <span class="text-primary">soma5</span> = soma(5);<br/>
          console.log(soma5(10)); // 15
        </div>

        <h3 class="text-xl font-bold font-headline">2. Composição (Pipe)</h3>
        <p>Combinar múltiplas funções pequenas para criar uma função complexa. O resultado de uma é a entrada da próxima.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
          const <span class="text-primary">compose</span> = (f, g) => x => f(g(x));
        </div>
      </div>
    </div>
  `,
  quizId: "js-mq13"
};
