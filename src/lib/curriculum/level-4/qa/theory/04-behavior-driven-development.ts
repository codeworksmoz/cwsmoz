import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "qa-t4-bdd",
    title: "Behavior-Driven Development (BDD)",
    content: `
        <h2>Colaboração entre Negócio e Desenvolvimento</h2>
        <p><strong>Behavior-Driven Development (BDD)</strong> é uma evolução do TDD. Ele foca em usar exemplos para descrever o comportamento de um sistema de uma forma que seja compreensível para todos os envolvidos: desenvolvedores, QAs e pessoas de negócio (não-técnicas).</p>
        <p>BDD usa uma linguagem natural estruturada para especificar o comportamento esperado do software, que pode então ser usada para guiar o desenvolvimento e a automação de testes.</p>
        
        <h3>Gherkin: A Linguagem do BDD</h3>
        <p>Gherkin é a sintaxe mais comum para escrever essas especificações. Ela usa palavras-chave como <code>Given</code>, <code>When</code>, e <code>Then</code> para estruturar os cenários.</p>
        
        <pre><code class="language-gherkin">Feature: Saque em Caixa Eletrônico

  Scenario: Conta com saldo suficiente
    Given que o cliente tem uma conta com saldo de R$ 100
    When o cliente solicita um saque de R$ 20
    Then o caixa eletrônico deve dispensar R$ 20
    And o saldo da conta deve ser R$ 80
</code></pre>
        <ul>
            <li><strong>Given (Dado que):</strong> Descreve o estado inicial do sistema, o contexto.</li>
            <li><strong>When (Quando):</strong> Descreve a ação que o usuário executa.</li>
            <li><strong>Then (Então):</strong> Descreve o resultado esperado, a consequência da ação.</li>
        </ul>
        
        <h3>BDD vs. TDD</h3>
        <p>BDD não substitui o TDD; eles se complementam. BDD opera em um nível mais alto (comportamento do sistema, features), enquanto TDD opera em um nível mais baixo (unidades de código, funções).</p>
        <p>As especificações Gherkin podem ser automatizadas usando ferramentas como <strong>Cucumber</strong> ou <strong>SpecFlow</strong>. Cada passo (Given, When, Then) é mapeado para um código de automação de teste. Isso cria testes de aceitação automatizados que são legíveis por todos os stakeholders, servindo como uma documentação viva e verificável do comportamento do sistema.</p>
    `
};
