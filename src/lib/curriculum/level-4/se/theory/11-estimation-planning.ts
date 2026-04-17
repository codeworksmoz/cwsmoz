import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "se-t11-estimation",
    title: "Estimativa e Planejamento Ágil",
    content: `
        <h2>Estimando o Tamanho, Não o Tempo</h2>
        <p>No ágil, evitamos estimar tarefas em horas ou dias, pois isso é notoriamente impreciso. Em vez disso, usamos estimativas relativas para comparar o tamanho e a complexidade de uma tarefa em relação a outra.</p>
        <h3>Técnicas de Estimativa:</h3>
        <ul>
            <li><strong>Story Points:</strong> Uma unidade de medida abstrata para expressar o esforço total necessário para implementar um item do backlog. Leva em conta a complexidade, a incerteza e a quantidade de trabalho. Frequentemente usa uma sequência de Fibonacci modificada (1, 2, 3, 5, 8, 13...).</li>
            <li><strong>Planning Poker:</strong> Uma técnica baseada em consenso para estimar. Cada membro da equipe escolhe uma carta com um valor de Story Point que representa sua estimativa, e todos revelam ao mesmo tempo. As diferenças são discutidas até que o time chegue a um consenso.</li>
            <li><strong>T-shirt Sizing (Tamanhos de Camiseta):</strong> Uma técnica mais rápida para estimativas de alto nível, usando tamanhos como PP, P, M, G, GG.</li>
        </ul>
    `
};
