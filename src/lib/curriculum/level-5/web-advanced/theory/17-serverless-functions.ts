import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t17-serverless-functions",
    title: "Funções Serverless (FaaS)",
    youtubeVideoId: "Ke3yIsB_Jxc",
    content: `
        <h2>Executando Código sem Gerenciar Servidores</h2>
        <p><strong>Serverless</strong> não significa que não há servidores. Significa que você, como desenvolvedor, não precisa mais gerenciar a infraestrutura do servidor. O provedor de nuvem (como AWS, Vercel, etc.) cuida de provisionar, escalar e manter os servidores para executar seu código.</p>
        <p><strong>Functions as a Service (FaaS)</strong> é o modelo de computação central do serverless. Você escreve seu código em pequenas funções independentes, e o provedor de nuvem as executa em resposta a eventos.</p>

        <h3>Como Funciona?</h3>
        <p>1. Você faz o upload do seu código de função para a plataforma.</p>
        <p>2. Você configura um gatilho (trigger) para essa função. O gatilho mais comum é uma requisição HTTP, mas pode ser um upload de arquivo, uma nova mensagem em uma fila, ou uma tarefa agendada.</p>
        <p>3. Quando o gatilho é acionado, a plataforma inicia um contêiner, executa sua função com os dados do evento e retorna o resultado.</p>
        <p>4. Se não houver mais requisições, a plataforma desliga o contêiner. Você paga apenas pelo tempo de execução real da sua função.</p>
        
        <h3>Provedores Populares:</h3>
        <ul>
            <li><strong>AWS Lambda:</strong> O serviço FaaS original e mais maduro, parte da Amazon Web Services.</li>
            <li><strong>Vercel Functions:</strong> Integrado perfeitamente com Next.js. Qualquer arquivo na pasta <code>app/api</code> de um projeto Next.js se torna uma função serverless automaticamente. Ideal para criar APIs para seu frontend.</li>
            <li><strong>Cloudflare Workers:</strong> Roda em uma rede global de "edge", o que significa que as funções são executadas fisicamente perto do usuário final, resultando em latência muito baixa.</li>
        </ul>

        <h3>Vantagens:</h3>
        <ul>
            <li><strong>Custo:</strong> Pague apenas pelo que usar.</li>
            <li><strong>Escalabilidade:</strong> A plataforma escala automaticamente de zero a milhares de requisições.</li>
            <li><strong>Foco no Código:</strong> Menos tempo gasto em configuração de infraestrutura.</li>
        </ul>
    `
};
