import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "cs-t2",
    title: "Lógica Booleana",
    youtubeVideoId: "gI-qXk7XojA",
    content: `
        <h2>O que é Lógica Booleana?</h2>
        <p>A lógica booleana, desenvolvida por George Boole, é a base da computação digital. Ela lida com valores verdadeiros (True) e falsos (False), frequentemente representados por 1 e 0.</p>
        <h3>Operadores Lógicos Fundamentais:</h3>
        <p>Existem três operadores principais:</p>
        <ul>
        <li><strong>AND (E):</strong> Retorna verdadeiro (1) somente se <em>ambas</em> as entradas forem verdadeiras. Ex: <code>1 AND 1 = 1</code>, <code>1 AND 0 = 0</code>.</li>
        <li><strong>OR (OU):</strong> Retorna verdadeiro (1) se <em>pelo menos uma</em> das entradas for verdadeira. Ex: <code>1 OR 0 = 1</code>, <code>0 OR 0 = 0</code>.</li>
        <li><strong>NOT (NÃO):</strong> Inverte o valor da entrada. Ex: <code>NOT 1 = 0</code>, <code>NOT 0 = 1</code>.</li>
        </ul>
        <p>Esses operadores são implementados em hardware através de "portas lógicas" (logic gates), que são os blocos de construção dos circuitos digitais e dos processadores.</p>
    `
};
