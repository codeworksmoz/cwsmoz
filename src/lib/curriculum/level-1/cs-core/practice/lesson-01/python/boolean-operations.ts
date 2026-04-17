import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'py-bool-ops', 
    title: 'Operações Booleanas', 
    statement: 'Implemente as portas lógicas AND, OR e NOT usando funções.', 
    template: 'def AND(a, b):\n  # seu código aqui\n  pass',
    youtubeVideoId: 'y-XMxP4gG1U',
    detailedExplanation: `
        <h2>Implementando Portas Lógicas em Python</h2>
        <p>Portas lógicas são a base dos circuitos digitais. Você pode implementá-las usando operadores lógicos de Python.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>Função AND:</strong> Use o operador <code>and</code>. A função deve retornar <code>True</code> apenas se ambos os parâmetros <code>a</code> e <code>b</code> forem verdadeiros.</li>
            <li><strong>Função OR:</strong> Use o operador <code>or</code>. A função deve retornar <code>True</code> se pelo menos um dos parâmetros, <code>a</code> ou <code>b</code>, for verdadeiro.</li>
            <li><strong>Função NOT:</strong> Use o operador <code>not</code>. A função deve inverter o valor do parâmetro.</li>
        </ol>
    `
};
