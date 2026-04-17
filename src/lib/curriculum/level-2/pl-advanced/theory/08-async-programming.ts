import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "pla-t-async-programming",
    title: "Programação Assíncrona",
    content: `
        <h2>Lidando com Operações Não-Bloqueantes</h2>
        <p><strong>Programação assíncrona</strong> é um paradigma de concorrência que lida com operações de longa duração (como I/O de rede ou de disco) sem bloquear a thread principal de execução.</p>
        
        <h3>Modelos Comuns:</h3>
        <ul>
            <li><strong>Callbacks:</strong> Uma função que é passada como argumento para outra função, para ser executada mais tarde, quando a operação assíncrona for concluída. O uso excessivo de callbacks aninhados pode levar ao "Callback Hell", tornando o código difícil de ler.</li>
            <li><strong>Promises/Futures:</strong> Um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona. Permite um encadeamento de operações mais limpo (usando <code>.then()</code> e <code>.catch()</code>).</li>
            <li><strong>Async/Await:</strong> "Açúcar sintático" sobre as Promises, que permite escrever código assíncrono que se parece com código síncrono, tornando-o muito mais legível e fácil de manter.</li>
        </ul>

        <h3>Event Loop</h3>
        <p>Muitos ambientes de I/O assíncrono (como Node.js e o navegador) usam um <strong>Event Loop</strong>. O event loop permite que o sistema execute outras tarefas enquanto espera que operações de I/O sejam concluídas, resultando em alta performance e escalabilidade para cargas de trabalho intensivas em I/O.</p>
        
        <h3>Programação Reativa</h3>
        <p>Um paradigma de programação que lida com fluxos de dados assíncronos (streams) e a propagação de mudanças. Bibliotecas como RxJS são baseadas nesses princípios.</p>
    `
};
