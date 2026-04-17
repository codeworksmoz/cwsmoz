import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "qa-t3-tdd-benefits",
    title: "TDD: Benefícios e Desafios",
    content: `
        <h2>Por que Adotar o TDD?</h2>
        <p>O Test-Driven Development (TDD) oferece uma série de vantagens que vão além da simples criação de testes.</p>
        
        <h3>Benefícios:</h3>
        <ul>
            <li>
                <strong>Segurança na Refatoração:</strong> TDD cria uma suíte de testes abrangente que atua como uma rede de segurança. Isso lhe dá a confiança para melhorar e refatorar seu código a qualquer momento, sabendo que os testes irão detectar se você quebrou algo.
            </li>
            <li>
                <strong>Design de Código Melhor:</strong> Escrever o teste primeiro força você a pensar na interface e no uso do seu código antes de implementá-lo. Isso geralmente leva a um design de API mais limpo e a um código mais desacoplado e fácil de testar.
            </li>
            <li>
                <strong>Documentação Viva:</strong> Os testes servem como uma documentação executável do que o código deve fazer. Um novo desenvolvedor pode ler os testes para entender o comportamento esperado de uma função.
            </li>
            <li>
                <strong>Cobertura de Testes de 100%:</strong> Por definição, nenhum código de produção é escrito a menos que haja um teste que falhe para ele. Isso garante uma alta cobertura de testes.
            </li>
        </ul>

        <h3>Desafios:</h3>
        <ul>
            <li>
                <strong>Curva de Aprendizagem:</strong> Pensar em "testes primeiro" é uma mudança de mentalidade que pode ser difícil para desenvolvedores acostumados com o fluxo tradicional.
            </li>
            <li>
                <strong>Velocidade Inicial:</strong> Pode parecer mais lento no início, pois você está escrevendo mais código (testes) antes de ver a funcionalidade pronta. No entanto, esse tempo é geralmente recuperado mais tarde pela redução no tempo de depuração.
            </li>
            <li>
                <strong>Dificuldade com Certos Sistemas:</strong> TDD pode ser mais difícil de aplicar em sistemas com interfaces de usuário complexas, ou que dependem fortemente de integrações externas, embora não seja impossível.
            </li>
        </ul>
        <p>Apesar dos desafios, muitas equipes consideram que os benefícios de longo prazo do TDD em termos de qualidade de código e manutenibilidade superam em muito o custo inicial.</p>
    `
};
