import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "dm-t-recurrence-relations",
    title: "Relações de Recorrência",
    content: `
        <h2>Definindo Sequências Recursivamente</h2>
        <p>Uma <strong>relação de recorrência</strong> é uma equação que define uma sequência recursivamente. Cada termo da sequência é definido como uma função dos termos anteriores.</p>
        <p><strong>Exemplo: Sequência de Fibonacci</strong></p>
        <p><code>F(n) = F(n-1) + F(n-2)</code> com condições iniciais <code>F(0)=0, F(1)=1</code>.</p>
        
        <h3>Análise de Algoritmos Recursivos</h3>
        <p>Relações de recorrência são a ferramenta fundamental para analisar a complexidade de algoritmos recursivos. Para um algoritmo de "divisão e conquista", a relação de recorrência geralmente tem a forma:</p>
        <p><code>T(n) = aT(n/b) + f(n)</code></p>
        <p>Onde T(n) é o tempo para resolver um problema de tamanho n, 'a' é o número de subproblemas, 'n/b' é o tamanho de cada subproblema, e f(n) é o custo de dividir o problema e combinar as soluções.</p>
        
        <h3>Métodos de Resolução:</h3>
        <ul>
            <li><strong>Método da Substituição (Iteração):</strong> Expandir a recorrência várias vezes até que um padrão seja identificado.</li>
            <li><strong>Teorema Mestre (Master Theorem):</strong> Fornece uma "receita" para resolver muitos casos comuns da recorrência de divisão e conquista.</li>
            <li><strong>Equações Características:</strong> Um método para resolver relações de recorrência lineares homogêneas com coeficientes constantes (como Fibonacci).</li>
        </ul>
    `
};
