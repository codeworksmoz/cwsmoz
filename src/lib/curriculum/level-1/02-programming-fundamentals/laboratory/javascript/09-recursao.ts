import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p9-js",
  language: "javascript",
  title: "Missão: O Contador Regressivo Recursivo",
  description: "Construa o seu primeiro algoritmo recursivo do zero.",
  statement: "Crie uma função que faça uma contagem decrescente até zero usando recursão.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "8ME9u065vD4",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔄 Pensando em Camadas</h3>
      <p>O objetivo é criar uma função que se chama a si própria com um número menor a cada passo.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-primary">function</span> contar(n) { <br/>
          &nbsp;&nbsp;<span class="text-primary">if</span> (n === 0) <span class="text-primary">return</span>; <span class="text-muted-foreground">// Caso Base</span><br/>
          &nbsp;&nbsp;<span class="text-primary">console.log</span>(n); <br/>
          &nbsp;&nbsp;contar(n - 1); <span class="text-muted-foreground">// Caso Recursivo</span><br/>
          }
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Define a função <code>contagemRegressiva(n)</code>.
        <br/>2. Adiciona o <strong>Caso Base</strong>: se <code>n</code> for igual a 0, usa <code>return</code> para parar.
        <br/>3. Mostra o valor de <code>n</code> no terminal com <code>console.log(n)</code>.
        <br/>4. Faz a <strong>Chamada Recursiva</strong> passando <code>n - 1</code>.
        <br/>5. Fora da função, inicia a missão com <code>contagemRegressiva(3)</code>.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Definir caso base if(n === 0)", test: "if (n === 0)" },
    { id: "obj2", description: "Implementar chamada recursiva n-1", test: "contagemRegressiva(n - 1)" },
    { id: "obj3", description: "Iniciar com contagemRegressiva(3)", test: "contagemRegressiva(3)" }
  ]
};
