import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "req-t3-acceptance-criteria",
    title: "Histórias de Usuário: Critérios de Aceitação",
    content: `
        <h2>Definindo "Pronto" para uma História</h2>
        <p><strong>Critérios de Aceitação</strong> são um conjunto de condições predefinidas que uma história de usuário deve satisfazer para ser considerada "concluída" com sucesso. Eles fornecem os detalhes necessários para a história ser testável e removem a ambiguidade.</p>
        <p>Eles são escritos da perspectiva do usuário ou do sistema e definem os limites de uma história, ajudando a equipe a entender o que está e o que não está no escopo.</p>

        <h3>Propósitos dos Critérios de Aceitação:</h3>
        <ul>
            <li>Esclarecer o que deve ser construído.</li>
            <li>Garantir que todos (desenvolvedores, QAs, PO) tenham um entendimento compartilhado.</li>
            <li>Formar a base para os testes de aceitação.</li>
        </ul>

        <h3>Formatos Comuns:</h3>
        <ol>
            <li>
                <strong>Checklist (Baseado em Regras):</strong> Uma lista simples de regras que devem ser verdadeiras.
                <p><strong>Exemplo:</strong> Para uma história de login...</p>
                <ul>
                    <li>✅ O usuário deve conseguir fazer login com email e senha válidos.</li>
                    <li>✅ Uma mensagem de erro deve ser exibida se o email não existir.</li>
                    <li>✅ Uma mensagem de erro deve ser exibida se a senha estiver incorreta.</li>
                    <li>✅ O campo de senha deve estar mascarado.</li>
                </ul>
            </li>
            <li>
                <strong>Gherkin (Baseado em Cenários):</strong> Um formato mais estruturado, comum em BDD, que descreve o comportamento em termos de <code>Given/When/Then</code>.
                <p><strong>Exemplo:</strong></p>
                <pre><code class="language-gherkin">Scenario: Login com sucesso
  Given que o usuário está na página de login
  And ele insere um email e senha válidos
  When ele clica no botão "Entrar"
  Then ele deve ser redirecionado para o painel de controle
</code></pre>
            </li>
        </ol>
        <p>Bons critérios de aceitação são claros, concisos e testáveis. Eles devem ser escritos antes do início do desenvolvimento da história.</p>
    `
};
