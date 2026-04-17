import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-ddd-aggregates",
    title: "DDD: Agregados (Aggregates)",
    content: `
        <h2>Gerenciando a Complexidade com Limites de Consistência</h2>
        <p>Um <strong>Agregado</strong> é um cluster de objetos de domínio (entidades e objetos de valor) que podem ser tratados como uma única unidade. Por exemplo, um <code>Pedido</code> pode ser um agregado que inclui uma lista de <code>ItensDePedido</code> e um <code>EndereçoDeEntrega</code>.</p>
        
        <h3>A Raiz do Agregado (Aggregate Root)</h3>
        <p>Cada agregado tem uma <strong>Raiz</strong>, que é uma entidade específica dentro do agregado. A raiz é o único membro do agregado que objetos externos têm permissão para referenciar. Qualquer referência a objetos internos deve passar pela raiz.</p>
        <p>A raiz é responsável por garantir a consistência das mudanças dentro do agregado. Por exemplo, ao adicionar um item a um pedido, você chamaria um método <code>adicionarItem()</code> no objeto <code>Pedido</code> (a raiz), que então validaria as regras de negócio (como verificar o limite de itens) antes de adicionar o <code>ItemDePedido</code> à sua coleção interna.</p>

        <h3>Regras dos Agregados:</h3>
        <ol>
            <li>A raiz do agregado é uma entidade globalmente identificável. Entidades internas ao agregado têm apenas identidade local.</li>
            <li>Objetos de fora do agregado só podem manter referências à raiz.</li>
            <li>Apenas a raiz do agregado pode ser carregada diretamente do banco de dados. Qualquer outra coisa deve ser carregada através da travessia a partir da raiz.</li>
            <li>As operações de modificação (comandos) só podem ser chamadas na raiz do agregado.</li>
        </ol>
        <p>Agregados ajudam a gerenciar a complexidade, mantendo a consistência transacional dentro de um limite bem definido.</p>
    `
};
