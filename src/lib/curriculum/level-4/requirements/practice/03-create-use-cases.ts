import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'req-ex-3',
    title: 'Prática: Escrevendo um Caso de Uso',
    statement: 'Escreva um Caso de Uso textual detalhado para a funcionalidade "Sacar Dinheiro de um Caixa Eletrônico". Inclua o fluxo principal e pelo menos um fluxo de exceção.',
    template: `// ID do Caso de Uso: UC-01
// Nome: Sacar Dinheiro

// Atores: Cliente do Banco

// Pré-condições:
// 1. O cliente está autenticado no caixa eletrônico (cartão inserido e senha validada).

// Pós-condições:
// 1. O dinheiro é entregue ao cliente e o saldo da conta é atualizado.

// Fluxo Principal:
// 1. O Sistema exibe as opções de transação.
// 2. O Cliente seleciona a opção "Saque".
// 3. ...
// 4. ...
// 5. ...

// Fluxo de Exceção (Saldo Insuficiente):
// 3a. No passo 3, o Sistema verifica que o saldo é insuficiente.
// 3b. ...
`,
    youtubeVideoId: 'U8D9IL1e3gk',
    detailedExplanation: `
        <h2>Detalhando a Interação</h2>
        <p>Casos de Uso são mais detalhados que Histórias de Usuário e descrevem a interação passo a passo entre o ator e o sistema.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>Preencha as Seções:</strong> Comece com os metadados (ID, Nome, Atores, Pré/Pós-condições).</li>
            <li><strong>Fluxo Principal:</strong> Descreva o "caminho feliz". O cliente seleciona "Saque", digita o valor, o sistema valida o saldo, entrega o dinheiro e atualiza o saldo. Detalhe cada passo dessa interação.</li>
            <li><strong>Fluxo de Exceção:</strong> Pense no que pode dar errado. O cenário mais óbvio é "Saldo Insuficiente". Descreva como o sistema deve reagir nesse caso: em qual passo do fluxo principal a exceção ocorre e qual mensagem é exibida ao cliente.</li>
        </ol>
    `
};
