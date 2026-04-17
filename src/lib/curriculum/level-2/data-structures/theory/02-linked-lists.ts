import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "ds-t-linked-lists",
    title: "Listas Ligadas (Linked Lists)",
    content: `
        <h2>Nós Conectados em uma Cadeia</h2>
        <p>Uma <strong>Lista Ligada</strong> é uma estrutura de dados linear onde os elementos não são armazenados em locais contíguos de memória. Em vez disso, cada elemento (um "nó") contém os dados e um ponteiro (ou referência) para o próximo nó na sequência.</p>
        
        <h3>Vantagens sobre Arrays:</h3>
        <ul>
            <li>A inserção e remoção de elementos no início ou no meio da lista são operações muito rápidas (O(1)), pois não requerem o deslocamento de outros elementos; apenas os ponteiros precisam ser ajustados.</li>
            <li>Tamanho dinâmico: crescem e encolhem facilmente.</li>
        </ul>

        <h3>Desvantagens:</h3>
        <ul>
            <li>O acesso a um elemento por índice é lento (O(n)), pois você precisa percorrer a lista desde o início.</li>
            <li>Consomem mais memória devido ao armazenamento dos ponteiros.</li>
        </ul>

        <h3>Tipos de Listas Ligadas:</h3>
        <ul>
            <li><strong>Singly Linked List (Lista Simplesmente Ligada):</strong> Cada nó aponta apenas para o próximo. A travessia só pode ser feita em uma direção.</li>
            <li><strong>Doubly Linked List (Lista Duplamente Ligada):</strong> Cada nó aponta para o próximo e para o anterior. Permite a travessia em ambas as direções, facilitando algumas operações de remoção.</li>
            <li><strong>Circular Linked List (Lista Circular):</strong> O ponteiro do último nó aponta de volta para o primeiro, formando um círculo.</li>
        </ul>
    `
};
