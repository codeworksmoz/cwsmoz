import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "req-t6-nfr-performance",
    title: "RNFs: Performance",
    content: `
        <h2>Quão Rápido e Eficiente o Sistema Deve Ser?</h2>
        <p><strong>Requisitos Não-Funcionais (RNFs) de Performance</strong> definem os atributos de um sistema relacionados à velocidade, responsividade e eficiência no uso de recursos. Eles especificam "quão bem" uma função deve ser executada.</p>
        
        <h3>Métricas Comuns de Performance:</h3>
        <ul>
            <li>
                <strong>Tempo de Resposta (Latência):</strong> O tempo que o sistema leva para responder a uma requisição do usuário.
                <br/><em>Exemplo: "A página de resultados de busca deve carregar em menos de 3 segundos."</em>
            </li>
            <li>
                <strong>Throughput (Vazão):</strong> O número de requisições ou transações que o sistema pode processar em um determinado período de tempo.
                <br/><em>Exemplo: "O sistema de pagamento deve ser capaz de processar 500 transações por segundo."</em>
            </li>
            <li>
                <strong>Utilização de Recursos:</strong> Quanta CPU, memória, disco ou banda de rede o sistema consome sob uma carga específica.
                <br/><em>Exemplo: "O uso de CPU do servidor não deve exceder 80% durante o horário de pico."</em>
            </li>
        </ul>

        <h3>Por que são importantes?</h3>
        <p>Um sistema que é funcionalmente correto, mas lento, será frustrante para o usuário e pode ser considerado um fracasso. Requisitos de performance têm um impacto direto na experiência do usuário e nos custos de infraestrutura.</p>
        <p>Eles devem ser <strong>quantificáveis e testáveis</strong>. Um requisito como "o sistema deve ser rápido" é inútil. Um requisito como "95% das chamadas à API X devem retornar em menos de 200ms" é específico e pode ser verificado através de testes de performance.</p>
    `
};
