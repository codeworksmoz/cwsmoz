import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t11-nodejs-advanced",
    title: "Node.js Avançado: Event Loop, Streams e Performance",
    youtubeVideoId: "P9csgxBgaZ8",
    content: `
        <h2>Dominando o Lado do Servidor com Node.js</h2>
        <p>Para construir aplicações de alta performance, é crucial entender os conceitos fundamentais que fazem o Node.js ser tão poderoso.</p>
        
        <h3>O Event Loop em Detalhes</h3>
        <p>Já introduzido, o Event Loop é o coração do modelo de concorrência não-bloqueante do Node. Ele permite que o Node.js realize operações de I/O (entrada/saída) de forma eficiente, delegando-as ao sistema operacional. Enquanto a operação está em andamento, o Node.js pode continuar a executar outro código. Quando a operação termina, um callback é colocado na fila de eventos para ser executado.</p>

        <h3>Streams</h3>
        <p>Streams são coleções de dados que podem não estar disponíveis de uma só vez, e não precisam caber na memória. Eles permitem ler ou escrever dados de forma contínua. Usar streams é extremamente eficiente para manipular grandes volumes de dados, como ler arquivos grandes ou lidar com uploads de arquivos.</p>
        <pre><code class="language-javascript">const fs = require('fs');
const readStream = fs.createReadStream('./arquivo_grande.txt');
const writeStream = fs.createWriteStream('./novo_arquivo.txt');

readStream.pipe(writeStream); // Conecta a leitura diretamente à escrita, muito eficiente!
        </code></pre>

        <h3>Clusters e Child Processes</h3>
        <p>Como o Node.js opera em uma única thread, ele não tira proveito de sistemas com múltiplos núcleos de CPU por padrão. Para escalar, usamos:</p>
        <ul>
            <li><strong>Módulo Cluster:</strong> Permite a criação de processos "filhos" (child processes) que compartilham a mesma porta do servidor. Isso permite que uma aplicação Node.js rode em múltiplos núcleos, distribuindo a carga de requisições entre eles.</li>
            <li><strong>Módulo Child Process:</strong> Permite executar comandos externos ou outros scripts, útil para delegar tarefas pesadas em termos de CPU para outros processos sem bloquear o event loop principal.</li>
        </ul>
    `
};
