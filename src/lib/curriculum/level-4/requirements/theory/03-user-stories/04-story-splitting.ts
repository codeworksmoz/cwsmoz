import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "req-t3-story-splitting",
    title: "Histórias de Usuário: Quebrando Épicos",
    content: `
        <h2>Transformando Histórias Grandes em Pequenas</h2>
        <p>Muitas vezes, uma funcionalidade desejada é muito grande para caber em uma única Sprint. Chamamos essas histórias grandes de <strong>Épicos</strong>. Quebrar épicos em histórias de usuário menores e verticais é uma habilidade crucial para o planejamento ágil.</p>
        <p>O objetivo é criar fatias verticais e funcionais de trabalho, onde cada fatia entrega um pequeno valor para o usuário, em vez de fatias horizontais baseadas em camadas técnicas (ex: "criar a tabela no banco", "criar a API", "criar a UI").</p>

        <h3>Estratégias Comuns para Quebrar Histórias:</h3>
        <p>O acrônimo <strong>SPIDR</strong> resume várias técnicas populares:</p>
        <ul>
            <li>
                <strong>S - Spikes:</strong> Crie uma história de pesquisa (um "spike") para investigar uma área de incerteza técnica. O resultado de um spike não é código de produção, mas sim conhecimento, que permite quebrar a história original com mais segurança.
            </li>
            <li>
                <strong>P - Paths (Caminhos):</strong> Quebre a história com base nos diferentes caminhos que um usuário pode seguir. Considere o "caminho feliz" (o cenário ideal) como uma história e os caminhos alternativos ou de erro como outras histórias. 
                <br/><em>Exemplo: 1) Pagar com cartão de crédito. 2) Pagar com PayPal. 3) Lidar com falha no pagamento.</em>
            </li>
            <li>
                <strong>I - Interfaces:</strong> Se a funcionalidade afeta diferentes interfaces (ex: mobile e web), considere criar histórias separadas para cada uma, se fizer sentido.
            </li>
            <li>
                <strong>D - Data (Dados):</strong> Quebre a história com base nos tipos de dados que ela manipula.
                <br/><em>Exemplo: 1) Pesquisar por produtos. 2) Pesquisar por artigos do blog.</em>
            </li>
            <li>
                <strong>R - Rules (Regras):</strong> Quebre a história com base em regras de negócio ou tecnológicas.
                <br/><em>Exemplo: 1) Suportar a regra de imposto A. 2) Suportar a regra de imposto B.</em>
            </li>
        </ul>
        <p>Quebrar histórias de forma eficaz permite um fluxo de trabalho mais suave, feedback mais rápido e entrega de valor incremental.</p>
    `
};
