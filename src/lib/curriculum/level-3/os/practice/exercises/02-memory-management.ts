import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'os-ex-2', 
    title: 'Gerenciamento de Memória: Memória Virtual', 
    statement: 'Explique brevemente o conceito de memória virtual e qual o seu principal benefício para as aplicações.', 
    template: `// Conceito de Memória Virtual:
// ...

// Principal Benefício:
// ...
`,
    youtubeVideoId: '26QPDBe-NB8',
    detailedExplanation: `
        <h2>Indo Além da Memória Física</h2>
        <p>A memória virtual é uma técnica de gerenciamento de memória que dá a cada processo a ilusão de que ele tem seu próprio espaço de endereçamento contíguo e privado, mesmo que a memória física (RAM) seja limitada e compartilhada.</p>
        <h3>Passo a Passo da Análise</h3>
        <ol>
            <li><strong>Conceito:</strong> O sistema operacional mapeia os endereços de memória virtuais (usados pelo programa) para endereços de memória física (na RAM). Partes do programa que não estão em uso podem ser movidas para o disco rígido (um processo chamado "swapping" ou "paging").</li>
            <li><strong>Benefício:</strong> O principal benefício é o isolamento e a capacidade de executar programas maiores do que a memória física disponível. Cada processo opera em seu próprio "mundo", sem interferir nos outros, e o SO gerencia a complexidade de alocar a RAM real.</li>
        </ol>
    `
};
