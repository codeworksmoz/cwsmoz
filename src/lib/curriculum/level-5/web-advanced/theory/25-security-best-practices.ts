import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t25-security-best-practices",
    title: "Boas Práticas de Segurança Web: CORS, CSP, HTTPS",
    youtubeVideoId: "0-wBqMAg5oU",
    content: `
        <h2>Protegendo sua Aplicação de Ataques Comuns</h2>
        <p>Segurança web é um campo vasto, mas algumas práticas fundamentais podem mitigar uma grande variedade de riscos.</p>
        
        <h3>HTTPS</h3>
        <p>Sempre use HTTPS (HTTP sobre TLS/SSL). Ele criptografa a comunicação entre o cliente e o servidor, prevenindo ataques "man-in-the-middle" onde um ator malicioso poderia ler ou modificar os dados em trânsito.</p>

        <h3>CORS (Cross-Origin Resource Sharing)</h3>
        <p>Por padrão, os navegadores implementam a "Same-Origin Policy", que impede que um script em uma origem (domínio) faça requisições para outra origem. CORS é um mecanismo que permite relaxar essa política de forma controlada. O servidor pode especificar quais outras origens têm permissão para acessá-lo através de cabeçalhos HTTP como <code>Access-Control-Allow-Origin</code>.</p>
        
        <h3>CSP (Content Security Policy)</h3>
        <p>CSP é uma camada extra de segurança que ajuda a detectar e mitigar certos tipos de ataques, como Cross-Site Scripting (XSS) e injeção de dados. Com um cabeçalho CSP, você diz ao navegador quais fontes de conteúdo (scripts, estilos, imagens) são confiáveis e podem ser carregadas.</p>
        <pre><code class="language-http">Content-Security-Policy: script-src 'self' https://apis.google.com
</code></pre>
        
        <h3>Helmet.js</h3>
        <p>Para aplicações Express/Node.js, <strong>Helmet</strong> é uma coleção de middlewares que define vários cabeçalhos HTTP relacionados à segurança, protegendo contra vulnerabilidades conhecidas. É uma maneira fácil de melhorar a segurança da sua aplicação com pouca configuração.</p>
        
        <h3>Prevenção de XSS e CSRF</h3>
        <ul>
            <li><strong>Cross-Site Scripting (XSS):</strong> Ocorre quando um atacante injeta scripts maliciosos em um site. Para prevenir, sempre valide e "escape" (sanitize) qualquer entrada do usuário antes de exibi-la na página.</li>
            <li><strong>Cross-Site Request Forgery (CSRF):</strong> Engana a vítima para que ela envie uma requisição maliciosa. A mitigação comum é usar tokens anti-CSRF.</li>
        </ul>
    `
};
