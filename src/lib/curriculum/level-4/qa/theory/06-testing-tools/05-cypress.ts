import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "qa-t6-cypress",
    title: "Ferramentas: Cypress",
    content: `
        <h2>Uma Nova Experiência em Testes End-to-End</h2>
        <p><strong>Cypress</strong> é uma ferramenta de teste de ponta a ponta (E2E) de nova geração, construída para a web moderna. Ele se diferencia por sua arquitetura única, que executa os testes no mesmo loop de execução que a sua aplicação, dando-lhe controle e visibilidade sem precedentes sobre o que está acontecendo.</p>
        
        <h3>Recursos Notáveis:</h3>
        <ul>
            <li>
                <strong>Time Travel e Debugging Visual:</strong> A GUI do Cypress permite que você veja snapshots da sua aplicação para cada passo do teste. Você pode "voltar no tempo" para ver o estado da aplicação em qualquer ponto, inspecionar o DOM, e ver eventos de rede, tornando a depuração de testes E2E muito mais fácil.
            </li>
            <li>
                <strong>Esperas Automáticas (Automatic Waits):</strong> Assim como o Playwright, o Cypress espera automaticamente por comandos e asserções antes de prosseguir, eliminando a fragilidade (flakiness) dos testes.
            </li>
            <li>
                <strong>Controle de Rede:</strong> Permite que você controle, faça stub e teste o tráfego de rede sem envolver seu servidor, dando-lhe controle total sobre as respostas de API durante os testes.
            </li>
            <li>
                <strong>Tudo em Um:</strong> Vem com todas as ferramentas necessárias (biblioteca de asserções, mocks, stubs) integradas.
            </li>
        </ul>
        
        <h3>Exemplo de um Teste E2E:</h3>
        <pre><code class="language-javascript">describe('Minha Aplicação', () => {
  it('preenche um formulário com sucesso', () => {
    // Visita a página
    cy.visit('/minha-pagina');
    
    // Encontra um elemento pelo seu seletor e digita nele
    cy.get('.meu-input').type('Olá, Mundo');
    
    // Encontra um formulário e o submete
    cy.get('form').submit();
    
    // Verifica se a nova página contém o texto esperado
    cy.contains('Formulário enviado com sucesso!');
  });
});
</code></pre>
        <p>Embora tradicionalmente focado no Chrome e navegadores baseados em Chromium, as versões mais recentes do Cypress também adicionaram suporte para Firefox e WebKit, tornando-o uma ferramenta ainda mais completa para testes E2E.</p>
    `
};
