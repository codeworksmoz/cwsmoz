import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "qa-t5-testing-with-doubles",
    title: "Aplicando Dublês de Teste",
    content: `
        <h2>Escolhendo o Dublê Certo para o Trabalho</h2>
        <p>Entender a diferença entre Stubs, Mocks, Fakes e Spies é crucial para escrever testes unitários eficazes, limpos e de alta qualidade.</p>
        
        <h3>Guia Rápido: Qual Dublê Usar?</h3>
        <dl>
            <dt class="font-bold mt-4">Use um <strong>Stub</strong> quando:</dt>
            <dd class="ml-4">
                Seu teste precisa de uma dependência para estar em um certo estado ou para retornar um valor específico. Você não se importa com as interações, apenas com o estado que ele fornece.
                <br/>
                <em>Pergunta-chave: O teste precisa de dados de uma dependência para funcionar?</em>
            </dd>

            <dt class="font-bold mt-4">Use um <strong>Mock</strong> quando:</dt>
            <dd class="ml-4">
                Você quer verificar se sua unidade sob teste chama corretamente os métodos de uma dependência. O foco é testar o comportamento e as interações de saída.
                <br/>
                <em>Pergunta-chave: O teste precisa verificar se um método foi chamado em uma dependência?</em>
            </dd>
            
            <dt class="font-bold mt-4">Use um <strong>Fake</strong> quando:</dt>
            <dd class="ml-4">
                Você precisa de uma dependência com comportamento real, mas a implementação de produção é muito lenta, cara ou complexa para usar em testes (ex: um banco de dados real, uma API de pagamento).
                <br/>
                <em>Pergunta-chave: O teste precisa de uma dependência funcional, mas a versão de produção é inviável?</em>
            </dd>

            <dt class="font-bold mt-4">Use um <strong>Spy</strong> quando:</dt>
            <dd class="ml-4">
                Você quer verificar as interações com um método, mas ainda precisa que a implementação original do método seja executada.
                <br/>
                <em>Pergunta-chave: O teste precisa verificar uma chamada de método sem substituir sua lógica original?</em>
            </dd>
        </dl>
        
        <p class="mt-4">Escolher o dublê correto torna seus testes mais claros sobre suas intenções. Um teste que usa um Stub está testando o estado, enquanto um teste que usa um Mock está testando o comportamento.</p>
    `
};
