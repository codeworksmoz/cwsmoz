import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'ds-js-queue',
    title: 'Implementando uma Fila (Queue)',
    statement: 'Implemente uma classe `Fila` em JavaScript com os métodos `enqueue`, `dequeue`, `front`, e `isEmpty`.',
    template: `class Fila {
  constructor() {
    this.items = [];
  }

  // Adiciona um elemento ao final da fila
  enqueue(elemento) {
    // Seu código aqui
  }

  // Remove e retorna o elemento do início da fila
  dequeue() {
    // Seu código aqui
  }

  // Retorna o elemento do início da fila sem remover
  front() {
    // Seu código aqui
  }

  // Retorna true se a fila estiver vazia, false caso contrário
  isEmpty() {
    // Seu código aqui
  }
}
`,
    youtubeVideoId: 'RBSGKlAcrPw',
    detailedExplanation: `
        <h2>Construindo uma Fila (FIFO)</h2>
        <p>Uma Fila é uma estrutura de dados que segue o princípio FIFO (First-In, First-Out - Primeiro a Entrar, Primeiro a Sair). Podemos usar um Array em JavaScript para implementá-la.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>enqueue(elemento):</strong> Use o método <code>.push()</code> do array para adicionar um elemento ao final da fila.</li>
            <li><strong>dequeue():</strong> Use o método <code>.shift()</code> do array para remover e retornar o primeiro elemento.</li>
            <li><strong>front():</strong> Acesse o primeiro elemento do array (<code>this.items[0]</code>) sem removê-lo.</li>
            <li><strong>isEmpty():</strong> Verifique se o comprimento do array é 0.</li>
        </ol>
    `,
    tests: [
        {
            description: "enqueue deve adicionar um elemento ao final",
            code: `const f = new Fila(); f.enqueue(10); f.enqueue(20); return f.front() === 10;`
        },
        {
            description: "dequeue deve remover e retornar o elemento do início",
            code: `const f = new Fila(); f.enqueue(10); f.enqueue(20); const r = f.dequeue(); return r === 10 && f.front() === 20;`
        },
        {
            description: "isEmpty deve retornar false para uma fila com itens",
            code: `const f = new Fila(); f.enqueue(1); return !f.isEmpty();`
        }
    ]
};
