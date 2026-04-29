
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m6",
  title: "Grid & Subgrid Master: Alinhamento Multi-nível",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 font-headline">📐 Perfeição Geométrica com Subgrid</h2>
        <p class="text-lg">O <strong>Subgrid</strong> resolve o problema de alinhar elementos que estão dentro de diferentes pais. Permite que um elemento filho "partilhe" as linhas e colunas do grid do avô.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">O Caso de Uso Clássico</h3>
        <p>Imagina uma linha de 3 cards. Cada card tem um título e uma descrição. Se um título for maior, o card fica mais alto, mas os títulos dos cards vizinhos não se alinham. O Subgrid corrige isto.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm">
          .card-container { <br/>
          &nbsp;&nbsp;<span class="text-primary">display</span>: grid; <br/>
          &nbsp;&nbsp;<span class="text-primary">grid-template-rows</span>: repeat(3, auto); <br/>
          }<br/><br/>
          .card { <br/>
          &nbsp;&nbsp;<span class="text-primary">grid-row</span>: span 3; <br/>
          &nbsp;&nbsp;<span class="text-primary">display</span>: grid; <br/>
          &nbsp;&nbsp;<span class="text-accent">grid-template-rows</span>: <span class="text-green-400">subgrid</span>; <br/>
          }
        </div>

        <p class="text-sm text-muted-foreground italic">Nota: Com <code>subgrid</code>, os títulos de todos os cards partilharão a mesma linha do grid pai, garantindo alinhamento horizontal perfeito mesmo com conteúdos diferentes.</p>
      </div>
    </div>
  `,
  quizId: "css-mq6"
};
