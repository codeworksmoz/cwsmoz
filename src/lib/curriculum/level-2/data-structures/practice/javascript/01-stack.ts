import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'ds-js-stack',
    title: 'Implementando uma Pilha (Stack)',
    statement: 'Implemente uma classe `Pilha` em JavaScript com os métodos `push`, `pop`, `peek`, e `isEmpty`.',
    template: `class Pilha {
  constructor() {
    this.items = [];
  }

  // Adiciona um elemento ao topo da pilha
  push(elemento) {
    // Seu código aqui
  }

  // Remove e retorna o elemento do topo da pilha
  pop() {
    // Seu código aqui
  }

  // Retorna o elemento do topo da pilha sem remover
  peek() {
    // Seu código aqui
  }

  // Retorna true se a pilha estiver vazia, false caso contrário
  isEmpty() {
    // Seu código aqui
  }
}
`,
    youtubeVideoId: 'RBSGKlAcrPw',
    detailedExplanation: `
        <h2>Construindo uma Pilha (LIFO)</h2>
        <p>Uma Pilha é uma estrutura de dados que segue o princípio LIFO (Last-In, First-Out - Último a Entrar, Primeiro a Sair). A maneira mais fácil de implementar uma pilha em JavaScript é usando um Array.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>push(elemento):</strong> Use o método <code>.push()</code> do array para adicionar o elemento ao final (que representará o topo da nossa pilha).</li>
            <li><strong>pop():</strong> Use o método <code>.pop()</code> do array para remover e retornar o último elemento.</li>
            <li><strong>peek():</strong> Acesse o último elemento do array (<code>this.items[this.items.length - 1]</code>) sem removê-lo.</li>
            <li><strong>isEmpty():</strong> Verifique se o comprimento do array é 0.</li>
        </ol>
    `,
    tests: [
        {
            description: "push deve adicionar um elemento ao topo",
            code: `const p = new Pilha(); p.push(10); return p.peek() === 10;`
        },
        {
            description: "pop deve remover e retornar o elemento do topo",
            code: `const p = new Pilha(); p.push(10); p.push(20); const r = p.pop(); return r === 20 && p.peek() === 10;`
        },
        {
            description: "isEmpty deve retornar true para uma pilha vazia",
            code: `const p = new Pilha(); return p.isEmpty();`
        }
    ]
};
