import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "req-t4-use-case-flows",
    title: "Casos de Uso: Fluxos Principal e Alternativos",
    content: `
        <h2>Mapeando os Caminhos do Usuário</h2>
        <p>A parte mais importante de um caso de uso é a descrição dos fluxos de interação. Eles detalham a "conversa" entre o ator e o sistema.</p>
        
        <h3>Fluxo Principal (Caminho Feliz)</h3>
        <p>O fluxo principal descreve a sequência de passos mais comum e direta para atingir o objetivo do caso de uso, sem erros ou desvios.</p>
        <p><strong>Exemplo: Caso de Uso "Fazer Login" - Fluxo Principal</strong></p>
        <ol class="list-decimal ml-6">
            <li>O Usuário insere seu email e senha.</li>
            <li>O Usuário clica no botão "Entrar".</li>
            <li>O Sistema valida as credenciais.</li>
            <li>O Sistema autentica o usuário.</li>
            <li>O Sistema redireciona o usuário para seu painel de controle.</li>
        </ol>

        <h3>Fluxos Alternativos</h3>
        <p>Fluxos alternativos são variações do fluxo principal que ainda resultam no sucesso do caso de uso. Eles representam desvios ou opções menos comuns.</p>
        <p><strong>Exemplo: Caso de Uso "Fazer Login" - Fluxo Alternativo (Lembrar-me)</strong></p>
        <ol class="list-decimal ml-6">
            <li>No passo 2 do Fluxo Principal, o Usuário marca a caixa "Lembrar-me" antes de clicar em "Entrar".</li>
            <li>O Sistema, além de autenticar o usuário (passo 4), armazena uma sessão persistente.</li>
            <li>O caso de uso continua do passo 5 do Fluxo Principal.</li>
        </ol>
        
        <h3>Fluxos de Exceção</h3>
        <p>Fluxos de exceção descrevem o que acontece quando algo dá errado e o objetivo do caso de uso não pode ser alcançado.</p>
        <p><strong>Exemplo: Caso de Uso "Fazer Login" - Fluxo de Exceção (Credenciais Inválidas)</strong></p>
        <ol class="list-decimal ml-6">
            <li>No passo 3 do Fluxo Principal, o Sistema determina que as credenciais são inválidas.</li>
            <li>O Sistema exibe a mensagem "Email ou senha incorretos".</li>
            <li>O caso de uso termina.</li>
        </ol>
        
        <p>Descrever esses diferentes fluxos de forma clara ajuda a garantir que todos os cenários possíveis sejam considerados durante o desenvolvimento e os testes.</p>
    `
};
