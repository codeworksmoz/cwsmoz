import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'fcc-qa-proj-1', 
    title: 'Análise de Projeto: Conversor de Métricas', 
    statement: 'Para a certificação de Garantia de Qualidade, um dos projetos é um Conversor de Métricas. Descreva quais testes de unidade e de integração seriam necessários para garantir a qualidade desta aplicação.', 
    template: `// Funcionalidade: Converter valores entre unidades (ex: gal para L, lbs para kg, mi para km).

// Testes de Unidade (para a lógica de conversão):
// 1. ... (Testar a conversão de cada unidade individualmente)
// 2. ... (Testar com números inteiros)
// 3. ... (Testar com números decimais)
// 4. ... (Testar uma entrada inválida, ex: 'g_l')

// Testes de Integração/API (para as rotas):
// 1. ... (Testar a rota GET com uma entrada válida, ex: /api/convert?input=10L)
// 2. ... (Testar a rota com uma unidade inválida)
// 3. ... (Testar a rota com um número inválido)
`,
    youtubeVideoId: 'vB-ym_h72cE',
    detailedExplanation: `
        <h2>Testando a Lógica e a API</h2>
        <p>A chave para este projeto é separar e testar as diferentes partes do sistema: a lógica de conversão pura e as rotas da API que a expõem.</p>
        <h3>Plano de Testes</h3>
        <ol>
            <li><strong>Testes de Unidade:</strong> Crie um arquivo de teste separado para suas funções de lógica de conversão. Use a biblioteca de asserções <strong>Chai</strong>. Teste cada conversão possível (ex: gal para L, L para gal) com valores conhecidos para garantir que os cálculos estão corretos. Teste também como a lógica lida com entradas inválidas.</li>
            <li><strong>Testes de Integração:</strong> Use <strong>Chai-HTTP</strong> para fazer requisições HTTP reais à sua aplicação em execução. Teste se a API responde com o status 200 e o JSON correto para entradas válidas. Teste também se ela retorna as mensagens de erro corretas ("invalid unit", "invalid number") para entradas inválidas.</li>
        </ol>
    `
};
