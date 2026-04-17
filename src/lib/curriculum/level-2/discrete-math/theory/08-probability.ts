import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "dm-t-probability",
    title: "Probabilidade Discreta",
    content: `
        <h2>Medindo a Incerteza</h2>
        <p>A <strong>probabilidade discreta</strong> lida com espaços amostrais finitos ou contáveis. É a base para a análise de algoritmos randomizados, machine learning e sistemas que lidam com incerteza.</p>
        
        <h3>Conceitos Básicos:</h3>
        <ul>
            <li><strong>Espaço Amostral (S):</strong> O conjunto de todos os resultados possíveis de um experimento.</li>
            <li><strong>Evento (E):</strong> Um subconjunto do espaço amostral.</li>
            <li><strong>Probabilidade de um Evento:</strong> P(E) = |E| / |S|, para resultados igualmente prováveis.</li>
        </ul>
        
        <h3>Probabilidade Condicional e Independência:</h3>
        <ul>
            <li><strong>Probabilidade Condicional (P(E|F)):</strong> A probabilidade do evento E ocorrer, <em>dado que</em> o evento F já ocorreu.</li>
            <li><strong>Independência:</strong> Dois eventos E e F são independentes se a ocorrência de um não afeta a probabilidade do outro. P(E ∩ F) = P(E) * P(F).</li>
        </ul>

        <h3>Teorema de Bayes:</h3>
        <p>Descreve a probabilidade de um evento, com base no conhecimento prévio de condições que podem estar relacionadas ao evento. É fundamental para a inferência estatística e machine learning.</p>
        
        <h3>Variáveis Aleatórias Discretas:</h3>
        <p>Uma variável cujo valor é um resultado numérico de um fenômeno aleatório.</p>
        <ul>
            <li><strong>Esperança (Valor Esperado):</strong> A média ponderada de longo prazo de uma variável aleatória.</li>
            <li><strong>Variância:</strong> Mede o quão dispersos os valores da variável aleatória estão em relação à sua média.</li>
        </ul>
    `
};
