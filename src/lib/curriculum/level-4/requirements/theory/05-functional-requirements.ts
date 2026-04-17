import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "req-t5-functional-reqs",
    title: "Requisitos Funcionais",
    content: `
        <h2>Especificando o Comportamento do Sistema</h2>
        <p><strong>Requisitos Funcionais</strong> definem o que um sistema de software deve fazer. Eles especificam uma função, comportamento ou tarefa que o sistema deve ser capaz de executar. Essencialmente, eles são as "funções" do sistema.</p>
        
        <h3>Características:</h3>
        <ul>
            <li>Descrevem as interações entre o sistema e seus usuários.</li>
            <li>Definem as entradas, o comportamento e as saídas do sistema.</li>
            <li>São geralmente derivados de casos de uso e histórias de usuário.</li>
        </ul>

        <h3>Exemplos de Requisitos Funcionais:</h3>
        <ul>
            <li>"O sistema deve permitir que um usuário se cadastre fornecendo nome, email e senha."</li>
            <li>"O sistema deve enviar um email de confirmação após o cadastro bem-sucedido."</li>
            <li>"O usuário deve ser capaz de buscar produtos por nome ou categoria."</li>
            <li>"O sistema deve calcular o valor total de um carrinho de compras, incluindo impostos."</li>
            <li>"Apenas usuários com o papel 'administrador' podem deletar outros usuários."</li>
        </ul>

        <h3>Documentando Requisitos Funcionais</h3>
        <p>Eles podem ser documentados de várias formas:</p>
        <ul>
            <li>Como uma lista de sentenças ("O sistema deve...").</li>
            <li>Em um documento de especificação de requisitos de software (SRS).</li>
            <li>Através de Casos de Uso detalhados.</li>
            <li>Como Histórias de Usuário com Critérios de Aceitação claros.</li>
        </ul>
        <p>A chave é que eles sejam claros, inequívocos, consistentes e testáveis. Cada requisito funcional deve ter uma maneira de verificar se ele foi ou não implementado corretamente.</p>
    `
};
