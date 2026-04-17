import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t12-express-advanced",
    title: "Express.js Avançado: Middleware, Roteamento e Tratamento de Erros",
    youtubeVideoId: "1-J8_jc9f2Q",
    content: `
        <h2>Estruturando Aplicações Web Robustas com Express</h2>
        <p>Express.js é o framework minimalista e flexível para Node.js. Dominar seus conceitos avançados é chave para construir APIs organizadas e manuteníveis.</p>
        
        <h3>Middleware: O Coração do Express</h3>
        <p>Middleware são funções que têm acesso ao objeto da requisição (<code>req</code>), ao objeto da resposta (<code>res</code>), e à próxima função de middleware no ciclo de requisição-resposta, geralmente denotada por uma variável chamada <code>next</code>.</p>
        <p>Middleware pode:</p>
        <ul>
            <li>Executar qualquer código.</li>
            <li>Fazer mudanças nos objetos de requisição e resposta.</li>
            <li>Encerrar o ciclo de requisição-resposta.</li>
            <li>Chamar o próximo middleware na pilha.</li>
        </ul>
        <pre><code class="language-javascript">const meuLogger = (req, res, next) => {
  console.log('LOG:', req.method, req.path);
  next(); // Passa o controle para o próximo middleware
};
app.use(meuLogger);
        </code></pre>

        <h3>Roteamento Modular</h3>
        <p>Para aplicações grandes, você pode usar o <code>express.Router</code> para agrupar rotas relacionadas em módulos separados, mantendo seu arquivo principal limpo.</p>
        <pre><code class="language-javascript">// Em routes/usuarios.js
const router = require('express').Router();
router.get('/', (req, res) => { /* ... */ });
router.post('/', (req, res) => { /* ... */ });

// No seu arquivo principal app.js
const rotasDeUsuarios = require('./routes/usuarios');
app.use('/usuarios', rotasDeUsuarios);
        </code></pre>
        
        <h3>Tratamento de Erros Centralizado</h3>
        <p>Express trata como middleware de erro qualquer função que aceite quatro argumentos <code>(err, req, res, next)</code>. Você pode definir um ou mais desses middlewares no final da sua pilha para capturar e processar todos os erros que ocorrem na sua aplicação de forma centralizada.</p>
        <pre><code class="language-javascript">app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});
        </code></pre>
    `
};
