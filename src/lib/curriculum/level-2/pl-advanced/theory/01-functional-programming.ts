import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "pla-t-functional",
    title: "Programação Funcional",
    content: `
        <h2>Um Paradigma Declarativo</h2>
        <p>A <strong>Programação Funcional (PF)</strong> é um paradigma de programação que trata a computação como a avaliação de funções matemáticas e evita a mudança de estado e dados mutáveis.</p>
        
        <h3>Conceitos Chave:</h3>
        <ul>
            <li><strong>Funções Puras:</strong> Funções que, para a mesma entrada, sempre produzem a mesma saída e não têm efeitos colaterais observáveis (como modificar uma variável externa ou fazer I/O).</li>
            <li><strong>Imutabilidade:</strong> Os dados não são alterados após sua criação. Se uma mudança for necessária, uma nova estrutura de dados é criada com o novo valor.</li>
            <li><strong>Funções de Alta Ordem (Higher-Order Functions):</strong> Funções que podem receber outras funções como argumentos ou retornar funções como resultado. <code>map</code>, <code>filter</code>, e <code>reduce</code> são exemplos clássicos.</li>
            <li><strong>Composição de Funções:</strong> O ato de combinar funções simples para construir funções mais complexas.</li>
            <li><strong>Currying:</strong> A técnica de transformar uma função que recebe múltiplos argumentos em uma sequência de funções que recebem um único argumento cada.</li>
        </ul>
        <p>A PF leva a um código mais previsível, testável e mais fácil de paralelizar, pois a ausência de estado compartilhado elimina uma classe inteira de bugs relacionados à concorrência.</p>
    `
};
