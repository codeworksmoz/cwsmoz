
import type { PracticeExercise } from '../../types';

export const exercise: PracticeExercise = {
  id: "git-p2",
  language: "bash",
  title: "Laboratório: Trabalhando com Ramos",
  description: "Cria e organiza ramificações de código.",
  statement: "Cria um novo branch chamado 'feature-login' e muda para ele.",
  template: "# Digita os comandos abaixo\n",
  detailedExplanation: `
    <h3>🌿 Ramificando o Projeto</h3>
    <p>Branches permitem que trabalhes em novas funcionalidades sem estragar o código que já funciona na 'main'.</p>
    <p>O comando <code>git checkout -b nome-do-branch</code> faz os dois passos de uma vez.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Criar e mudar de branch",
      test: "git checkout -b feature-login"
    }
  ]
};
