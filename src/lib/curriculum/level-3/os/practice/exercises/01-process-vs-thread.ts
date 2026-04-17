import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'os-ex-1', 
    title: 'Processo vs. Thread', 
    statement: 'Descreva a principal diferença entre um processo e uma thread em um sistema operacional. Qual deles tem seu próprio espaço de memória e qual compartilha memória?', 
    template: `// Diferença Principal:
// ...

// Espaço de Memória do Processo:
// ...

// Espaço de Memória da Thread:
// ...
`,
    youtubeVideoId: '26QPDBe-NB8',
    detailedExplanation: `
        <h2>Entendendo as Unidades de Execução</h2>
        <p>Processos e threads são conceitos fundamentais para entender a concorrência em sistemas operacionais.</p>
        <h3>Passo a Passo da Análise</h3>
        <ol>
            <li><strong>Processo:</strong> Pense em um processo como um programa em execução. Ele é uma unidade independente com seu próprio espaço de memória, o que significa que um processo não pode acessar diretamente a memória de outro. Isso oferece isolamento e segurança.</li>
            <li><strong>Thread:</strong> Pense em uma thread como um "fluxo de execução" dentro de um processo. Um processo pode ter múltiplas threads. Todas as threads de um mesmo processo compartilham o mesmo espaço de memória, o que torna a comunicação entre elas mais rápida, mas também mais perigosa (exige sincronização).</li>
        </ol>
        <p>No editor, descreva essa diferença fundamental em relação ao isolamento e compartilhamento de memória.</p>
    `
};
