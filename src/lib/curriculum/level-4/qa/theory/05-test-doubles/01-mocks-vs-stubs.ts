import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "qa-t5-mocks-stubs",
    title: "Dublês de Teste: Mocks vs. Stubs",
    content: `
        <h2>Substituindo Dependências em Testes</h2>
        <p>Ao escrever testes unitários, queremos testar uma unidade de código de forma isolada. Se essa unidade depende de outros objetos (como uma chamada de API ou um banco de dados), precisamos substituir essas dependências por "dublês de teste" (Test Doubles).</p>
        <p>Mocks e Stubs são os tipos mais comuns de dublês, mas muitas vezes são confundidos.</p>
        
        <h3>Stubs: Foco no Estado</h3>
        <p>Um <strong>Stub</strong> fornece respostas pré-definidas para chamadas feitas durante o teste. Ele é usado quando seu teste precisa de uma dependência para fornecer certos dados para que a unidade sob teste funcione.</p>
        <p>O foco de um stub é fornecer o <strong>estado</strong> necessário para o teste. Você não verifica se o stub foi chamado ou como foi chamado.</p>
        <pre><code class="language-javascript">// Exemplo: Testando uma função que depende de um serviço de usuário.
// O Stub apenas fornece o dado esperado.
const stubServicoUsuario = {
    buscarPorId: (id) => ({ id: id, nome: 'Usuário Falso' })
};

// ... no teste, você usa o stubServicoUsuario
const usuario = minhaFuncao(stubServicoUsuario);
expect(usuario.nome).toBe('Usuário Falso');
</code></pre>
        
        <h3>Mocks: Foco no Comportamento</h3>
        <p>Um <strong>Mock</strong> é um objeto que registra as chamadas que recebe. Em um teste usando mocks, você primeiro define as expectativas (quais métodos devem ser chamados, com quais argumentos), depois executa o código e, no final, verifica se as expectativas foram atendidas.</p>
        <p>O foco de um mock é verificar o <strong>comportamento</strong> — a interação entre a unidade sob teste e sua dependência.</p>
        <pre><code class="language-javascript">// Exemplo com Jest Mocks
// Verificando se um serviço de log é chamado
const mockServicoLog = {
    registrarErro: jest.fn() // Cria uma função mock
};

minhaFuncaoDeErro(mockServicoLog);

// Verificação de comportamento: O método foi chamado?
expect(mockServicoLog.registrarErro).toHaveBeenCalled();
expect(mockServicoLog.registrarErro).toHaveBeenCalledWith('Mensagem de erro');
</code></pre>
        
        <p><strong>Resumo:</strong> Use <strong>Stubs</strong> para fornecer dados/estado ao seu teste. Use <strong>Mocks</strong> para verificar se certas interações/comportamentos ocorrem.</p>
    `
};
