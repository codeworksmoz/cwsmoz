import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'devtools-ex-1', 
    title: 'Configurando um Ambiente de Desenvolvimento', 
    statement: 'Descreva os passos básicos para configurar o Visual Studio Code para um novo projeto em Python, incluindo a instalação de extensões essenciais.', 
    template: `// Passos para configurar o VS Code para Python:
// 1. Instalar a extensão Python: ...
// 2. Selecionar o interpretador Python: ...
// 3. Instalar um linter (como Pylint): ...
`,
    youtubeVideoId: 'a_l648-wN3o',
    detailedExplanation: `
        <h2>Preparando sua Ferramenta de Trabalho</h2>
        <p>Configurar corretamente seu ambiente de desenvolvimento é o primeiro passo para ser produtivo. O VS Code é altamente customizável através de extensões.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>Instalar a Extensão:</strong> Abra a aba de Extensões (Ctrl+Shift+X) e procure por "Python" da Microsoft. Clique em Instalar.</li>
            <li><strong>Selecionar Interpretador:</strong> Abra um arquivo <code>.py</code>. Use a paleta de comandos (Ctrl+Shift+P) e digite "Python: Select Interpreter" para escolher a versão do Python que você instalou na sua máquina.</li>
            <li><strong>Linter:</strong> Um linter analisa seu código em busca de erros e problemas de estilo. O VS Code geralmente sugere a instalação de um linter como Pylint ou Flake8 quando você abre um arquivo Python. Siga a notificação para instalar.</li>
        </ol>
        <p>No editor, descreva esses três passos principais.</p>
    `
};
