import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "ds-t-hash-tables",
    title: "Tabelas Hash (Hash Tables)",
    content: `
        <h2>Mapeando Chaves a Valores</h2>
        <p>Uma <strong>Tabela Hash</strong> é uma estrutura de dados que implementa um tipo de dado associativo (um mapa ou dicionário), que pode mapear chaves a valores. Ela usa uma <strong>função de hash</strong> para calcular um índice, ou "hash code", em um array de "buckets" ou "slots", a partir do qual o valor desejado pode ser encontrado.</p>
        
        <h3>Funcionamento:</h3>
        <ol>
            <li>Você fornece um par chave-valor.</li>
            <li>A função de hash é aplicada à chave para gerar um índice.</li>
            <li>O valor é armazenado no bucket correspondente a esse índice.</li>
        </ol>
        <p>O objetivo é ter uma complexidade de tempo média de <strong>O(1)</strong> para inserção, busca e remoção.</p>

        <h3>Tratamento de Colisões</h3>
        <p>Uma <strong>colisão</strong> ocorre quando duas chaves diferentes produzem o mesmo índice de hash. Existem duas estratégias principais para lidar com isso:</p>
        <ul>
            <li><strong>Encadeamento (Separate Chaining):</strong> Cada bucket contém uma lista ligada de todos os pares chave-valor que colidiram para aquele índice.</li>
            <li><strong>Endereçamento Aberto (Open Addressing):</strong> Se um bucket está ocupado, o algoritmo sonda (procura) pelo próximo bucket livre na tabela para armazenar o valor.</li>
        </ul>
        
        <h3>Fator de Carga (Load Factor)</h3>
        <p>É a medida de quão cheia a tabela hash está (<code>número de itens / número de buckets</code>). Um fator de carga alto aumenta a probabilidade de colisões e degrada a performance. Quando o fator de carga excede um certo limiar, a tabela geralmente é redimensionada (um processo caro).</p>
    `
};
