
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p1-py",
  language: "python",
  title: "Missão: Identidade Pythonic",
  description: "Aprenda a declarar dados de forma simples e direta.",
  statement: "Declare as variáveis do sistema e imprima o resultado.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "8ME9u065vD4",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🐍 Variáveis em Python</h3>
      <p>Em Python, não precisas de palavras especiais como 'let'. Basta escrever o nome da variável e o valor.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          chave = "CWM123" <br/>
          nome = "Teu Nome" <br/>
          print(nome)
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria a variável <code>api_key</code> com o valor "CWM123".
        <br/>2. Cria a variável <code>nome</code> com o teu nome.
        <br/>3. Usa a função <code>print</code> para mostrar o nome no terminal.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Definir api_key = 'CWM123'", test: "api_key = \"CWM123\"" },
    { id: "obj2", description: "Definir nome", test: "nome =" },
    { id: "obj3", description: "Usar print(nome)", test: "print(nome)" }
  ]
};
