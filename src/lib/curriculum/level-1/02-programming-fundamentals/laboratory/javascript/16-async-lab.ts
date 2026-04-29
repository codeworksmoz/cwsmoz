import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p16-js",
  language: "javascript",
  title: "Missão: Simulador de Rede Resiliente",
  description: "Aprenda a lidar com o tempo e a espera no motor do JavaScript.",
  statement: "Crie uma função assíncrona que aguarde uma resposta simulada e mostre o resultado no terminal.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "8aGhZQkoFbQ",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">⏳ Engenharia do Tempo</h3>
      <p>Nesta missão, vais simular um pedido à API da Codworks Moz. O objetivo é usar <code>async/await</code> para lidar com a espera sem bloquear o terminal.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-primary">async</span> function minhaMissao() { <br/>
          &nbsp;&nbsp;console.log("Iniciando..."); <br/>
          &nbsp;&nbsp;<span class="text-primary">await</span> aguardar(1000); <br/>
          &nbsp;&nbsp;console.log("Concluído!"); <br/>
          }
        </p>
      </div>

      <p class="text-xs leading-relaxed">
        <strong>Instruções de Construção (JS):</strong>
        <br/>1. Cria a função assíncrona <code>baixarDados</code>.
        <br/>2. Dentro dela, usa <code>console.log("A carregar...")</code>.
        <br/>3. Usa o comando <code>await Promise.resolve()</code> para simular a espera da rede.
        <br/>4. Após a espera, exibe <code>console.log("Dados recebidos!")</code>.
        <br/>5. Não esqueças de <strong>chamar</strong> a função <code>baixarDados()</code> no final do código.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Definir function baixarDados com a keyword async", test: "async function baixarDados" },
    { id: "obj2", description: "Utilizar o await para simular a rede", test: "await" },
    { id: "obj3", description: "Chamar a função baixarDados()", test: "baixarDados()" }
  ]
};
