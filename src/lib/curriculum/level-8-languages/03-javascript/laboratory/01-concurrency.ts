
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p1",
  language: "javascript",
  title: "Laboratório Master: Promessas e Sinais",
  description: "Controle fluxos assíncronos complexos.",
  statement: "Utilize o 'AbortController' para cancelar um fetch de dados após 1 segundo.",
  template: `const controller = new AbortController();
const signal = controller.signal;

setTimeout(() => , 1000); // Cancela aqui

fetch('https://api.exemplo.com/dados', { signal })
  .catch(err => console.log('Cancelado!'));`,
  detailedExplanation: `
    <h3>🛑 Gestão de Recursos</h3>
    <p>O <code>AbortController</code> é a forma moderna de evitar <em>memory leaks</em> e poupar banda do utilizador, permitindo cancelar operações que já não são necessárias.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Chamar controller.abort()",
      test: "controller.abort()"
    }
  ]
};
