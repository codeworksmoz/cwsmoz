import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-cqrs-es",
    title: "CQRS e Event Sourcing",
    content: `
        <h2>Separando Leituras e Escritas</h2>
        <p>CQRS e Event Sourcing são dois padrões poderosos que são frequentemente usados juntos para construir sistemas complexos e escaláveis.</p>

        <h3>CQRS (Command Query Responsibility Segregation)</h3>
        <p>CQRS é um padrão que segrega as operações que leem dados (Queries) das operações que escrevem dados (Commands). Isso significa que você pode ter modelos de dados, e até mesmo bancos de dados, diferentes e otimizados para leitura e para escrita.</p>
        <ul>
            <li><strong>Lado do Comando (Write Side):</strong> Lida com a execução de comandos que alteram o estado do sistema. O foco aqui é na consistência e na validação da lógica de negócio.</li>
            <li><strong>Lado da Consulta (Read Side):</strong> Lida com a consulta de dados. O foco aqui é na performance. O modelo de leitura pode ser uma visão desnormalizada e otimizada dos dados, tornando as consultas muito rápidas.</li>
        </ul>

        <h3>Event Sourcing</h3>
        <p>Em vez de armazenar o estado atual de um objeto no banco de dados, o Event Sourcing armazena a sequência de eventos que levaram a esse estado. O estado atual é reconstruído aplicando todos os eventos em ordem.</p>
        <p>Por exemplo, em vez de ter uma tabela <code>Contas</code> com uma coluna <code>saldo</code>, você teria uma tabela <code>EventosDaConta</code> com eventos como "ContaCriada", "ValorDepositado", "ValorSacado". O saldo é calculado a qualquer momento pela soma desses eventos.</p>
        <p><strong>Benefícios:</strong> Fornece um histórico de auditoria completo, facilita a depuração e permite a criação de múltiplas projeções (modelos de leitura) a partir da mesma fonte de verdade.</p>
    `
};
