import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'qa-int-external',
    title: 'Teste de Integração: Serviço Externo',
    statement: 'Escreva um teste de integração para uma função que busca dados de uma API externa (ex: uma API de cotação de moedas). Use uma ferramenta como o `nock` ou o `msw` para interceptar a chamada HTTP e retornar uma resposta mockada, testando como seu sistema lida com a resposta.',
    template: `// Use uma sintaxe de teste como Jest ou Vitest
// Assuma que a biblioteca de mock (nock/msw) está configurada.

// import nock from 'nock';

// describe('servicoDeCotacao', () => {
//   it('deve buscar e processar a cotação do dólar corretamente', async () => {
//     // Arrange: Configure o mock para a API externa
//     // nock('https://api.cotacao.com')
//     //   .get('/dolar')
//     //   .reply(200, { valor: 5.25 });
//
//     // Act: Chame sua função que busca os dados
//
//     // Assert: Verifique se sua função retornou o valor processado esperado
//   });
// });

// Escreva seu teste abaixo:
`,
    youtubeVideoId: 'Bsk-_i_1W-Y',
    detailedExplanation: `
        <h2>Testando a Integração com o Mundo Exterior</h2>
        <p>Quando seu código depende de uma API de terceiros, você não quer fazer chamadas reais a essa API em seus testes automatizados. Seria lento, caro e instável. Em vez disso, nós interceptamos a chamada de rede e fornecemos uma resposta controlada.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>Mock da API:</strong> Antes do teste, use uma biblioteca como <code>nock</code> para especificar qual endpoint HTTP você espera que seja chamado (<code>.get('/dolar')</code>) e qual resposta deve ser retornada (<code>.reply(200, ...)</code>).</li>
            <li><strong>Act:</strong> Chame a sua função ou método que, internamente, usa <code>fetch</code> ou <code>axios</code> para chamar a API externa.</li>
            <li><strong>Assert:</strong> Verifique se a sua função processou corretamente a resposta mockada que você forneceu e retornou o resultado esperado.</li>
        </ol>
    `
};
