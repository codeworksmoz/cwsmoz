import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t18-postgresql-advanced",
    title: "PostgreSQL Avançado: Consultas Complexas, CTEs e Funções de Janela",
    youtubeVideoId: "d3esceE9B1I",
    content: `
        <h2>Indo Além do SELECT *</h2>
        <p>PostgreSQL é um banco de dados relacional objeto extremamente poderoso. Para usá-lo efetivamente em aplicações complexas, é preciso dominar suas funcionalidades avançadas de consulta.</p>
        
        <h3>Common Table Expressions (CTEs)</h3>
        <p>CTEs, definidas com a cláusula <code>WITH</code>, permitem que você crie subconsultas temporárias e nomeadas que podem ser referenciadas na consulta principal. Elas tornam consultas grandes e complexas muito mais legíveis e organizadas.</p>
        <pre><code class="language-sql">WITH usuarios_ativos AS (
  SELECT id, nome FROM usuarios WHERE status = 'ativo'
)
SELECT nome FROM usuarios_ativos WHERE id > 100;
</code></pre>
        
        <h3>Window Functions (Funções de Janela)</h3>
        <p>Funções de janela realizam um cálculo sobre um conjunto de linhas da tabela que estão de alguma forma relacionadas à linha atual. Ao contrário das funções de agregação (como <code>SUM()</code> ou <code>COUNT()</code>), elas não colapsam as linhas em um único resultado.</p>
        <p>Elas são perfeitas para tarefas como calcular médias móveis, rankings ou somas acumuladas.</p>
        <pre><code class="language-sql">SELECT
  nome_produto,
  preco,
  -- Cria um ranking de produtos do mais caro para o mais barato
  RANK() OVER (ORDER BY preco DESC) as ranking_de_preco
FROM produtos;
</code></pre>
    `
};
