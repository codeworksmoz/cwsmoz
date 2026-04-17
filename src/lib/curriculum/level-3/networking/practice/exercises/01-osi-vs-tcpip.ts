import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'net-ex-1', 
    title: 'Modelo OSI vs. TCP/IP', 
    statement: 'Compare o Modelo OSI (7 camadas) e o Modelo TCP/IP (4 camadas). Qual camada do modelo OSI corresponde à camada de Aplicação do TCP/IP?', 
    template: `// Camadas do OSI:
// 7. ...
// 6. ...
// 5. ...
// 4. ...
// 3. ...
// 2. ...
// 1. ...

// Camada de Aplicação do TCP/IP corresponde a:
// ...
`,
    youtubeVideoId: '01-6pkvyA-c',
    detailedExplanation: `
        <h2>Entendendo os Modelos de Rede</h2>
        <p>Os modelos OSI e TCP/IP são frameworks conceituais que padronizam as funções de um sistema de telecomunicação ou computação em camadas de abstração.</p>
        <h3>Análise</h3>
        <ol>
            <li><strong>Modelo OSI:</strong> É um modelo de referência com 7 camadas: Física, Enlace, Rede, Transporte, Sessão, Apresentação e Aplicação.</li>
            <li><strong>Modelo TCP/IP:</strong> É o modelo prático usado na internet, com 4 camadas: Aplicação, Transporte, Internet (Rede) e Acesso à Rede (Enlace/Física).</li>
            <li><strong>Correspondência:</strong> A camada de Aplicação do TCP/IP é uma combinação das responsabilidades das camadas de Aplicação, Apresentação e Sessão do modelo OSI.</li>
        </ol>
    `
};
