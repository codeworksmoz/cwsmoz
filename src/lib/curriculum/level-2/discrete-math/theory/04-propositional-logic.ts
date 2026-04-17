import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "dm-t-propositional-logic",
    title: "Lógica Proposicional",
    content: `
        <h2>A Lógica das Declarações</h2>
        <p>A <strong>lógica proposicional</strong> é o estudo de proposições (declarações que podem ser verdadeiras ou falsas) e como elas podem ser combinadas usando conectivos lógicos para formar proposições mais complexas.</p>
        
        <h3>Proposições e Conectivos:</h3>
        <ul>
            <li><strong>Proposição:</strong> Uma declaração declarativa que é ou verdadeira (V) ou falsa (F). Ex: "Está chovendo."</li>
            <li><strong>Conectivos Lógicos:</strong>
                <ul>
                    <li><strong>Negação (¬):</strong> NÃO</li>
                    <li><strong>Conjunção (∧):</strong> E</li>
                    <li><strong>Disjunção (∨):</strong> OU</li>
                    <li><strong>Implicação (→):</strong> SE... ENTÃO...</li>
                    <li><strong>Bicondicional (↔):</strong> SE E SOMENTE SE</li>
                </ul>
            </li>
        </ul>
        
        <h3>Tabelas-Verdade</h3>
        <p>Uma tabela-verdade mostra o valor de verdade de uma proposição composta para todas as combinações possíveis de valores de verdade de suas proposições componentes.</p>
        
        <h3>Tautologias e Contradições</h3>
        <ul>
            <li><strong>Tautologia:</strong> Uma proposição composta que é sempre verdadeira, independentemente dos valores de verdade de suas componentes. Ex: p ∨ ¬p.</li>
            <li><strong>Contradição:</strong> Uma proposição composta que é sempre falsa. Ex: p ∧ ¬p.</li>
        </ul>
        
        <p>A lógica proposicional é a base para a lógica booleana usada em circuitos digitais e na programação.</p>
    `
};
