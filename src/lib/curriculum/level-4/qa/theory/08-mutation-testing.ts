import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "qa-t8-mutation-testing",
    title: "Teste de Mutação (Mutation Testing)",
    content: `
        <h2>Testando seus Testes</h2>
        <p>Se a cobertura de código mede quanto do seu código é testado, o <strong>Teste de Mutação</strong> mede a <em>qualidade</em> dos seus testes. Ele responde à pergunta: "Meus testes são bons o suficiente para detectar bugs?"</p>
        
        <h3>Como Funciona?</h3>
        <p>Uma ferramenta de teste de mutação pega seu código-fonte e cria várias cópias dele, introduzindo pequenas falhas (mutações) em cada cópia. Em seguida, ela executa sua suíte de testes contra cada uma dessas versões mutantes.</p>
        <p>Exemplos de mutações:</p>
        <ul>
            <li>Trocar um <code>+</code> por um <code>-</code>.</li>
            <li>Trocar um <code><</code> por um <code><=</code>.</li>
            <li>Remover uma linha de código.</li>
            <li>Trocar <code>true</code> por <code>false</code>.</li>
        </ul>
        
        <h3>Analisando os Resultados:</h3>
        <ul>
            <li>
                <strong>Mutante Morto (Killed):</strong> Se sua suíte de testes falha para uma versão mutante, ótimo! Isso significa que seus testes foram capazes de "matar" o mutante, ou seja, detectar o bug introduzido.
            </li>
            <li>
                <strong>Mutante Sobrevivente (Survived):</strong> Se sua suíte de testes continua passando mesmo com o código mutante, isso é um problema. Significa que seus testes não são sensíveis o suficiente para detectar aquela falha específica. O mutante "sobreviveu".
            </li>
        </ul>

        <h3>Pontuação da Mutação (Mutation Score)</h3>
        <p>A qualidade da sua suíte de testes é medida pela porcentagem de mutantes que foram mortos. Um score alto indica que seus testes são robustos.</p>
        <p>O objetivo do teste de mutação é encontrar os "mutantes sobreviventes" para que você possa melhorar seus testes, adicionando asserções que detectariam aquela falha específica.</p>

        <h3>Ferramentas:</h3>
        <ul>
            <li><strong>StrykerJS:</strong> A ferramenta de teste de mutação mais popular para JavaScript, TypeScript e C#.</li>
            <li><strong>PIT:</strong> Uma ferramenta popular para Java.</li>
        </ul>
        <p>O teste de mutação é computacionalmente caro e lento, por isso geralmente não é executado em cada commit, mas pode ser executado periodicamente para avaliar e melhorar a qualidade da suíte de testes.</p>
    `
};
