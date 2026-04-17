import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "alg-t-numeric",
    title: "Algoritmos Numéricos",
    content: `
        <h2>Computação com Números</h2>
        <p>Algoritmos numéricos são usados para resolver problemas matemáticos computacionalmente.</p>
        
        <h3>Algoritmo de Euclides</h3>
        <p>Um método eficiente para calcular o <strong>máximo divisor comum (MDC)</strong> de dois inteiros. É um dos algoritmos mais antigos, descrito por Euclides em seus "Elementos" por volta de 300 a.C.</p>

        <h3>Crivo de Eratóstenes</h3>
        <p>Um algoritmo antigo e eficiente para encontrar todos os <strong>números primos</strong> até um certo limite. Ele funciona eliminando iterativamente os múltiplos de cada primo, começando com o primeiro primo, 2.</p>
        
        <h3>Exponenciação Rápida (ou Exponenciação por Quadrados)</h3>
        <p>Um método para calcular grandes potências de um número de forma muito mais rápida do que a multiplicação repetida. Em vez de calcular x^n com n-1 multiplicações, ele o faz em O(log n) multiplicações.</p>
        
        <h3>Números de Fibonacci</h3>
        <p>A famosa sequência onde cada número é a soma dos dois anteriores. Embora a implementação recursiva ingênua seja muito lenta (O(2^n)), ela pode ser calculada eficientemente usando programação dinâmica (O(n)) ou uma fórmula baseada em matrizes (O(log n)).</p>
    `
};
