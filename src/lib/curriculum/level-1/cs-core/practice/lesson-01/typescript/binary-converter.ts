import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'ts-bin-converter', 
    title: 'Conversor Binário', 
    statement: 'Crie uma função que converte um número decimal para binário.', 
    template: 'function decimalToBinary(decimal: number): string {\n  // seu código aqui\n}',
    youtubeVideoId: 'Qdw4iA1p2so',
    detailedExplanation: `
        <h2>Convertendo Decimal para Binário em TypeScript</h2>
        <p>A lógica é a mesma do JavaScript, mas adicionamos tipos para garantir a segurança.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li>O parâmetro <code>decimal</code> deve ser do tipo <code>number</code>.</li>
            <li>A função deve retornar uma <code>string</code>.</li>
            <li>Use o método <code>.toString(2)</code> no número para a conversão.</li>
        </ol>
    `
};
