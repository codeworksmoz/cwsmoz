import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "pla-t-metaprogramming",
    title: "Metaprogramação",
    content: `
        <h2>Código que Escreve ou Manipula Código</h2>
        <p><strong>Metaprogramação</strong> é a escrita de programas de computador que têm a capacidade de tratar outros programas como seus dados. Isso significa que um programa pode ser projetado para ler, gerar, analisar ou transformar outros programas, e até mesmo se modificar enquanto está rodando.</p>
        
        <h3>Técnicas Comuns:</h3>
        <ul>
            <li><strong>Reflexão (Reflection):</strong> A capacidade de um programa de examinar e modificar sua própria estrutura e comportamento em tempo de execução. Por exemplo, inspecionar as propriedades e métodos de um objeto, ou invocar um método por seu nome como uma string. (Comum em Java, C#).</li>
            <li><strong>Anotações/Decoradores:</strong> Uma forma de adicionar metadados ao código. Um programa pode então ler esses metadados em tempo de execução (usando reflexão) ou em tempo de compilação para alterar o comportamento. (Usado extensivamente em TypeScript, Python, Java).</li>
            <li><strong>Macros:</strong> Um sistema que permite aos programadores definir novas sintaxes em uma linguagem. Uma macro transforma o código em tempo de compilação. (Fundamental em linguagens Lisp, também presente em Rust).</li>
            <li><strong>Geração de Código (Code Generation):</strong> Escrever um programa que gera código-fonte que será então compilado. É comum em ORMs e frameworks de serialização.</li>
        </ul>
        <p>A metaprogramação é uma ferramenta poderosa que pode ajudar a reduzir código repetitivo e a criar frameworks altamente flexíveis, mas também pode tornar o código mais complexo e difícil de depurar se usada em excesso.</p>
    `
};
