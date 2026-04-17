import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'db-ex-2', 
    title: 'Normalização de Dados', 
    statement: 'Você tem uma tabela `Pedidos` com as colunas (pedido_id, data_pedido, cliente_nome, cliente_endereco). Identifique por que esta tabela viola a Primeira Forma Normal (1NF) e como você a corrigiria.', 
    template: `// Problema de Normalização:
// ...

// Solução:
// ...
`,
    youtubeVideoId: 'z2k2eALe-iE',
    detailedExplanation: `
        <h2>Evitando Redundância e Inconsistência</h2>
        <p>Normalização é o processo de organizar as colunas e tabelas de um banco de dados para minimizar a redundância de dados. A Primeira Forma Normal (1NF) afirma que a tabela deve ter uma chave primária e que os valores em cada coluna de uma tabela devem ser atômicos (indivisíveis).</p>
        <h3>Passo a Passo da Análise</h3>
        <ol>
            <li><strong>Problema:</strong> A coluna <code>cliente_endereco</code> provavelmente não é atômica. Um endereço contém rua, cidade, código postal, etc. Armazená-lo como uma única string torna a busca e a atualização difíceis. Além disso, se um cliente faz múltiplos pedidos, seu nome e endereço são repetidos em cada linha, causando redundância.</li>
            <li><strong>Solução:</strong> Crie uma nova tabela <code>Clientes</code> com as colunas (cliente_id, nome, endereco, etc.). Na tabela <code>Pedidos</code>, remova as colunas de cliente e adicione uma coluna <code>cliente_id</code> como chave estrangeira (foreign key) que se refere à tabela <code>Clientes</code>.</li>
        </ol>
    `
};
