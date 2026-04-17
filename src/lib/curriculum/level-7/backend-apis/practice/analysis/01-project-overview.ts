import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'fcc-be-proj-1', 
    title: 'Análise de Projeto: API de Timestamp', 
    statement: 'O primeiro projeto da certificação de Back-End é criar um microserviço de timestamp. Descreva a principal rota da API, o que ela deve receber como entrada e qual deve ser o formato da saída JSON.', 
    template: `// Endpoint Principal:
// - Rota: /api/timestamp/:date_string?
// - Método HTTP: GET

// Entradas Possíveis:
// 1. Uma string de data válida (ex: "2015-12-25")
// 2. Um timestamp Unix (em milissegundos, ex: 1451001600000)
// 3. Nenhuma data (usar a data e hora atuais)

// Formato da Saída JSON (Exemplo para uma entrada válida):
// {
//   "unix": ...,
//   "utc": "..."
// }

// Formato da Saída JSON (Exemplo para uma entrada inválida):
// {
//   "error": "Invalid Date"
// }
`,
    youtubeVideoId: '4_9-1g_zI-o',
    detailedExplanation: `
        <h2>Construindo seu Primeiro Microserviço</h2>
        <p>Este projeto foca em entender o roteamento básico de uma API, o processamento de parâmetros de URL e a manipulação de datas em JavaScript.</p>
        <h3>Lógica de Implementação</h3>
        <ol>
            <li>Crie um servidor Express com uma única rota GET que aceite um parâmetro de data opcional.</li>
            <li>Se nenhum parâmetro de data for fornecido, use <code>new Date()</code> para obter a data atual.</li>
            <li>Se um parâmetro for fornecido, tente convertê-lo para um objeto <code>Date</code>. Verifique se a string contém apenas números para tratá-la como um timestamp Unix.</li>
            <li>Use o método <code>.toUTCString()</code> para obter a data no formato UTC e <code>.getTime()</code> para obter o timestamp Unix.</li>
            <li>Se o objeto <code>Date</code> resultante for inválido, retorne o JSON de erro especificado.</li>
            <li>Caso contrário, retorne o JSON de sucesso com as chaves <code>unix</code> e <code>utc</code>.</li>
        </ol>
    `
};
