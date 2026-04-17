import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "teng-t3-2",
    title: "O Processo de Debugging",
    content: `
        <h2>Como Encontrar e Corrigir Erros</h2>
        <p><strong>Debugging</strong> (depuração) é o processo de encontrar e consertar bugs (erros) no seu código.</p>
        <h3>Passos para o Debugging:</h3>
        <ol>
            <li><strong>Leia a mensagem de erro completa:</strong> A mensagem de erro e o "stack trace" (pilha de chamadas) dizem exatamente onde o erro aconteceu (arquivo e número da linha) e o tipo de erro.</li>
            <li><strong>Reproduza o erro:</strong> Tente entender quais passos levam ao erro de forma consistente.</li>
            <li><strong>Isole o problema:</strong> Use <code>print()</code> ou <code>console.log()</code> para verificar o valor das variáveis em diferentes pontos do seu código e encontrar onde a lógica está errada.</li>
            <li><strong>Consulte a documentação:</strong> Se o erro envolve uma função de uma biblioteca, verifique a documentação para ter certeza de que você a está usando corretamente.</li>
            <li><strong>Pesquise o erro:</strong> Copie e cole a mensagem de erro exata no Google ou Stack Overflow.</li>
        </ol>
    `
};
