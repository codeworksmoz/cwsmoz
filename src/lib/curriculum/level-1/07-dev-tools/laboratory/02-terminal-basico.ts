
import type { PracticeExercise } from '../../types';

export const exercise: PracticeExercise = {
  id: "dt-p2",
  language: "tool",
  title: "Laboratório: Navegação via Terminal",
  description: "Usa a linha de comandos para gerir pastas.",
  statement: "Qual comando cria uma nova pasta? Escreva 'mkdir'.",
  template: "let comando = '';",
  detailedExplanation: `
    <h3>🐚 A Linha de Comandos</h3>
    <p>O terminal é o local onde os profissionais executam servidores, gerem dependências e controlam o sistema operativo.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Saber o comando de criação de pastas",
      test: "comando = 'mkdir'"
    }
  ]
};
