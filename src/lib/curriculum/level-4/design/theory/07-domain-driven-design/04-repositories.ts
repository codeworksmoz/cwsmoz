import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-ddd-repositories",
    title: "DDD: Repositórios (Repositories)",
    content: `
        <h2>Abstraindo a Persistência</h2>
        <p>O padrão <strong>Repositório</strong> medeia entre o domínio e as camadas de mapeamento de dados, agindo como uma coleção em memória de objetos de domínio.</p>
        <p>Ele fornece uma interface para o código cliente que permite buscar e salvar agregados do domínio sem precisar se preocupar com os detalhes de como eles são armazenados (seja em um banco de dados SQL, NoSQL ou em um arquivo).</p>
        
        <h3>Propósito</h3>
        <p>O principal objetivo do Repositório é isolar a lógica de negócio da lógica de acesso a dados. O seu domínio não deve saber nada sobre SQL ou qualquer outra tecnologia de banco de dados.</p>
        
        <h3>Interface Típica de um Repositório</h3>
        <p>A interface de um repositório geralmente se parece com uma coleção, com métodos como:</p>
        <ul>
            <li><code>findById(id)</code>: Busca um agregado pelo seu ID.</li>
            <li><code>save(aggregate)</code>: Salva um agregado novo ou atualizado.</li>
            <li><code>delete(aggregate)</code>: Remove um agregado.</li>
            <li>Métodos de consulta mais específicos (ex: <code>findByEmail(email)</code>).</li>
        </ul>
        <pre><code class="language-typescript">// A interface é definida no domínio
interface RepositorioDeUsuarios {
    buscarPorId(id: string): Promise<Usuario | null>;
    salvar(usuario: Usuario): Promise<void>;
}

// A implementação fica na camada de infraestrutura
class RepositorioDeUsuariosPostgres implements RepositorioDeUsuarios {
    // ... implementa os métodos usando a lógica do PostgreSQL
}
</code></pre>
        <p>Isso permite que você troque a implementação da persistência (por exemplo, de PostgreSQL para MongoDB) sem alterar a lógica de negócio.</p>
    `
};
