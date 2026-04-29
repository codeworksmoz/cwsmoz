import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p17-js",
  language: "javascript",
  title: "Missão: O Empacotador de Dados",
  description: "Aprenda a serializar e desserializar informações para comunicação global.",
  statement: "Converta um objeto para string JSON e depois recupere-o para a memória.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "v4cd1O4zkGw",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">📦 Serialização na Prática</h3>
      <p>Imagina que queres enviar o perfil do utilizador para o servidor. Tens de o transformar em texto!</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-primary">const</span> texto = <span class="text-accent">JSON.stringify</span>(objeto); <br/>
          <span class="text-primary">const</span> original = <span class="text-accent">JSON.parse</span>(texto);
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria o objeto <code>perfil</code> com <code>nome: "Edson"</code> e <code>pontos: 100</code>.
        <br/>2. Cria a variável <code>jsonString</code> convertendo o objeto <code>perfil</code> via <code>JSON.stringify</code>.
        <br/>3. Mostra a <code>jsonString</code> no terminal.
        <br/>4. Cria a variável <code>perfilRecuperado</code> usando <code>JSON.parse(jsonString)</code>.
        <br/>5. Mostra o <code>perfilRecuperado.nome</code> no terminal.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Usar JSON.stringify()", test: "JSON.stringify(perfil)" },
    { id: "obj2", description: "Usar JSON.parse()", test: "JSON.parse(jsonString)" },
    { id: "obj3", description: "Exibir o nome recuperado", test: "perfilRecuperado.nome" }
  ]
};