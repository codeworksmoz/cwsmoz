import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "db-t1",
    title: "Bancos de Dados Relacionais e SQL",
    youtubeVideoId: "z2k2eALe-iE",
    content: `
        <h2>Armazenando Dados de Forma Estruturada</h2>
        <p>Bancos de dados são coleções organizadas de dados. O tipo mais comum é o <strong>banco de dados relacional</strong>, que organiza os dados em tabelas com linhas e colunas.</p>
        <h3>SQL (Structured Query Language)</h3>
        <p>SQL é a linguagem padrão para interagir com bancos de dados relacionais. Com ela, você pode:</p>
        <ul>
            <li><strong>Consultar dados:</strong> <code>SELECT * FROM usuarios;</code></li>
            <li><strong>Inserir dados:</strong> <code>INSERT INTO usuarios (nome, email) VALUES ('Ana', 'ana@exemplo.com');</code></li>
            <li><strong>Atualizar dados:</strong> <code>UPDATE usuarios SET nome = 'Ana Silva' WHERE id = 1;</code></li>
            <li><strong>Deletar dados:</strong> <code>DELETE FROM usuarios WHERE id = 1;</code></li>
        </ul>
    `
};
