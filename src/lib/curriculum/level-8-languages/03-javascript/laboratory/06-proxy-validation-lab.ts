import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p6",
  language: "html",
  title: "Projeto Master: Proxy & Reflect Data Layer",
  description: "Crie uma camada de proteção automática para o seu estado de dados.",
  statement: "Crie um Proxy para o objeto 'userData' que impeça a definição de idades negativas.",
  isProjectPart: true,
  template: `const userData = { age: 25 };

const handler = {
    set(target, prop, value) {
        if (prop === 'age' && value < 0) {
            throw new Error('Idade inválida');
        }
        // Use Reflect para completar a operação
        return true;
    }
};

// Crie o proxy aqui`,
  detailedExplanation: `
    <h3>🎭 Metaprogramação Proativa</h3>
    <p>O <code>Proxy</code> permite intercetar operações básicas (como escrita e leitura) num objeto. É a base tecnológica da reatividade do Vue.js e de sistemas de validação de elite.</p>
  `,
  objectives: [
    {
      id: "proxy_init",
      description: "Crie o proxy usando new Proxy(userData, handler).",
      test: "new Proxy"
    },
    {
      id: "reflect_set",
      description: "Utilize Reflect.set() dentro do handler para manter a semântica correta.",
      hint: "Reflect.set(target, prop, value)",
      test: "Reflect.set"
    }
  ]
};
