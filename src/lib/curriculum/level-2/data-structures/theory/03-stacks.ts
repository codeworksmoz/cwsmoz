import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "ds-t-stacks",
    title: "Pilhas (Stacks)",
    content: `
        <h2>Último a Entrar, Primeiro a Sair (LIFO)</h2>
        <p>Uma <strong>Pilha (Stack)</strong> é uma estrutura de dados linear que segue o princípio LIFO (Last-In, First-Out). Pense em uma pilha de pratos: o último prato que você coloca no topo é o primeiro que você remove.</p>
        
        <h3>Operações Principais:</h3>
        <ul>
            <li><strong>push(item):</strong> Adiciona um item ao topo da pilha.</li>
            <li><strong>pop():</strong> Remove e retorna o item do topo da pilha.</li>
            <li><strong>peek() (ou top()):</strong> Retorna o item do topo da pilha sem removê-lo.</li>
            <li><strong>isEmpty():</strong> Verifica se a pilha está vazia.</li>
        </ul>
        <p>Todas essas operações têm uma complexidade de tempo de O(1).</p>
        
        <h3>Implementação:</h3>
        <p>Pilhas podem ser facilmente implementadas usando um array dinâmico ou uma lista ligada.</p>
        
        <h3>Aplicações Comuns:</h3>
        <ul>
            <li><strong>Gerenciamento da Pilha de Chamadas (Call Stack):</strong> Para controlar a execução de funções em programação.</li>
            <li><strong>Funcionalidade de "Desfazer" (Undo/Redo):</strong> Cada ação do usuário é adicionada a uma pilha. "Desfazer" é simplesmente um pop na pilha.</li>
            <li><strong>Validação de Parênteses/Tags:</strong> Verificar se expressões como <code>{([])}</code> estão balanceadas.</li>
            <li><strong>Avaliação de Expressões (Pós-fixa/Infixa):</strong> Usadas para analisar e calcular expressões matemáticas.</li>
        </ul>
    `
};
