import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'sec-ex-1', 
    title: 'Tríade CIA', 
    statement: 'Para cada cenário, identifique qual pilar da Tríade CIA (Confidencialidade, Integridade, Disponibilidade) foi violado: 1) Um hacker obtém acesso a senhas de usuários. 2) Um ataque DDoS derruba um site. 3) Um funcionário altera o salário de um colega no banco de dados sem autorização.', 
    template: `// 1. Acesso a senhas:
// Violação de ...

// 2. Site derrubado:
// Violação de ...

// 3. Salário alterado:
// Violação de ...
`,
    youtubeVideoId: 'inWWhr5tnEA',
    detailedExplanation: `
        <h2>Analisando as Violações de Segurança</h2>
        <p>A tríade CIA é o modelo base para a segurança da informação.</p>
        <h3>Passo a Passo da Análise</h3>
        <ol>
            <li><strong>Acesso a Senhas:</strong> Senhas são informações que devem ser secretas. O acesso não autorizado a elas é uma clara violação da <strong>Confidencialidade</strong>.</li>
            <li><strong>Site Derrubado:</strong> Um ataque DDoS impede que usuários legítimos acessem o site. O serviço não está disponível. Isso é uma violação da <strong>Disponibilidade</strong>.</li>
            <li><strong>Salário Alterado:</strong> Os dados foram modificados de forma não autorizada, perdendo sua exatidão. Isso é uma violação da <strong>Integridade</strong>.</li>
        </ol>
    `
};
