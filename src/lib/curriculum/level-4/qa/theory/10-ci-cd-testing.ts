import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "qa-t10-ci-cd-testing",
    title: "Testes no Pipeline de CI/CD",
    content: `
        <h2>Automatizando a Garantia de Qualidade</h2>
        <p>Integrar seus testes automatizados em um pipeline de <strong>Integração Contínua/Entrega Contínua (CI/CD)</strong> é a chave para obter feedback rápido e garantir que apenas código de alta qualidade chegue à produção.</p>
        
        <h3>O Papel dos Testes no Pipeline:</h3>
        <p>Um pipeline de CI/CD típico é uma sequência de estágios. Se qualquer estágio falhar, o pipeline para e o time é notificado. Os testes formam os portões de qualidade essenciais nesse processo.</p>
        
        <h3>Exemplo de um Pipeline de CI:</h3>
        <p>Quando um desenvolvedor faz um "push" de código para o repositório:</p>
        <ol>
            <li>
                <strong>Build:</strong> O pipeline começa compilando o código e construindo o artefato da aplicação (ex: uma imagem Docker).
            </li>
            <li>
                <strong>Testes Unitários:</strong> A suíte de testes unitários é executada. Como são rápidos, eles fornecem o primeiro e mais rápido feedback. Se algum teste falhar, o pipeline para aqui.
            </li>
            <li>
                <strong>Análise Estática de Código (Linting):</strong> Ferramentas analisam o código em busca de problemas de estilo, potenciais bugs e vulnerabilidades de segurança, sem executar o código.
            </li>
            <li>
                <strong>Testes de Integração:</strong> Se os testes unitários passarem, a suíte de testes de integração é executada. Eles podem precisar de serviços externos (como um banco de dados de teste) que são iniciados pelo pipeline.
            </li>
            <li>
                <strong>Build do Artefato:</strong> Se todos os testes passarem, o artefato final (ex: imagem Docker) é construído e enviado para um registro.
            </li>
        </ol>

        <h3>E no CD (Entrega Contínua)?</h3>
        <p>Após o CI, o pipeline de CD assume:</p>
        <ul>
            <li>
                <strong>Deploy em Homologação (Staging):</strong> O artefato é implantado em um ambiente de homologação, que é uma réplica do ambiente de produção.
            </li>
            <li>
                <strong>Testes de Aceitação / E2E:</strong> A suíte de testes End-to-End é executada contra o ambiente de homologação para validar os fluxos críticos de negócio.
            </li>
            <li>
                <strong>Deploy em Produção:</strong> Se todos os testes de aceitação passarem, o pipeline pode implantar automaticamente em produção (usando estratégias como Blue-Green ou Canary para reduzir o risco).
            </li>
        </ul>
        <p>A automação de testes no pipeline de CI/CD garante que cada mudança seja validada de forma consistente, permitindo que as equipes entreguem software de forma rápida e com confiança.</p>
    `
};
