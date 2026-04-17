import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'req-ex-2',
    title: 'Prática: Definindo Critérios de Aceitação',
    statement: 'Para a história de usuário "Como um usuário, eu quero fazer login com email e senha, para que eu possa acessar minha conta", escreva pelo menos 4 critérios de aceitação no formato de checklist.',
    template: `// História: "Como um usuário, eu quero fazer login com email e senha, para que eu possa acessar minha conta."

// Critérios de Aceitação:
// 1. ...
// 2. ...
// 3. ...
// 4. ...
`,
    youtubeVideoId: 'a_TleOwnW4I',
    detailedExplanation: `
        <h2>Definindo "Pronto"</h2>
        <p>Critérios de Aceitação (ACs) tornam a história testável. Eles descrevem as condições que devem ser verdadeiras para que a funcionalidade seja considerada completa.</p>
        <h3>Como Pensar nos Critérios</h3>
        <p>Pense nos diferentes cenários:</p>
        <ul>
            <li><strong>Caminho Feliz:</strong> O que acontece quando tudo dá certo? (email e senha válidos).</li>
            <li><strong>Caminhos de Erro:</strong> O que acontece quando algo dá errado? (senha incorreta, email não cadastrado, campos em branco).</li>
            <li><strong>Regras de UI:</strong> Como a interface deve se comportar? (o campo de senha deve ser mascarado, um botão deve ser desabilitado, etc.).</li>
        </ul>
        <p>Para este exercício, liste pelo menos quatro regras que cubram esses cenários.</p>
    `
};
