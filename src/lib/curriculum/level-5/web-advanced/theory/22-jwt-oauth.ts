import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t22-jwt-oauth",
    title: "Autenticação com JWT e OAuth 2.0",
    youtubeVideoId: "kP3zzfkPuLs",
    content: `
        <h2>Verificando a Identidade em Aplicações Modernas</h2>
        <p>Autenticação é o processo de verificar quem um usuário é. Em APIs sem estado (stateless), os métodos mais comuns são JWT e OAuth.</p>
        
        <h3>JSON Web Tokens (JWT)</h3>
        <p>JWT é um padrão aberto para criar tokens de acesso que afirmam um número de "claims" (alegações). Um JWT é uma string compacta e autossuficiente que consiste em três partes separadas por pontos:</p>
        <ol>
            <li><strong>Header:</strong> Contém o tipo de token e o algoritmo de assinatura.</li>
            <li><strong>Payload:</strong> Contém as "claims", como o ID do usuário, papéis (roles) e data de expiração.</li>
            <li><strong>Signature:</strong> Para verificar que o token não foi alterado, o header e o payload são assinados com uma chave secreta no servidor.</li>
        </ol>
        <p><strong>Fluxo:</strong> O usuário faz login, o servidor valida as credenciais e retorna um JWT. Em cada requisição subsequente, o cliente envia o JWT no cabeçalho <code>Authorization</code>. O servidor verifica a assinatura para autorizar a requisição.</p>

        <h3>OAuth 2.0</h3>
        <p>OAuth 2.0 não é sobre autenticação, mas sim sobre <strong>autorização</strong>. É um framework que permite que uma aplicação obtenha acesso limitado a uma conta de usuário em um serviço HTTP, como "Fazer login com o Google" ou "Fazer login com o Facebook".</p>
        <p>Ele permite que o usuário conceda permissão a uma aplicação terceira para acessar seus dados em outro serviço, sem compartilhar suas credenciais (senha).</p>
        <p><strong>Fluxo Simplificado:</strong></p>
        <ol>
            <li>Sua aplicação redireciona o usuário para o provedor (ex: Google).</li>
            <li>O usuário faz login no Google e autoriza sua aplicação.</li>
            <li>O Google redireciona o usuário de volta para sua aplicação com um código de autorização.</li>
            <li>Sua aplicação troca esse código por um "access token", que pode ser usado para fazer requisições à API do Google em nome do usuário.</li>
        </ol>
    `
};
