import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'fcc-rwd-proj-1', 
    title: 'Análise de Projeto: Formulário de Pesquisa', 
    statement: 'O primeiro projeto da certificação de Design Web Responsivo é construir um formulário de pesquisa. Descreva os principais requisitos técnicos e de usuário para este projeto, conforme especificado pelo freeCodeCamp.', 
    template: `// Requisitos do Usuário (User Stories):
// 1. Deve ter um elemento h1 com id="title"
// 2. Deve ter um elemento p com id="description"
// 3. Deve ter um form com id="survey-form"
// 4. Dentro do form, deve ter um input de texto com id="name"
// 5. Dentro do form, deve ter um input de email com id="email"
// 6. Dentro do form, deve ter um input numérico com id="number"
// 7. Deve ter labels para nome, email e número
// 8. Deve ter um dropdown com id="dropdown"
// 9. Deve ter botões de rádio com um value attribute
// 10. Deve ter checkboxes com um value attribute
// 11. Deve ter uma textarea
// 12. Deve ter um botão de submit com id="submit"

// Requisitos Técnicos:
// - O formulário deve ser responsivo.
`,
    youtubeVideoId: 'R-JbDMY_2_Y',
    detailedExplanation: `
        <h2>Analisando os Requisitos do Projeto</h2>
        <p>A melhor maneira de começar um projeto é entender completamente seus requisitos. Os projetos do freeCodeCamp são definidos por um conjunto de "histórias de usuário" que devem ser satisfeitas para que os testes automatizados passem.</p>
        <h3>Passo a Passo da Análise</h3>
        <ol>
            <li>Leia atentamente a descrição do projeto no site do freeCodeCamp.</li>
            <li>Liste cada um dos requisitos (user stories) fornecidos.</li>
            <li>Identifique os elementos HTML específicos e os IDs que são necessários para cada campo do formulário (input, select, radio, checkbox, textarea, button).</li>
            <li>Use CSS para estilizar o formulário e garantir que ele seja responsivo, adaptando-se a diferentes tamanhos de tela.</li>
        </ol>
        <p>Este exercício serve para planejar seu trabalho antes de começar a codificar, uma habilidade crucial para qualquer desenvolvedor.</p>
    `
};
