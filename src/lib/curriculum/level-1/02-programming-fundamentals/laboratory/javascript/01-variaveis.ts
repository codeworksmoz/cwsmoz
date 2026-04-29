import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p1-js",
  language: "javascript",
  title: "Missão: Criando a Identidade do Sistema",
  description: "Aprenda a reservar espaço na memória para guardar informações.",
  statement: "Declare o seu nome e a sua chave de acesso no sistema.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "8ME9u065vD4",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">📦 Caixas de Memória (Variáveis)</h3>
      <p>Imagina que o computador é um armazém cheio de caixas vazias. Para guardar algo, precisas de dar um nome à caixa e colocar o valor lá dentro.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-primary">const</span> chave = "CWM123"; <br/>
          <span class="text-primary">let</span> nome = "Teu Nome"; <br/>
          <span class="text-primary">console.log</span>(nome);
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Usa <code>const</code> para criar a API_KEY com "CWM123".
        <br/>2. Usa <code>let</code> para criar a variável nome com o teu nome.
        <br/>3. Usa <code>console.log</code> para mostrar o nome no ecrã.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Criar const API_KEY = 'CWM123'", test: "const API_KEY = \"CWM123\"" },
    { id: "obj2", description: "Criar let nome = '...'", test: "let nome =" },
    { id: "obj3", description: "Mostrar no terminal", test: "console.log(nome)" }
  ]
};