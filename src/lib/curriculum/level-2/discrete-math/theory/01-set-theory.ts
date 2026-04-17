import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "dm-t-set-theory",
    title: "Teoria de Conjuntos",
    content: `
        <h2>A Base da Matemática Moderna</h2>
        <p>A <strong>Teoria dos Conjuntos</strong> é o ramo da matemática que estuda conjuntos, que são coleções de objetos. É a linguagem fundamental para muitas áreas da matemática e da ciência da computação.</p>
        
        <h3>Definição e Notação:</h3>
        <p>Um conjunto é uma coleção bem definida de objetos distintos. Os objetos em um conjunto são chamados de elementos. Usamos chaves <code>{}</code> para denotar um conjunto.</p>
        <p>Ex: <code>A = {1, 2, 3}</code></p>
        
        <h3>Operações com Conjuntos:</h3>
        <ul>
            <li><strong>União (∪):</strong> O conjunto de todos os elementos que estão em A, ou em B, ou em ambos. <code>A ∪ B</code>.</li>
            <li><strong>Interseção (∩):</strong> O conjunto de todos os elementos que estão em A e também em B. <code>A ∩ B</code>.</li>
            <li><strong>Diferença (-):</strong> O conjunto de elementos que estão em A, mas não em B. <code>A - B</code>.</li>
            <li><strong>Complemento (A'):</strong> O conjunto de todos os elementos no conjunto universal que não estão em A.</li>
        </ul>
        
        <h3>Outros Conceitos:</h3>
        <ul>
            <li><strong>Produto Cartesiano (A x B):</strong> O conjunto de todos os pares ordenados (a, b) onde a está em A e b está em B.</li>
            <li><strong>Conjunto das Partes (ou Conjunto Potência):</strong> O conjunto de todos os subconjuntos de um conjunto, incluindo o conjunto vazio e o próprio conjunto.</li>
        </ul>
    `
};
