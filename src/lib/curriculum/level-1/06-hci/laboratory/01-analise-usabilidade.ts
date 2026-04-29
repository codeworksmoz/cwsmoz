
import type { PracticeExercise } from '../../types';

export const exercise: PracticeExercise = {
  id: "hci-p1",
  language: "concept",
  title: "Laboratório: Heurísticas de Nielsen",
  description: "Avalia interfaces com base em regras de ouro.",
  statement: "Qual heurística foca em permitir que o utilizador saia de ações por engano? Escreva 'Controlo'.",
  template: "let heuristica = '';",
  detailedExplanation: `
    <h3>📐 Controlo e Liberdade do Utilizador</h3>
    <p>Os utilizadores muitas vezes escolhem funções do sistema por engano e precisam de uma "saída de emergência" claramente marcada.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Identificar a heurística correta",
      test: "heuristica = 'Controlo'"
    }
  ]
};
