import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'block-ex-1', 
    title: 'Caso de Uso para Smart Contract', 
    statement: 'Descreva um caso de uso simples para um Smart Contract, além de transferências de criptomoedas. Por exemplo, um sistema de votação.', 
    template: `// Caso de Uso: Sistema de Votação Descentralizado

// Lógica do Smart Contract:
// 1. ... (Registrar eleitores)
// 2. ... (Abrir e fechar período de votação)
// 3. ... (Permitir que eleitores registrados votem apenas uma vez)
// 4. ... (Contabilizar os votos de forma transparente)
`,
    youtubeVideoId: 'YdFky-2pP0s',
    detailedExplanation: `
        <h2>Automatizando a Confiança</h2>
        <p>Smart Contracts são programas armazenados em uma blockchain que são executados quando condições predeterminadas são atendidas. Eles são usados para automatizar a execução de um acordo para que todos os participantes possam ter certeza imediata do resultado, sem o envolvimento de um intermediário.</p>
        <h3>Analisando o Caso de Uso de Votação</h3>
        <p>Um sistema de votação é um ótimo exemplo:</p>
        <ol>
            <li><strong>Registrar Eleitores:</strong> O contrato pode ter uma lista de endereços de carteira autorizados a votar.</li>
            <li><strong>Período de Votação:</strong> O contrato pode ter uma variável que controla se a votação está aberta ou fechada, com base no tempo/bloco da blockchain.</li>
            <li><strong>Voto Único:</strong> O contrato pode manter um registro de quem já votou para garantir que ninguém vote mais de uma vez.</li>
            <li><strong>Transparência:</strong> Como o contrato e as transações (votos) estão em uma blockchain pública, qualquer pessoa pode verificar o código e auditar a contagem final.</li>
        </ol>
    `
};
