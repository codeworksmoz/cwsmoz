import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "qa-t2-e2e-testing",
    title: "Níveis de Teste: Testes End-to-End (E2E)",
    content: `
        <h2>Simulando a Jornada do Usuário</h2>
        <p><strong>Testes End-to-End (E2E)</strong> são o nível mais alto de teste na pirâmide. Eles validam um fluxo de trabalho completo da aplicação da perspectiva do usuário, do início ao fim.</p>
        <p>Um teste E2E automatiza um navegador real para executar ações como se fosse um usuário: clicar em botões, preencher formulários, navegar entre páginas e verificar se a UI responde como esperado.</p>
        
        <h3>O que um teste E2E verifica?</h3>
        <p>Ele garante que todos os componentes do sistema — o frontend, o backend, o banco de dados, as APIs externas, a infraestrutura — funcionam juntos corretamente em um cenário de uso real.</p>
        
        <h3>Exemplo de um Fluxo E2E:</h3>
        <p>Para um e-commerce, um teste E2E poderia simular os seguintes passos:</p>
        <ol>
            <li>Acessar a página inicial.</li>
            <li>Buscar por um produto.</li>
            <li>Adicionar o produto ao carrinho.</li>
            <li>Ir para o checkout.</li>
            <li>Preencher os dados de pagamento e finalizar a compra.</li>
            <li>Verificar se a página de "pedido concluído" é exibida.</li>
        </ol>

        <h3>Desafios:</h3>
        <ul>
            <li><strong>Lentidão:</strong> São muito mais lentos de executar do que testes unitários ou de integração.</li>
            <li><strong>Fragilidade (Flakiness):</strong> Podem falhar por razões não relacionadas a bugs no código, como instabilidades de rede ou pequenas mudanças na UI.</li>
            <li><strong>Custo:</strong> São caros para escrever e manter.</li>
        </ul>
        <p>Por esses motivos, os testes E2E devem ser usados com moderação para cobrir apenas os fluxos mais críticos da aplicação.</p>
    `
};
