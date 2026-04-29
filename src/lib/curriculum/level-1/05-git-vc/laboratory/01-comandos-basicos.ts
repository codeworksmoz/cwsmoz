
import type { PracticeExercise } from '../../types';

export const exercise: PracticeExercise = {
  id: "git-p1",
  language: "bash",
  title: "Laboratório: O Teu Primeiro Commit",
  description: "Aprende o fluxo básico: add e commit.",
  statement: "Adiciona todos os ficheiros à área de estágio e faz um commit com a mensagem 'Primeiro commit'.",
  template: "# Digita os comandos abaixo\n",
  detailedExplanation: `
    <h3>📸 Capturando o Estado do Código</h3>
    <p>O fluxo de trabalho do Git envolve dois passos principais:</p>
    <ol class="list-decimal ml-6">
      <li><code>git add .</code> - Prepara as alterações.</li>
      <li><code>git commit -m "mensagem"</code> - Grava as alterações permanentemente.</li>
    </ol>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Adicionar ficheiros ao staging",
      test: "git add"
    },
    {
      id: "obj2",
      description: "Realizar o commit",
      test: "git commit -m"
    }
  ]
};
