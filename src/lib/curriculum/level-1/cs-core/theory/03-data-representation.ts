import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "cs-t3",
    title: "Representação de Dados",
    youtubeVideoId: "USr1-k_5s-E",
    content: `
        <h2>Como os computadores armazenam dados?</h2>
        <p>Tudo em um computador é armazenado como uma sequência de 0s e 1s. A forma como essa sequência é interpretada depende do tipo de dado.</p>
        <ul>
            <li><strong>Caracteres:</strong> Usando tabelas como ASCII e Unicode, cada caractere (letra, número, símbolo) é mapeado para um número único, que é então convertido para binário. Por exemplo, em ASCII, 'A' é 65, que em binário é <code>01000001</code>.</li>
            <li><strong>Imagens:</strong> Imagens digitais são compostas por pixels. Cada pixel tem uma cor, e essa cor é representada por números (geralmente para Vermelho, Verde e Azul - RGB). Esses números são então armazenados em binário.</li>
            <li><strong>Sons:</strong> O som é uma onda contínua. Para ser armazenado digitalmente, a onda é "amostrada" em intervalos regulares, e a amplitude da onda em cada ponto é gravada como um número, que é armazenado em binário.</li>
        </ul>
    `
};
