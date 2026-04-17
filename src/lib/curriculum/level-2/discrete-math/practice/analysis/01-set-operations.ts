import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'dm-ex-sets', 
    title: 'Operações com Conjuntos', 
    statement: 'Dados os conjuntos A = {1, 2, 3, 4} e B = {3, 4, 5, 6}, determine os conjuntos resultantes das operações de União, Interseção e Diferença.', 
    template: `// A = {1, 2, 3, 4}
// B = {3, 4, 5, 6}

// União (A ∪ B):
// { ... }

// Interseção (A ∩ B):
// { ... }

// Diferença (A - B):
// { ... }
`,
    youtubeVideoId: 'DBugA823sQc',
    detailedExplanation: `
        <h2>Trabalhando com Conjuntos</h2>
        <p>A Teoria dos Conjuntos é a base da matemática moderna e da ciência da computação.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>União (A ∪ B):</strong> O conjunto de todos os elementos que estão em A, ou em B, ou em ambos. Junte todos os elementos e remova as duplicatas.</li>
            <li><strong>Interseção (A ∩ B):</strong> O conjunto de todos os elementos que estão tanto em A quanto em B. Quais números aparecem nos dois conjuntos?</li>
            <li><strong>Diferença (A - B):</strong> O conjunto de elementos que estão em A, mas não estão em B. Comece com o conjunto A e remova os elementos que também existem em B.</li>
        </ol>
    `
};
