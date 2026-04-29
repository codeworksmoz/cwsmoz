import type { PracticeExercise } from '../../types';

export const exercise: PracticeExercise = {
  id: "cs-p2",
  language: "concept",
  title: "Laboratório: Portas Lógicas",
  description: "Pratique a lógica de decisão e operadores booleanos.",
  statement: "Missão: No editor à direita, escreve apenas a palavra False (sem aspas) logo a seguir ao sinal de igual (=) na linha 2.",
  template: `// RESULTADO DA MISSÃO:
// (Verdadeiro AND Falso) = `,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🧩 Regra da Porta AND (E)</h3>
      <p>Imagina que tens uma porta com duas fechaduras. Tu só consegues entrar se tiveres a <b>Chave A</b> (Verdadeiro) <b>E</b> a <b>Chave B</b> (Verdadeiro).</p>
      
      <div class="bg-muted p-4 rounded-xl border border-primary/20">
        <p class="text-sm font-bold mb-2">Tabela da Verdade (Operador AND):</p>
        <ul class="space-y-1 text-xs font-code">
          <li>V AND V = <span class="text-green-500">True</span> (Entras)</li>
          <li>V AND F = <span class="text-red-500">False</span> (Ficas fora)</li>
          <li>F AND V = <span class="text-red-500">False</span> (Ficas fora)</li>
          <li>F AND F = <span class="text-red-500">False</span> (Ficas fora)</li>
        </ul>
      </div>

      <p class="text-xs">
        No teu exercício, tens <b>Verdadeiro AND Falso</b>. Como uma das chaves é "Falsa" (não a tens), a porta não abre. 
        <br/><br/>
        <b>O que fazer:</b> Digita exatamente <code class="bg-black/40 px-2 py-0.5 rounded text-yellow-500 font-bold">False</code> no editor para completar a frase e clica em <b>EXECUTAR</b>.
      </p>
    </div>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Escrever o resultado 'False' no local indicado",
      hint: "O resultado de um AND com um valor falso é sempre False.",
      test: "False"
    }
  ]
};
