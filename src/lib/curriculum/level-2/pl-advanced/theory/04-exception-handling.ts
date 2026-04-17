import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "pla-t-exception-handling",
    title: "Tratamento de Exceções",
    content: `
        <h2>Lidando com o Inesperado</h2>
        <p>O <strong>tratamento de exceções</strong> é um mecanismo para responder a ocorrências de exceções — anomalias ou condições de erro que surgem durante a execução de um programa.</p>

        <h3>Blocos Try-Catch-Finally:</h3>
        <p>A maioria das linguagens modernas usa uma estrutura de blocos para lidar com exceções:</p>
        <ul>
            <li><strong>try:</strong> Envolve o código que pode potencialmente lançar uma exceção.</li>
            <li><strong>catch:</strong> Contém o código que será executado se uma exceção de um tipo específico for lançada no bloco <code>try</code>.</li>
            <li><strong>finally:</strong> Contém o código que será executado sempre, independentemente de uma exceção ter sido lançada ou não. É usado para limpeza de recursos (ex: fechar um arquivo ou conexão de rede).</li>
        </ul>
        
        <h3>Checked vs. Unchecked Exceptions (Exemplo do Java)</h3>
        <p>Algumas linguagens, como Java, fazem uma distinção:</p>
        <ul>
            <li><strong>Checked Exceptions:</strong> Erros dos quais um programa pode razoavelmente se recuperar (ex: <code>FileNotFoundException</code>). O compilador força você a lidar com elas (com um try-catch ou declarando que seu método a lança).</li>
            <li><strong>Unchecked Exceptions (Runtime Exceptions):</strong> Erros que refletem problemas de programação (ex: <code>NullPointerException</code>, <code>ArrayIndexOutOfBoundsException</code>). Geralmente não devem ser capturados, mas sim corrigidos no código.</li>
        </ul>
        
        <h3>Boas Práticas:</h3>
        <ul>
            <li>Não capture exceções que você não pode lidar.</li>
            <li>Não use exceções para controle de fluxo normal.</li>
            <li>Crie exceções customizadas e específicas do seu domínio para representar erros de negócio.</li>
            <li>Sempre limpe os recursos no bloco <code>finally</code>.</li>
        </ul>
    `
};
