import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "cs-t1",
    title: "Sistemas Binários e de Numeração",
    youtubeVideoId: "10_yY-sLzJo",
    content: `
        <h2>O que são Sistemas de Numeração?</h2>
        <p>Um sistema de numeração é um conjunto de regras e símbolos que nos permite representar números. O sistema que usamos no dia-a-dia é o <strong>decimal (base 10)</strong>, que usa dez dígitos (0-9).</p>
        <p>Os computadores, por outro lado, operam com o sistema <strong>binário (base 2)</strong>. Ele usa apenas dois dígitos: 0 e 1. Cada dígito binário é chamado de <strong>bit</strong>.</p>
        <h3>Por que binário?</h3>
        <p>Computadores usam transistores, que são como interruptores elétricos. Eles podem estar em um de dois estados: ligado (representado por 1) ou desligado (representado por 0). Esta é a razão fundamental pela qual os computadores funcionam em binário.</p>
        <h3>Outros Sistemas Importantes:</h3>
        <ul>
        <li><strong>Octal (Base 8):</strong> Usa dígitos de 0 a 7.</li>
        <li><strong>Hexadecimal (Base 16):</strong> Usa dígitos de 0 a 9 e as letras A a F para representar os valores de 10 a 15. É muito usado para representar cores (ex: #FF5733) e endereços de memória.</li>
        </ul>
    `
};
