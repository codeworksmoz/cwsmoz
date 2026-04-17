import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "qa-t5-fakes",
    title: "Dublês de Teste: Fakes",
    content: `
        <h2>Implementações Simplificadas para Testes</h2>
        <p>Um <strong>Fake</strong> é um tipo de dublê de teste que tem uma implementação funcional, mas muito mais simples do que a implementação de produção. Ele não usa atalhos como um Stub (que retorna valores fixos) e não se concentra em verificar interações como um Mock. Ele realmente funciona, mas de uma forma que é inadequada para produção (por exemplo, usando um banco de dados em memória em vez de um banco de dados real).</p>
        
        <h3>Características de um Fake:</h3>
        <ul>
            <li>
                <strong>Implementação de Trabalho:</strong> Ele tem lógica de verdade, não apenas valores codificados.
            </li>
            <li>
                <strong>Alternativa Leve:</strong> Substitui uma dependência pesada (como um banco de dados ou um serviço de pagamento) por uma versão leve que se comporta de maneira semelhante, mas é mais rápida e não depende de sistemas externos.
            </li>
        </ul>
        
        <h3>Exemplo: Repositório Fake</h3>
        <p>Imagine que você tem uma interface <code>RepositorioDeUsuarios</code> que, em produção, é implementada por uma classe que fala com um banco de dados PostgreSQL. Para os testes, você não quer depender de um banco de dados real.</p>
        <p>Você pode criar um <code>RepositorioDeUsuariosFake</code> que implementa a mesma interface, mas usa um simples array em memória para armazenar os usuários. Ele terá a lógica para adicionar, buscar e remover usuários desse array.</p>
        
        <pre><code class="language-typescript">// Interface do Repositório
interface RepositorioDeUsuarios {
    adicionar(usuario: Usuario): void;
    buscarPorId(id: string): Usuario | null;
}

// Implementação Fake para testes
class RepositorioDeUsuariosFake implements RepositorioDeUsuarios {
    private usuarios: Usuario[] = [];

    public adicionar(usuario: Usuario): void {
        this.usuarios.push(usuario);
    }

    public buscarPorId(id: string): Usuario | null {
        return this.usuarios.find(u => u.id === id) || null;
    }
}
</code></pre>
        <p>Ao testar um serviço que depende de <code>RepositorioDeUsuarios</code>, você pode injetar a implementação Fake. Isso permite testar a lógica do serviço de forma rápida e isolada, sem a complexidade e a lentidão de um banco de dados real, mas com um comportamento mais realista do que um simples Stub.</p>
    `
};
