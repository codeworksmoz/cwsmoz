import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-ddd-domain-events",
    title: "DDD: Eventos de Domínio (Domain Events)",
    content: `
        <h2>Capturando o que Aconteceu no Domínio</h2>
        <p>Um <strong>Evento de Domínio</strong> é um objeto que representa algo que aconteceu no domínio e que é importante para outros especialistas do domínio (ou outras partes do sistema).</p>
        <p>Eventos de domínio são uma forma poderosa de desacoplar diferentes partes do seu sistema. Quando um agregado realiza uma ação, em vez de chamar diretamente outros agregados ou serviços, ele simplesmente publica um evento.</p>
        
        <h3>Exemplo:</h3>
        <p>Quando um novo <code>Pedido</code> é criado (status muda para "Pago"), em vez de o agregado <code>Pedido</code> chamar diretamente um serviço de notificação e um serviço de logística, ele simplesmente publica um evento <code>PedidoPago</code>.</p>
        
        <p>Outras partes do sistema, chamadas de "subscribers" ou "handlers", podem então ouvir esse evento e reagir de forma independente:</p>
        <ul>
            <li>O serviço de notificação ouve o <code>PedidoPago</code> e envia um email de confirmação para o cliente.</li>
            <li>O serviço de logística ouve o <code>PedidoPago</code> e inicia o processo de envio do produto.</li>
        </ul>
        
        <h3>Características dos Eventos de Domínio:</h3>
        <ul>
            <li><strong>São Fatos do Passado:</strong> Seus nomes devem estar no tempo verbal passado (ex: <code>PedidoCriado</code>, <code>UsuarioRegistrado</code>).</li>
            <li><strong>São Imutáveis:</strong> Uma vez que um evento aconteceu, ele não pode ser alterado.</li>
            <li><strong>Contêm Informações:</strong> Carregam dados relevantes sobre o que aconteceu.</li>
        </ul>
        <p>Eventos de domínio são a base para a Arquitetura Orientada a Eventos e permitem que sistemas complexos permaneçam desacoplados e resilientes.</p>
    `
};
