import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'db-ex-1', 
    title: 'Escrevendo Consultas SQL', 
    statement: 'Dada uma tabela `Produtos` (id, nome, preco, categoria) e `Pedidos` (id, produto_id, quantidade), escreva uma consulta SQL para encontrar o nome de todos os produtos da categoria "Eletrônicos" com preço acima de 500.', 
    template: `SELECT nome
FROM Produtos
WHERE ...
`,
    youtubeVideoId: 'z2k2eALe-iE',
    detailedExplanation: `
        <h2>Consultando um Banco de Dados Relacional</h2>
        <p>A cláusula <code>SELECT</code> especifica as colunas que você quer, <code>FROM</code> a tabela, e <code>WHERE</code> filtra as linhas com base em condições.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li>Comece com <code>SELECT nome FROM Produtos</code>.</li>
            <li>Adicione a cláusula <code>WHERE</code> para filtrar as linhas.</li>
            <li>Use a condição <code>categoria = 'Eletrônicos'</code> para selecionar a categoria correta.</li>
            <li>Use o operador <code>AND</code> para adicionar a segunda condição: <code>preco > 500</code>.</li>
        </ol>
    `
};
