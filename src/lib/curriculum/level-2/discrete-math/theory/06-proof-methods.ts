import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "dm-t-proof-methods",
    title: "Métodos de Prova",
    content: `
        <h2>Argumentos Lógicos Rigorosos</h2>
        <p>Uma prova matemática é um argumento dedutivo para uma declaração matemática. Vários métodos podem ser usados para construir uma prova.</p>
        
        <h3>Prova Direta</h3>
        <p>Para provar uma implicação p → q, assumimos que p é verdadeiro e usamos regras de inferência e axiomas para mostrar que q deve ser verdadeiro.</p>
        
        <h3>Prova por Contrapositiva</h3>
        <p>Para provar p → q, provamos sua contrapositiva, que é ¬q → ¬p. Assumimos que q é falso e mostramos que p deve ser falso. É uma forma de prova indireta.</p>

        <h3>Prova por Contradição</h3>
        <p>Para provar que uma proposição p é verdadeira, assumimos que ela é falsa (¬p) e mostramos que isso leva a uma contradição (algo que é sempre falso, como r ∧ ¬r). Se a negação de p leva a uma contradição, então p deve ser verdadeira. É outra forma de prova indireta.</p>
        
        <h3>Prova por Indução Matemática</h3>
        <p>Uma técnica poderosa para provar que uma propriedade P(n) é verdadeira para todos os inteiros n a partir de um certo ponto. Envolve dois passos:</p>
        <ol>
            <li><strong>Passo Base:</strong> Provar que P(n₀) é verdadeiro para o valor inicial n₀.</li>
            <li><strong>Passo de Indução:</strong> Provar que para todo k ≥ n₀, se P(k) é verdadeiro (a hipótese de indução), então P(k+1) também é verdadeiro.</li>
        </ol>
    `
};
