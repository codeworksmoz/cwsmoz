import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'dm-ex-truth-tables', 
    title: 'Tabelas-Verdade', 
    statement: 'Construa a tabela-verdade para a proposição lógica (p ∧ q) → ¬p.', 
    template: `// p | q | p ∧ q | ¬p | (p ∧ q) → ¬p
// --|---|-------|----|-------------
// V | V |       |    |
// V | F |       |    |
// F | V |       |    |
// F | F |       |    |
`,
    youtubeVideoId: 'DBugA823sQc',
    detailedExplanation: `
        <h2>Analisando a Lógica Proposicional</h2>
        <p>Uma tabela-verdade mostra o valor de verdade de uma proposição composta para todas as combinações possíveis dos valores de suas variáveis.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li>Liste todas as combinações de verdade para 'p' e 'q'.</li>
            <li>Calcule a coluna para a conjunção (p ∧ q), que é verdadeira apenas quando ambos são verdadeiros.</li>
            <li>Calcule a coluna para a negação (¬p), que é o oposto de 'p'.</li>
            <li>Calcule a coluna final para a implicação (A → B). Lembre-se que A → B só é falso quando A é verdadeiro e B é falso.</li>
        </ol>
    `
};
