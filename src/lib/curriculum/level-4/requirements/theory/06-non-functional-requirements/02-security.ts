import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "req-t6-nfr-security",
    title: "RNFs: Segurança",
    content: `
        <h2>Quão Protegido o Sistema Deve Ser?</h2>
        <p><strong>Requisitos Não-Funcionais (RNFs) de Segurança</strong> especificam as regras e medidas para proteger o sistema e seus dados contra acesso não autorizado, ataques e outras ameaças.</p>
        
        <h3>Categorias de Requisitos de Segurança:</h3>
        <ul>
            <li>
                <strong>Autenticação:</strong> Como o sistema verifica a identidade de um usuário.
                <br/><em>Exemplo: "O sistema deve exigir autenticação de dois fatores (2FA) para todos os usuários administradores."</em>
            </li>
            <li>
                <strong>Autorização (Controle de Acesso):</strong> O que um usuário autenticado tem permissão para fazer.
                <br/><em>Exemplo: "Apenas usuários com o papel 'gerente' podem aprovar relatórios de despesas."</em>
            </li>
            <li>
                <strong>Confidencialidade (Criptografia):</strong> Como os dados são protegidos contra visualização não autorizada, tanto em trânsito quanto em repouso.
                <br/><em>Exemplo: "Toda a comunicação entre o cliente e o servidor deve ser criptografada usando TLS 1.2 ou superior."</em> ou <em>"As senhas dos usuários devem ser armazenadas no banco de dados usando um algoritmo de hashing forte (ex: bcrypt)."</em>
            </li>
            <li>
                <strong>Integridade de Dados:</strong> Medidas para garantir que os dados não sejam corrompidos ou modificados sem autorização.
            </li>
            <li>
                <strong>Auditoria e Logging:</strong> O que o sistema deve registrar para fins de segurança.
                <br/><em>Exemplo: "O sistema deve registrar todas as tentativas de login falhas, incluindo o endereço IP de origem."</em>
            </li>
        </ul>
        <p>A segurança deve ser uma consideração desde o início do projeto ("security by design"), não algo a ser adicionado no final. Definir RNFs de segurança claros é o primeiro passo para construir um sistema robusto e confiável.</p>
    `
};
