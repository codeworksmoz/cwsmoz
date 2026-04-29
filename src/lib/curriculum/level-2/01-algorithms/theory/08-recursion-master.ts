
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "alg-t8",
  title: "Recursão Master: Stack Frames e Tail Call",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🔁 Pensando em Camadas</h2>
        <p class="text-lg leading-relaxed">
          Recursão é o ato de uma função se chamar a si mesma para resolver instâncias menores do mesmo problema. No Nível 2, não olhamos apenas para a lógica, mas para o <strong>custo físico</strong> na memória.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">A Call Stack (Pilha de Chamadas)</h3>
        <p class="text-sm">Cada chamada recursiva cria um novo <strong>Stack Frame</strong> na memória RAM, guardando variáveis locais e o endereço de retorno. Se a recursão for demasiado profunda, ocorre o <code>StackOverflowError</code>.</p>
        
        <h3 class="text-xl font-bold font-headline text-accent">TCO: Tail Call Optimization</h3>
        <p class="text-sm">Motores modernos (como o do Safari ou compiladores C++) conseguem otimizar recursões onde a chamada é a <strong>última coisa</strong> que a função faz. O motor reutiliza o mesmo frame, transformando a recursão num loop por baixo do capô, salvando a memória.</p>

        <div class="bg-black/40 p-4 rounded-xl border font-code text-[11px] text-green-400">
          // Recursão de Cauda (Otimizável) <br/>
          function factorial(n, acc = 1) { <br/>
          &nbsp;&nbsp;if (n === 0) return acc; <br/>
          &nbsp;&nbsp;return factorial(n - 1, acc * n); <br/>
          }
        </div>
      </div>
    </div>
  `,
  quizId: "alg-q8"
};
