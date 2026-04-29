
import type { PracticeExercise } from '../../types';

export const exercise: PracticeExercise = {
  id: "git-p3",
  language: "bash",
  title: "Laboratório: Sincronização Remota",
  description: "Envia o teu código para a nuvem.",
  statement: "Envia as tuas alterações locais para o servidor remoto (origin) no branch 'main'.",
  template: "# Digita o comando para enviar\n",
  detailedExplanation: `
    <h3>🚀 Subindo para a Nuvem</h3>
    <p>O comando <code>git push</code> leva os teus commits locais para o repositório remoto.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Realizar o push para o origin",
      test: "git push origin main"
    }
  ]
};
