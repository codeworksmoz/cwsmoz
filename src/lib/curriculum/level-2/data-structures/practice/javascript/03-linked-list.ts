import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'ds-js-linked-list',
    title: 'Implementando uma Lista Ligada',
    statement: 'Implemente uma classe `ListaLigada` com um nó e métodos para adicionar um elemento ao final.',
    template: `class No {
  constructor(elemento) {
    this.elemento = elemento;
    this.proximo = null;
  }
}

class ListaLigada {
  constructor() {
    this.head = null; // cabeça da lista
    this.tamanho = 0;
  }

  // Adiciona um novo nó ao final da lista
  add(elemento) {
    const no = new No(elemento);
    
    // Se a lista estiver vazia, o novo nó é a cabeça
    if (this.head === null) {
      this.head = no;
    } else {
      // Caso contrário, percorra a lista até o fim
      // e adicione o novo nó lá.
      // SEU CÓDIGO AQUI
    }
    this.tamanho++;
  }
}
`,
    youtubeVideoId: 'RBSGKlAcrPw',
    detailedExplanation: `
        <h2>Construindo uma Lista Ligada Simples</h2>
        <p>Uma Lista Ligada é composta por nós, onde cada nó contém um valor e uma referência (ponteiro) para o próximo nó. O método <code>add</code> precisa percorrer a lista até encontrar o último nó para poder adicionar o novo.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li>Crie uma variável, digamos <code>atual</code>, e inicialize-a com <code>this.head</code>.</li>
            <li>Use um loop <code>while</code> que continue enquanto <code>atual.proximo</code> não for nulo. Dentro do loop, avance para o próximo nó: <code>atual = atual.proximo;</code>.</li>
            <li>Quando o loop terminar, <code>atual</code> será o último nó da lista.</li>
            <li>Atribua o novo nó à propriedade <code>proximo</code> do último nó: <code>atual.proximo = no;</code>.</li>
        </ol>
    `
};
