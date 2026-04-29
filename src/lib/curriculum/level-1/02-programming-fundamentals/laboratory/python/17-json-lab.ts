import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p17-py",
  language: "python",
  title: "Missão: Serialização Pythonic",
  description: "Trabalhe com o formato JSON usando o módulo nativo do Python.",
  statement: "Converta um dicionário em string JSON e imprima o resultado.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "v4cd1O4zkGw",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🐍 JSON com o módulo 'json'</h3>
      <p>Em Python, precisamos de importar o módulo para lidar com as conversões de tipos.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-primary">import</span> json <br/>
          texto = json.<span class="text-accent">dumps</span>(dicionario) <br/>
          original = json.<span class="text-accent">loads</span>(texto)
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Importa o módulo <code>json</code>.
        <br/>2. Cria o dicionário <code>perfil</code> com "nome": "Edson" e "pontos": 100.
        <br/>3. Cria <code>json_str</code> usando <code>json.dumps(perfil)</code>.
        <br/>4. Imprime <code>json_str</code> no terminal.
        <br/>5. Cria <code>recuperado</code> usando <code>json.loads(json_str)</code> e imprime o nome.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Importar o módulo json", test: "import json" },
    { id: "obj2", description: "Usar json.dumps()", test: "json.dumps(" },
    { id: "obj3", description: "Usar json.loads()", test: "json.loads(" }
  ]
};