
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "py-p1",
  language: "python",
  title: "Laboratório: Decoradores e Metaprogramação",
  description: "Crie um decorador para medir o tempo de execução.",
  statement: "Complete o decorador 'timer' usando a função 'wraps' do functools para manter os metadados.",
  template: `from functools import wraps
import time

def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        # Escreva a lógica aqui
        return func(*args, **kwargs)
    return wrapper`,
  detailedExplanation: `
    <h3>🎭 O Poder dos Decoradores</h3>
    <p>Decoradores permitem modificar o comportamento de funções sem alterar o seu código fonte. Usar <code>@wraps</code> é essencial para que ferramentas de introspecção continuem a funcionar corretamente.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Usar @wraps no wrapper",
      test: "@wraps"
    }
  ]
};
