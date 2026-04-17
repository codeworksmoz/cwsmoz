import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t36-unit-testing",
    title: "Testes Unitários: Jest e Vitest",
    youtubeVideoId: "T2sv8jXoP4s",
    content: `
        <h2>Testando a Menor Parte do seu Código</h2>
        <p><strong>Testes Unitários</strong> verificam a menor unidade de código testável — uma função, um método ou um componente — de forma isolada do resto da aplicação. O objetivo é validar que cada unidade de software funciona como esperado.</p>

        <h3>Estrutura de um Teste: AAA</h3>
        <p>Um bom teste unitário geralmente segue o padrão "Arrange, Act, Assert":</p>
        <ol>
            <li><strong>Arrange (Arranjar):</strong> Configure as condições iniciais. Crie variáveis, instancie objetos, etc.</li>
            <li><strong>Act (Agir):</strong> Execute a unidade de código que você está testando (ex: chame a função).</li>
            <li><strong>Assert (Afirmar):</strong> Verifique se o resultado da ação corresponde ao resultado esperado. Se não corresponder, o teste falha.</li>
        </ol>

        <h3>Ferramentas Populares:</h3>
        <ul>
            <li><strong>Jest:</strong> Um framework de testes "tudo em um" criado pelo Facebook. Inclui um test runner, uma biblioteca de asserções e funcionalidades de mock integradas. É o padrão em muitas aplicações React.</li>
            <li><strong>Vitest:</strong> Um framework de testes moderno e extremamente rápido, construído sobre o Vite. Possui uma API compatível com o Jest, tornando a migração fácil. É uma excelente escolha para projetos que já usam Vite.</li>
        </ul>
        <pre><code class="language-javascript">// Exemplo de teste com sintaxe do Jest/Vitest
import { somar } from './matematica';

describe('matematica', () => {
  it('deve somar dois números corretamente', () => {
    // Arrange
    const a = 2;
    const b = 3;
    
    // Act
    const resultado = somar(a, b);
    
    // Assert
    expect(resultado).toBe(5);
  });
});
</code></pre>
        <h3>Mocks</h3>
        <p>Para testar uma unidade de forma isolada, às vezes precisamos substituir suas dependências (como uma chamada de API ou um módulo) por "dublês" (test doubles). Mocks são um tipo de dublê que permite simular o comportamento de dependências e verificar se elas foram chamadas corretamente.</p>
    `
};
