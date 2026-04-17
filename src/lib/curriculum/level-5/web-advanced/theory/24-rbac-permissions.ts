import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t24-rbac-permissions",
    title: "Autorização com RBAC (Role-Based Access Control)",
    youtubeVideoId: "C4Y_1NBEV8Y",
    content: `
        <h2>Quem Pode Fazer o Quê?</h2>
        <p>Depois da autenticação (saber quem o usuário é), vem a <strong>autorização</strong> (decidir o que ele pode fazer). <strong>Role-Based Access Control (RBAC)</strong> é um modelo de controle de acesso popular onde as permissões são associadas a papéis (roles), e os usuários são atribuídos a esses papéis.</p>
        <p>Isso é muito mais escalável do que atribuir permissões diretamente a cada usuário.</p>

        <h3>Exemplo de Modelo RBAC:</h3>
        <ul>
            <li><strong>Usuários:</strong> Ana, Beto, Carlos</li>
            <li><strong>Papéis (Roles):</strong> <code>leitor</code>, <code>editor</code>, <code>admin</code></li>
            <li><strong>Permissões:</strong> <code>ler_artigo</code>, <code>escrever_artigo</code>, <code>deletar_artigo</code>, <code>gerenciar_usuarios</code></li>
        </ul>
        <p><strong>Associações:</strong></p>
        <ul>
            <li>O papel <code>leitor</code> tem a permissão <code>ler_artigo</code>.</li>
            <li>O papel <code>editor</code> tem as permissões <code>ler_artigo</code> e <code>escrever_artigo</code>.</li>
            <li>O papel <code>admin</code> tem todas as permissões.</li>
        </ul>
        <p>Se a Ana for uma <code>editora</code> e o Beto um <code>admin</code>, a lógica para verificar se eles podem deletar um artigo é simples: basta verificar se o papel deles contém a permissão <code>deletar_artigo</code>.</p>
        
        <h3>Implementação</h3>
        <p>Normalmente, você armazena o papel de um usuário no seu banco de dados. Ao fazer o login, o papel é incluído no token JWT ou no objeto de sessão. Em cada requisição que exige uma permissão específica, seu backend verifica se o papel do usuário atual tem essa permissão antes de executar a ação.</p>
    `
};
