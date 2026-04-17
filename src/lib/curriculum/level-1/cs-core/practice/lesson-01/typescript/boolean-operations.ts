import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'ts-bool-ops', 
    title: 'Operações Booleanas', 
    statement: 'Implemente as portas lógicas AND, OR e NOT usando funções.', 
    template: 'function AND(a: boolean, b: boolean): boolean {\n  // seu código aqui\n}',
    youtubeVideoId: 'd2c0b-iP2RI',
    detailedExplanation: `
        <h2>Implementando Portas Lógicas em TypeScript</h2>
        <p>A lógica é a mesma do JavaScript, mas com a adição de tipos para os parâmetros e o valor de retorno.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>Função AND:</strong> Use o operador <code>&&</code>. Os parâmetros e o retorno são do tipo <code>boolean</code>.</li>
            <li><strong>Função OR:</strong> Use o operador <code>||</code>. Os parâmetros e o retorno são do tipo <code>boolean</code>.</li>
            <li><strong>Função NOT:</strong> Use o operador <code>!</code>. O parâmetro e o retorno são do tipo <code>boolean</code>.</li>
        </ol>
    `
};
