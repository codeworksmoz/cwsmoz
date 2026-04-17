import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "qa-t2-integration-testing",
    title: "Níveis de Teste: Testes de Integração",
    content: `
        <h2>Verificando a Colaboração entre Unidades</h2>
        <p>Enquanto os testes unitários verificam as peças isoladamente, os <strong>Testes de Integração</strong> verificam se essas peças funcionam corretamente quando conectadas.</p>
        <p>Eles testam a interação entre dois ou mais módulos do sistema. O escopo de um teste de integração pode variar bastante.</p>

        <h3>Exemplos de Integrações a serem Testadas:</h3>
        <ul>
            <li>
                <strong>Entre Módulos de Código:</strong> Um componente de UI que chama um hook de busca de dados. O teste verifica se o componente renderiza os dados corretos retornados pelo hook.
            </li>
            <li>
                <strong>Com o Banco de Dados:</strong> Um método de repositório que salva e busca dados. O teste executa a operação contra um banco de dados real (geralmente um banco de testes separado) para garantir que a consulta SQL está correta.
            </li>
            <li>
                <strong>Com APIs Externas:</strong> Um serviço que consome uma API de terceiros. O teste pode fazer uma chamada real para a API (em um ambiente de sandbox) ou usar mocks para simular a resposta da API.
            </li>
        </ul>
        <p>Testes de integração são mais lentos que os testes unitários, pois envolvem mais partes do sistema, mas são essenciais para encontrar problemas nas "costuras" entre os diferentes módulos.</p>
    `
};
