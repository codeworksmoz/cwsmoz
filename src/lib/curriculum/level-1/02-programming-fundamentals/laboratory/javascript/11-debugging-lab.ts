import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p11-js",
  language: "javascript",
  title: "Missão: O Detetive de Código",
  description: "Aprenda a utilizar o terminal para diagnosticar e validar funções.",
  statement: "Escreva uma função que simule um teste unitário básico para validar uma soma.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "8ME9u065vD4",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔍 Debugging e Asserção</h3>
      <p>Um teste básico compara o resultado que a tua função deu com o resultado que tu esperavas. Se forem diferentes, encontraste um bug!</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-primary">function</span> testar(valor, esperado) { <br/>
          &nbsp;&nbsp;<span class="text-primary">console.log</span>(valor === esperado ? "PASSOU" : "FALHOU"); <br/>
          }
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria uma função <code>soma(a, b)</code> que retorna a soma dos dois.
        <br/>2. Cria uma variável <code>resultado</code> chamando <code>soma(10, 5)</code>.
        <br/>3. Usa o <code>console.log</code> para verificar se <code>resultado === 15</code>.
        <br/>4. O terminal deve mostrar "true" para validar a missão.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Definir função soma(a, b)", test: "function soma" },
    { id: "obj2", description: "Executar a soma de 10 e 5", test: "soma(10, 5)" },
    { id: "obj3", description: "Validar o resultado com console.log", test: "=== 15" }
  ]
};