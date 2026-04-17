import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'py-cond', 
    title: 'Exercício de Condicionais', 
    statement: 'Escreva um if/else que verifica se um número é par ou ímpar.', 
    template: 'numero = 10\n# seu código aqui',
    youtubeVideoId: 'qf0LpAMpi3E',
    detailedExplanation: `
        <h2>Lógica Condicional com if/else em Python</h2>
        <p>Para verificar se um número é par ou ímpar, usamos o operador de módulo <code>%</code>. Ele retorna o resto de uma divisão.</p>
        <p>Um número é par se o resto da sua divisão por 2 for igual a 0.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li>Use uma instrução <code>if</code> para verificar se <code>numero % 2</code> é igual a <code>0</code>.</li>
            <li>Se for, use <code>print()</code> para imprimir a mensagem "O número é par.".</li>
            <li>Use uma instrução <code>else</code> para o caso contrário.</li>
            <li>Dentro do <code>else</code>, imprima a mensagem "O número é ímpar.".</li>
        </ol>
    `
};
