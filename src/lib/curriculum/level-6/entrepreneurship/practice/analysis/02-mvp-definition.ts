import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'ent-ex-2',
    title: 'Definindo um MVP',
    statement: 'Para o mesmo app de assinatura de marmitas saudáveis, defina qual seria o Minimum Viable Product (MVP). Quais são as funcionalidades absolutamente essenciais para lançar a primeira versão e testar a ideia?',
    template: `// Ideia: App de assinatura de marmitas saudáveis

// Funcionalidades do MVP:
// 1. ...
// 2. ...
// 3. ...
// 4. ...

// Funcionalidades a serem deixadas para depois:
// - ...
`,
    youtubeVideoId: 'zXv_eN8mkgo',
    detailedExplanation: `
        <h2>O Mínimo para ser Viável</h2>
        <p>O objetivo do MVP não é ser um produto completo, mas sim a versão mais simples que permite aprender o máximo sobre seus clientes com o mínimo de esforço. O foco é na validação da proposta de valor principal.</p>
        <h3>Definindo o Escopo</h3>
        <p>Pense no fluxo mais crítico do usuário:</p>
        <ol>
            <li>O usuário precisa ver o cardápio da semana (Feature 1: Visualização de cardápio).</li>
            <li>O usuário precisa ser capaz de escolher um plano de assinatura (Feature 2: Seleção de plano).</li>
            <li>O usuário precisa ser capaz de pagar pela assinatura (Feature 3: Integração com um gateway de pagamento).</li>
            <li>O usuário precisa fornecer seu endereço de entrega (Feature 4: Cadastro de endereço).</li>
        </ol>
        <p>Funcionalidades como "customização de pratos", "programa de fidelidade" ou "avaliação de refeições" são importantes, mas podem ser adicionadas depois, com base no feedback dos primeiros usuários. Elas não são essenciais para validar a ideia principal.</p>
    `
};
