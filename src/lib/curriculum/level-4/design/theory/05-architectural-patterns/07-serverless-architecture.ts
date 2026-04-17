import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-serverless",
    title: "Arquitetura Serverless",
    content: `
        <h2>Executando Código sem Gerenciar Servidores</h2>
        <p><strong>Serverless</strong> não significa que não há servidores. Significa que você, como desenvolvedor, não precisa mais gerenciar a infraestrutura do servidor. O provedor de nuvem (como AWS, Vercel, etc.) cuida de provisionar, escalar e manter os servidores para executar seu código.</p>
        <p><strong>Functions as a Service (FaaS)</strong> é o modelo de computação central do serverless. Você escreve seu código em pequenas funções independentes, e o provedor de nuvem as executa em resposta a eventos (como uma requisição HTTP).</p>

        <h3>Vantagens:</h3>
        <ul>
            <li><strong>Custo:</strong> Pague apenas pelo tempo de execução real da sua função.</li>
            <li><strong>Escalabilidade Automática:</strong> A plataforma escala de zero a milhares de requisições sem intervenção manual.</li>
            <li><strong>Foco no Código:</strong> Menos tempo gasto em configuração e manutenção de infraestrutura.</li>
        </ul>
        
        <h3>Desafios:</h3>
        <ul>
            <li><strong>Cold Starts:</strong> A primeira requisição para uma função "fria" (que não é executada há algum tempo) pode ter uma latência maior, pois a plataforma precisa inicializar o ambiente.</li>
            <li><strong>Limitações:</strong> Funções serverless geralmente têm limites de tempo de execução e memória.</li>
            <li><strong>Estado:</strong> São inerentemente sem estado (stateless), o que requer o uso de bancos de dados ou caches para gerenciar o estado entre as invocações.</li>
        </ul>
    `
};
