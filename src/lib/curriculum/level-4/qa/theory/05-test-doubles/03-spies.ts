import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "qa-t5-spies",
    title: "Dublês de Teste: Spies",
    content: `
        <h2>Observando o Comportamento sem Interferir</h2>
        <p>Um <strong>Spy</strong> (Espião) é um dublê de teste que "embrulha" um objeto real para registrar informações sobre como ele é usado. Ao contrário de Mocks, que substituem completamente o objeto, um Spy observa o objeto real, permitindo que a implementação original seja executada.</p>
        
        <h3>Características de um Spy:</h3>
        <ul>
            <li>
                <strong>Envolve um Objeto Real:</strong> O Spy não substitui a lógica original; ele a executa.
            </li>
            <li>
                <strong>Grava Informações:</strong> Ele registra informações como: quantas vezes um método foi chamado, quais argumentos foram passados, quais valores foram retornados, etc.
            </li>
            <li>
                <strong>Verificação Pós-Fato:</strong> Você executa o seu teste e, no final, usa o Spy para fazer asserções sobre o que aconteceu com o objeto real.
            </li>
        </ul>
        
        <h3>Exemplo com Jest</h3>
        <p>A biblioteca de testes Jest fornece uma função <code>jest.spyOn()</code> que é perfeita para isso.</p>
        <pre><code class="language-javascript">// Objeto real que queremos espionar
const calculadora = {
  somar: (a, b) => a + b,
};

// Criamos um espião no método 'somar'
const spy = jest.spyOn(calculadora, 'somar');

// Executamos nosso código que usa a calculadora
const resultado = calculadora.somar(2, 3);

// Agora, podemos fazer asserções
test('deve chamar o método somar e retornar o valor correto', () => {
    // Verificamos se o valor retornado está correto
    expect(resultado).toBe(5);

    // E usamos o espião para verificar o comportamento
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(2, 3);
});

// É importante restaurar o espião após o teste
spy.mockRestore();
</code></pre>
        
        <h3>Spy vs. Mock</h3>
        <p>A linha entre Spies e Mocks pode ser tênue. Um Spy é útil quando você quer verificar se um método foi chamado, mas <strong>ainda precisa que a lógica original desse método seja executada</strong>. Um Mock, por outro lado, substitui completamente a implementação original.</p>
    `
};
