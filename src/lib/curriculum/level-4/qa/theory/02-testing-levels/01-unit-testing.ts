import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "qa-t2-unit-testing",
    title: "Níveis de Teste: Testes Unitários",
    content: `
        <h2>Verificando a Menor Unidade</h2>
        <p><strong>Testes Unitários</strong> são o alicerce de uma estratégia de testes sólida. Eles se concentram em testar a menor "unidade" de código de forma completamente isolada do resto do sistema.</p>
        <p>O que é uma "unidade"? Geralmente, é uma única função ou método de uma classe.</p>
        
        <h3>Características dos Testes Unitários:</h3>
        <ul>
            <li><strong>Isolamento:</strong> A unidade sob teste não deve depender de sistemas externos como redes, bancos de dados ou o sistema de arquivos. Essas dependências devem ser substituídas por "dublês de teste" (Mocks, Stubs).</li>
            <li><strong>Velocidade:</strong> Devem ser extremamente rápidos. Uma suíte de milhares de testes unitários deve rodar em segundos.</li>
            <li><strong>Foco:</strong> Testam uma única coisa. Se um teste unitário falha, ele deve apontar com precisão onde o problema está.</li>
        </ul>

        <h3>Estrutura de um Teste (Arrange-Act-Assert):</h3>
        <ol>
            <li><strong>Arrange (Arranjar):</strong> Prepare tudo o que for necessário para o teste (instanciar objetos, definir variáveis, configurar mocks).</li>
            <li><strong>Act (Agir):</strong> Execute a função ou método que você está testando.</li>
            <li><strong>Assert (Afirmar):</strong> Verifique se o resultado da ação corresponde ao resultado esperado.</li>
        </ol>
    `
};
