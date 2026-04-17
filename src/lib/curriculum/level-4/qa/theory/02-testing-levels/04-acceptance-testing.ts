import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "qa-t2-acceptance-testing",
    title: "Níveis de Teste: Testes de Aceitação",
    content: `
        <h2>O Sistema Atende aos Requisitos de Negócio?</h2>
        <p><strong>Testes de Aceitação (Acceptance Testing)</strong> são um nível formal de teste que verifica se um sistema satisfaz os critérios de aceitação definidos pelos stakeholders (clientes, usuários, Product Owner). O foco não é encontrar bugs, mas sim confirmar que o sistema está pronto para ser entregue e que atende às necessidades do negócio.</p>
        
        <h3>Quem Realiza os Testes de Aceitação?</h3>
        <p>Geralmente, são realizados pelos próprios usuários finais, clientes, ou por uma equipe de Quality Assurance (QA) dedicada, em um ambiente de homologação (Staging) que é uma réplica do ambiente de produção.</p>

        <h3>Tipos de Testes de Aceitação:</h3>
        <ul>
            <li>
                <strong>User Acceptance Testing (UAT):</strong> O tipo mais comum, onde os usuários finais testam o software para garantir que ele atenda às suas necessidades no mundo real.
            </li>
            <li>
                <strong>Business Acceptance Testing (BAT):</strong> Foca em verificar se o software atende aos objetivos de negócio e gera o valor esperado para a empresa.
            </li>
            <li>
                <strong>Alpha & Beta Testing:</strong>
                <ul>
                    <li><strong>Alpha Testing:</strong> Testes realizados internamente pela equipe de desenvolvimento ou QA antes de liberar o software para clientes externos.</li>
                    <li><strong>Beta Testing:</strong> O software é liberado para um grupo limitado de usuários externos reais, que o utilizam em seu próprio ambiente e reportam problemas.</li>
                </ul>
            </li>
        </ul>
        <p>O Teste de Aceitação é a última barreira de validação antes de uma nova funcionalidade ou produto ser lançado para o público geral.</p>
    `
};
