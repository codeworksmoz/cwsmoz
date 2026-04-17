import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-refactoring-catalog",
    title: "Catálogo de Refatorações",
    content: `
        <h2>Um Guia Prático para Melhorar seu Código</h2>
        <p>O conceito de um "catálogo de refatorações" foi popularizado por Martin Fowler em seu livro seminal, "Refactoring: Improving the Design of Existing Code". Um catálogo é uma coleção de "receitas" de refatoração, onde cada receita descreve um problema de design comum (um "code smell") e fornece uma solução passo a passo e segura para corrigi-lo.</p>
        
        <h3>Estrutura de uma Refatoração no Catálogo:</h3>
        <p>Cada item no catálogo geralmente tem a seguinte estrutura:</p>
        <ol>
            <li><strong>Nome:</strong> Um nome conciso e memorável para a técnica (ex: "Extract Method").</li>
            <li><strong>Motivação:</strong> Por que essa refatoração é necessária? Qual "code smell" ela corrige?</li>
            <li><strong>Mecânica:</strong> Um guia passo a passo, detalhado e seguro, sobre como aplicar a transformação no código.</li>
            <li><strong>Exemplo:</strong> Um trecho de código "antes" e "depois" para ilustrar a transformação.</li>
        </ol>

        <h3>Por que usar um catálogo?</h3>
        <ul>
            <li><strong>Linguagem Compartilhada:</strong> Fornece uma linguagem comum para a equipe discutir problemas de design e soluções.</li>
            <li><strong>Segurança:</strong> As mecânicas são projetadas para serem pequenos passos que podem ser executados com segurança, idealmente com uma suíte de testes para garantir que nenhum comportamento foi quebrado.</li>
            <li><strong>Aprendizado:</strong> É uma ferramenta de aprendizado fantástica para desenvolvedores, ensinando-os a identificar maus cheiros e a corrigi-los de forma sistemática.</li>
        </ul>
        <p>Sites como <a href="https://refactoring.guru/" target="_blank" rel="noopener noreferrer">refactoring.guru</a> e o próprio catálogo de Martin Fowler são recursos excelentes para explorar essas técnicas em detalhe.</p>
    `
};
