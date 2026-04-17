import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'eth-ex-1',
    title: 'Dilema Ético',
    statement: 'Você descobre uma falha de segurança crítica em um sistema da sua empresa, mas seu gerente pede para você não reportar o problema para não atrasar o lançamento do produto. Qual seria a sua linha de ação, considerando os códigos de ética da profissão (como o da ACM)?',
    template: `// Dilema: Ocultar uma falha de segurança a pedido do gerente.

// Análise do Problema (com base na ética profissional):
// ...

// Linha de Ação Proposta:
// 1. ...
// 2. ...
// 3. ...
`,
    youtubeVideoId: 's3-HAE8q-hI',
    detailedExplanation: `
        <h2>Navegando em Decisões Difíceis</h2>
        <p>Códigos de ética, como o da ACM/IEEE, fornecem um guia para o comportamento profissional. Um de seus princípios fundamentais é "Contribuir para a sociedade e o bem-estar humano", o que inclui a segurança e a proteção do público.</p>
        <h3>Analisando a Situação</h3>
        <ol>
            <li><strong>Análise do Problema:</strong> Ocultar uma falha de segurança viola o dever ético de proteger o público e a integridade do sistema. Atrasar o lançamento é um problema de negócio, mas uma violação de segurança é um problema ético e de responsabilidade.</li>
            <li><strong>Linha de Ação:</strong>
                <ul>
                    <li>Primeiro, comunicar claramente ao gerente, de forma documentada (por email), os riscos técnicos e de negócio associados à falha (perda de dados de clientes, dano à reputação, multas legais).</li>
                    <li>Se o gerente insistir, escalar a questão para um nível superior na hierarquia (o gerente do seu gerente ou o departamento de segurança da informação), sempre de forma profissional e baseada em fatos.</li>
                    <li>Recusar-se a ser cúmplice em uma ação que é eticamente incorreta e potencialmente ilegal.</li>
                </ul>
            </li>
        </ol>
    `
};
