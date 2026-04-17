import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-ddd-domain-services",
    title: "DDD: Serviços de Domínio (Domain Services)",
    content: `
        <h2>Quando uma Operação Não se Encaixa em uma Entidade</h2>
        <p>Às vezes, uma operação ou um processo de negócio não pertence naturalmente a nenhuma entidade ou objeto de valor específico. Forçar essa lógica em uma entidade pode quebrar o Princípio da Responsabilidade Única.</p>
        <p>Nesses casos, o DDD introduz o conceito de <strong>Serviços de Domínio</strong>.</p>
        
        <h3>Características dos Serviços de Domínio:</h3>
        <ul>
            <li><strong>Sem Estado (Stateless):</strong> Eles não têm estado próprio. Sua única responsabilidade é orquestrar a lógica de negócio, recebendo objetos de domínio, realizando a operação e retornando o resultado.</li>
            <li><strong>Lógica de Domínio Explícita:</strong> O nome do serviço e de seus métodos devem fazer parte da Linguagem Ubíqua.</li>
            <li><strong>Coordenam Múltiplos Agregados:</strong> Muitas vezes, um serviço de domínio é necessário para realizar uma operação que envolve múltiplos agregados. Por exemplo, uma transferência de dinheiro entre duas <code>Contas</code>. Essa lógica não pertence a uma única conta, então um <code>ServicoDeTransferencia</code> é uma boa solução.</li>
        </ul>

        <pre><code class="language-typescript">class ServicoDeTransferencia {
    public transferir(contaOrigem: Conta, contaDestino: Conta, valor: Dinheiro): void {
        // Validações que envolvem ambas as contas
        if (!this.podeTransferir(contaOrigem, valor)) {
            throw new Error("Saldo insuficiente.");
        }
        
        // Orquestra a operação
        contaOrigem.debitar(valor);
        contaDestino.creditar(valor);
    }

    private podeTransferir(conta: Conta, valor: Dinheiro): boolean {
        // ...
    }
}
</code></pre>
        <p>É importante distinguir Serviços de Domínio (que contêm lógica de negócio) de Serviços de Aplicação (que coordenam o fluxo de trabalho, mas não contêm a lógica em si).</p>
    `
};
