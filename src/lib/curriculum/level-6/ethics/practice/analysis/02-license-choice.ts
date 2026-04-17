import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'eth-ex-2',
    title: 'Escolha de Licença de Software',
    statement: 'Você está criando uma nova biblioteca open source. Qual licença você escolheria em cada cenário e por quê? 1) Você quer que qualquer pessoa possa usar, modificar e distribuir seu código, com o mínimo de restrições. 2) Você quer que qualquer pessoa possa usar, mas se ela modificar e distribuir, ela deve compartilhar suas modificações sob a mesma licença.',
    template: `// Cenário 1 (Máxima liberdade):
// Licença: ...
// Por quê: ...

// Cenário 2 (Compartilhamento obrigatório de modificações):
// Licença: ...
// Por quê: ...
`,
    youtubeVideoId: 's3-HAE8q-hI',
    detailedExplanation: `
        <h2>Entendendo o Impacto das Licenças</h2>
        <p>A escolha da licença de software tem implicações significativas sobre como seu código pode ser usado por outros.</p>
        <h3>Analisando as Opções</h3>
        <ol>
            <li><strong>Máxima Liberdade:</strong> Este cenário descreve uma licença permissiva. A <strong>Licença MIT</strong> é a escolha mais comum. Ela é curta, simples e basicamente permite que qualquer um faça qualquer coisa com o código, desde que mantenham o aviso de direitos autorais original.</li>
            <li><strong>Compartilhamento Obrigatório:</strong> Este cenário descreve uma licença "copyleft". A <strong>GPL (GNU General Public License)</strong> é a mais famosa. Ela garante que qualquer trabalho derivado da sua biblioteca também seja open source e distribuído sob os mesmos termos, promovendo o crescimento do ecossistema de software livre.</li>
        </ol>
    `
};
