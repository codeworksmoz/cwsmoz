import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t19-mongodb-advanced",
    title: "MongoDB Avançado: Aggregation Pipeline, Índices e Sharding",
    youtubeVideoId: "gB1F9G0JXOo",
    content: `
        <h2>Manipulando Dados NoSQL em Escala</h2>
        <p>Para extrair o máximo do MongoDB, é preciso ir além das operações CRUD básicas e entender como processar dados e escalar o banco.</p>

        <h3>Aggregation Pipeline (Pipeline de Agregação)</h3>
        <p>É um framework para realizar transformações e agregações em dados. Consiste em um ou mais "estágios" (stages). Cada estágio transforma os documentos à medida que passam por ele. Alguns estágios comuns são:</p>
        <ul>
            <li><strong>$match:</strong> Filtra os documentos, semelhante a um <code>find()</code>.</li>
            <li><strong>$group:</strong> Agrupa documentos por um campo e pode calcular valores agregados (soma, média, etc.).</li>
            <li><strong>$sort:</strong> Ordena os documentos.</li>
            <li><strong>$lookup:</strong> Realiza um "join" com outra coleção.</li>
        </ul>
        <pre><code class="language-javascript">// Exemplo: Calcula o total de vendas por produto
db.vendas.aggregate([
  { $match: { status: "concluida" } },
  { $group: { _id: "$produtoId", totalVendido: { $sum: "$valor" } } }
])
</code></pre>
        
        <h3>Índices (Indexes)</h3>
        <p>Assim como em bancos relacionais, índices são estruturas de dados especiais que armazenam uma pequena porção dos dados da coleção de uma forma fácil de percorrer. Criar índices nos campos que são frequentemente consultados melhora drasticamente a performance das leituras.</p>
        
        <h3>Sharding</h3>
        <p>Sharding é o método que o MongoDB usa para escalar horizontalmente. Ele particiona os dados em múltiplos servidores (shards). Cada shard contém um subconjunto dos dados. Para grandes datasets, sharding permite distribuir a carga de leitura e escrita, superando as limitações de um único servidor.</p>
    `
};
