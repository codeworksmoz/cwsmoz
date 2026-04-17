import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'teng-ex-2', 
    title: 'Depurar Erro', 
    statement: 'Leia a mensagem de erro a seguir e explique o que ela significa: `TypeError: Cannot read properties of undefined (reading \'map\')`', 
    template: 'Explicação: ...',
    youtubeVideoId: 'B-k0g9fwIvc',
    detailedExplanation: `
        <h2>Decifrando uma Mensagem de Erro</h2>
        <p>Esta é uma das mensagens de erro mais comuns em JavaScript, especialmente com frameworks como o React.</p>
        <h3>Passo a Passo para a Análise</h3>
        <ol>
            <li><strong>Identifique o tipo de erro:</strong> <code>TypeError</code>. Isso significa que uma operação foi realizada em um valor do tipo errado.</li>
            <li><strong>Identifique a operação:</strong> <code>reading 'map'</code>. O código está tentando chamar a função <code>.map()</code>.</li>
            <li><strong>Identifique o alvo da operação:</strong> <code>of undefined</code>. O código está tentando chamar <code>.map()</code> em algo que é <code>undefined</code>.</li>
            <li><strong>Junte as peças:</strong> A função <code>.map()</code> só existe para arrays. O erro está dizendo que você tentou usar <code>.map()</code> em uma variável que, naquele momento, não era um array, mas sim <code>undefined</code>.</li>
        </ol>
        <p>No editor, escreva uma explicação clara e concisa do problema.</p>
    `
};
