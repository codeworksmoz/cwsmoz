import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "pla-t1",
    title: "Programação Orientada a Objetos (POO)",
    youtubeVideoId: "SiBw7os-_zI",
    content: `
        <h2>Modelando o Mundo Real</h2>
        <p>POO é um paradigma de programação baseado no conceito de "objetos", que podem conter dados (na forma de campos, também conhecidos como atributos ou propriedades) e código (na forma de procedimentos, também conhecidos como métodos).</p>
        <h3>Pilares da POO:</h3>
        <ul>
            <li><strong>Encapsulamento:</strong> Agrupar dados e os métodos que operam nesses dados em uma única unidade (o objeto).</li>
            <li><strong>Abstração:</strong> Esconder a complexidade interna e expor apenas a funcionalidade essencial.</li>
            <li><strong>Herança:</strong> Permitir que uma classe (molde de objeto) herde atributos e métodos de outra classe.</li>
            <li><strong>Polimorfismo:</strong> A capacidade de objetos de diferentes classes responderem à mesma mensagem (chamada de método) de maneiras específicas.</li>
        </ul>
    `
};
