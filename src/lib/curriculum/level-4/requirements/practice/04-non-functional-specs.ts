import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'req-ex-4',
    title: 'Prática: Especificando Requisitos Não-Funcionais',
    statement: 'Para um novo site de e-commerce, escreva um exemplo de Requisito Não-Funcional (RNF) para cada uma das seguintes categorias: Performance, Segurança e Usabilidade.',
    template: `// RNFs para um E-commerce

// 1. Performance:
// "..."

// 2. Segurança:
// "..."

// 3. Usabilidade:
// "..."
`,
    youtubeVideoId: 'Q-BpqyOT3a8',
    detailedExplanation: `
        <h2>Definindo a Qualidade do Sistema</h2>
        <p>Requisitos Não-Funcionais (RNFs) descrevem "como" o sistema deve funcionar, não "o quê" ele deve fazer. Eles são cruciais para a qualidade e o sucesso do produto.</p>
        <h3>Dicas para Escrever Bons RNFs</h3>
        <p>A chave é ser <strong>específico e mensurável</strong>. Evite termos vagos como "rápido" ou "seguro".</p>
        <ul>
            <li><strong>Performance:</strong> Pense em tempo de resposta. Qual é o tempo máximo que uma página pode levar para carregar? Ex: "A página de detalhes do produto deve ter um LCP (Largest Contentful Paint) de menos de 2.5 segundos."</li>
            <li><strong>Segurança:</strong> Pense em proteção de dados. Como as informações sensíveis devem ser tratadas? Ex: "Toda a comunicação durante o checkout deve ser criptografada via HTTPS/TLS."</li>
            <li><strong>Usabilidade:</strong> Pense na facilidade de uso para um novo usuário. Ex: "Um usuário não registrado deve ser capaz de encontrar um produto e adicioná-lo ao carrinho em menos de 3 cliques a partir da página inicial."</li>
        </ul>
    `
};
