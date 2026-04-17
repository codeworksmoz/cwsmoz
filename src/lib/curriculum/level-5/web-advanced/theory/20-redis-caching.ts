import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t20-redis-caching",
    title: "Redis: Caching, Estruturas de Dados e Pub/Sub",
    youtubeVideoId: "G1rOthE-u0w",
    content: `
        <h2>Acelere sua Aplicação com Caching em Memória</h2>
        <p>Redis é um banco de dados de chave-valor em memória, extremamente rápido e versátil, frequentemente usado como um cache de alta performance e como um message broker.</p>

        <h3>Estratégias de Caching</h3>
        <p>Caching é a prática de armazenar resultados de operações caras (como consultas a um banco de dados) para que possam ser servidos mais rapidamente em requisições futuras.</p>
        <ul>
            <li><strong>Cache-Aside:</strong> A aplicação tenta buscar o dado do cache. Se não encontrar (cache miss), ela busca do banco de dados, salva o resultado no cache e o retorna.</li>
            <li><strong>Write-Through:</strong> Quando a aplicação escreve no banco de dados, ela também escreve no cache. Garante consistência, mas com maior latência de escrita.</li>
        </ul>
        <p>Redis é perfeito para cache, pois as leituras e escritas em memória são ordens de magnitude mais rápidas do que em disco.</p>

        <h3>Estruturas de Dados Avançadas</h3>
        <p>Redis não é apenas um simples chave-valor. Ele suporta estruturas de dados complexas como:</p>
        <ul>
            <li><strong>Lists:</strong> Usadas para implementar filas.</li>
            <li><strong>Sets:</strong> Coleções de strings únicas não ordenadas.</li>
            <li><strong>Sorted Sets:</strong> Sets onde cada membro tem um score, permitindo ordenação. Ótimo para leaderboards.</li>
            <li><strong>Hashes:</strong> Mapas de campos e valores, ideais para armazenar objetos.</li>
        </ul>

        <h3>Pub/Sub (Publish/Subscribe)</h3>
        <p>Redis fornece um sistema de mensageria onde "publishers" enviam mensagens para "channels", sem saber quem são os "subscribers". Subscribers que estão escutando um canal recebem as mensagens em tempo real. É uma forma simples e eficaz de implementar comunicação entre diferentes partes de um sistema distribuído.</p>
    `
};
